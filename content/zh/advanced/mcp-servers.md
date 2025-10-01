# MCP服务器

本指南介绍如何使用和配置MCP（Model Context Protocol）服务器来扩展Wucai Code的功能。

## MCP简介

MCP是一个标准协议，允许AI模型与外部工具和服务进行交互。Wucai Code支持MCP服务器，让您可以集成各种外部服务。

## 配置MCP服务器

### 基本配置
```json
{
  "mcp": {
    "servers": [
      {
        "name": "my-server",
        "command": "node",
        "args": ["./mcp-server.js"],
        "env": {
          "API_KEY": "your-api-key"
        }
      }
    ]
  }
}
```

### 服务器类型
- **本地服务器**: 运行在本地机器上
- **远程服务器**: 通过网络连接
- **Docker服务器**: 运行在Docker容器中

## 创建MCP服务器

### 基本服务器
```javascript
// mcp-server.js
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');

class MyMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'my-mcp-server',
        version: '1.0.0'
      },
      {
        capabilities: {
          tools: {}
        }
      }
    );

    this.setupHandlers();
  }

  setupHandlers() {
    // 工具列表
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: 'my-tool',
            description: 'My custom tool',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Input parameter'
                }
              },
              required: ['input']
            }
          }
        ]
      };
    });

    // 工具调用
    this.server.setRequestHandler('tools/call', async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'my-tool') {
        return await this.handleMyTool(args);
      }

      throw new Error(`Unknown tool: ${name}`);
    });

    // 资源列表
    this.server.setRequestHandler('resources/list', async () => {
      return {
        resources: [
          {
            uri: 'my-resource://data',
            name: 'My Resource',
            description: 'My custom resource',
            mimeType: 'application/json'
          }
        ]
      };
    });

    // 资源读取
    this.server.setRequestHandler('resources/read', async (request) => {
      const { uri } = request.params;

      if (uri === 'my-resource://data') {
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({ data: 'Hello from MCP server!' })
            }
          ]
        };
      }

      throw new Error(`Unknown resource: ${uri}`);
    });
  }

  async handleMyTool(args) {
    // 实现工具逻辑
    const result = await this.performTask(args.input);
    
    return {
      content: [
        {
          type: 'text',
          text: `Tool executed with input: ${args.input}, result: ${result}`
        }
      ]
    };
  }

  async performTask(input) {
    // 具体实现
    return `Processed: ${input}`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('MCP server running on stdio');
  }
}

// 启动服务器
const server = new MyMCPServer();
server.run().catch(console.error);
```

## 使用MCP服务器

### 启动服务器
```bash
> /mcp start my-server
```

### 列出可用工具
```bash
> /mcp tools
```

### 调用工具
```bash
> 使用my-tool处理这个数据
```

### 访问资源
```bash
> 读取my-resource://data资源
```

## 常见MCP服务器

### 文件系统服务器
```javascript
// 文件操作MCP服务器
class FileSystemMCPServer {
  setupHandlers() {
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: 'read_file',
            description: 'Read file contents',
            inputSchema: {
              type: 'object',
              properties: {
                path: { type: 'string' }
              },
              required: ['path']
            }
          },
          {
            name: 'write_file',
            description: 'Write file contents',
            inputSchema: {
              type: 'object',
              properties: {
                path: { type: 'string' },
                content: { type: 'string' }
              },
              required: ['path', 'content']
            }
          }
        ]
      };
    });
  }
}
```

### 数据库服务器
```javascript
// 数据库操作MCP服务器
class DatabaseMCPServer {
  setupHandlers() {
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: 'query_database',
            description: 'Execute database query',
            inputSchema: {
              type: 'object',
              properties: {
                query: { type: 'string' }
              },
              required: ['query']
            }
          }
        ]
      };
    });
  }
}
```

### API服务器
```javascript
// API调用MCP服务器
class APIMCPServer {
  setupHandlers() {
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: 'call_api',
            description: 'Call external API',
            inputSchema: {
              type: 'object',
              properties: {
                url: { type: 'string' },
                method: { type: 'string' },
                data: { type: 'object' }
              },
              required: ['url', 'method']
            }
          }
        ]
      };
    });
  }
}
```

## 配置示例

### 本地服务器配置
```json
{
  "mcp": {
    "servers": [
      {
        "name": "local-filesystem",
        "command": "node",
        "args": ["./mcp-servers/filesystem.js"],
        "cwd": "./mcp-servers"
      }
    ]
  }
}
```

### 远程服务器配置
```json
{
  "mcp": {
    "servers": [
      {
        "name": "remote-api",
        "transport": {
          "type": "http",
          "url": "https://api.example.com/mcp"
        },
        "auth": {
          "type": "bearer",
          "token": "your-token"
        }
      }
    ]
  }
}
```

### Docker服务器配置
```json
{
  "mcp": {
    "servers": [
      {
        "name": "docker-server",
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "my-mcp-server:latest"
        ]
      }
    ]
  }
}
```

## 最佳实践

### 1. 服务器设计
- 提供清晰的工具描述
- 实现完整的错误处理
- 使用适当的输入验证
- 提供详细的文档

### 2. 安全考虑
- 验证所有输入
- 限制文件系统访问
- 使用适当的认证
- 监控服务器活动

### 3. 性能优化
- 实现连接池
- 使用缓存机制
- 优化资源使用
- 监控性能指标

## 故障排除

### 服务器启动失败
1. 检查服务器配置
2. 验证依赖安装
3. 查看错误日志
4. 测试服务器连接

### 工具调用失败
1. 检查工具定义
2. 验证输入参数
3. 查看服务器日志
4. 测试工具功能

## 下一步

- [学习检查点功能](./checkpointing.md)
- [查看自定义配置](./customization.md)
- [探索实际示例](/zh/examples/automation)
- [学习故障排除](/zh/troubleshooting/common-issues)
