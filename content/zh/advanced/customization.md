# 高级自定义

本指南介绍Wucai Code的高级自定义功能，包括深度配置、插件开发和扩展功能。

## 深度配置

### 高级配置文件
```json
{
  "advanced": {
    "performance": {
      "maxConcurrentRequests": 5,
      "requestTimeout": 30000,
      "retryAttempts": 3,
      "cacheSize": "100MB",
      "cacheTTL": 3600
    },
    "security": {
      "allowedDomains": ["*.example.com"],
      "blockedCommands": ["rm", "format", "del"],
      "requireConfirmation": true,
      "auditLog": true
    },
    "ui": {
      "customTheme": {
        "name": "my-theme",
        "colors": {
          "primary": "#custom-color",
          "background": "#custom-bg"
        }
      },
      "layout": {
        "sidebar": true,
        "statusBar": true,
        "commandPalette": true
      }
    }
  }
}
```

### 环境变量配置
```bash
# 性能配置
export WUCAI_MAX_REQUESTS=10
export WUCAI_TIMEOUT=60000
export WUCAI_CACHE_SIZE=200MB

# 安全配置
export WUCAI_ALLOWED_HOSTS="*.example.com,*.test.com"
export WUCAI_BLOCKED_COMMANDS="rm,format,del"
export WUCAI_AUDIT_LOG=true

# 调试配置
export WUCAI_DEBUG=true
export WUCAI_VERBOSE=true
export WUCAI_LOG_LEVEL=debug
```

## 插件开发

### 创建自定义插件
```javascript
// my-plugin.js
class MyPlugin {
  constructor(config) {
    this.config = config;
    this.name = 'MyPlugin';
    this.version = '1.0.0';
  }

  // 插件初始化
  async initialize() {
    console.log('MyPlugin initialized');
  }

  // 处理命令
  async handleCommand(command, args) {
    if (command === 'mycommand') {
      return await this.executeMyCommand(args);
    }
  }

  // 自定义命令实现
  async executeMyCommand(args) {
    // 实现自定义逻辑
    return {
      success: true,
      message: 'Custom command executed',
      data: args
    };
  }

  // 插件清理
  async cleanup() {
    console.log('MyPlugin cleaned up');
  }
}

module.exports = MyPlugin;
```

### 插件配置
```json
{
  "plugins": {
    "my-plugin": {
      "enabled": true,
      "config": {
        "customOption": "value"
      }
    }
  }
}
```

## 自定义工具

### 创建自定义工具
```javascript
// custom-tool.js
class CustomTool {
  constructor() {
    this.name = 'custom-tool';
    this.description = 'Custom tool for specific tasks';
  }

  async execute(params) {
    // 实现工具逻辑
    const result = await this.performTask(params);
    return {
      success: true,
      result: result
    };
  }

  async performTask(params) {
    // 具体实现
    return 'Task completed';
  }
}

module.exports = CustomTool;
```

### 工具注册
```json
{
  "tools": {
    "custom-tool": {
      "enabled": true,
      "path": "./plugins/custom-tool.js",
      "config": {
        "option1": "value1"
      }
    }
  }
}
```

## 主题开发

### 创建自定义主题
```json
{
  "theme": {
    "name": "my-custom-theme",
    "version": "1.0.0",
    "description": "My custom theme",
    "colors": {
      "primary": "#ff6b6b",
      "secondary": "#4ecdc4",
      "background": "#2c3e50",
      "foreground": "#ecf0f1",
      "accent": "#f39c12",
      "muted": "#7f8c8d",
      "success": "#27ae60",
      "warning": "#f39c12",
      "error": "#e74c3c",
      "info": "#3498db"
    },
    "fonts": {
      "family": "Fira Code, monospace",
      "size": 14,
      "weight": "normal"
    },
    "spacing": {
      "padding": 12,
      "margin": 8,
      "lineHeight": 1.6
    },
    "borders": {
      "width": 2,
      "radius": 6,
      "color": "#34495e"
    }
  }
}
```

### 主题应用
```bash
> /theme import my-custom-theme.json
> /theme apply my-custom-theme
```

## 脚本自动化

### 创建自动化脚本
```javascript
// automation-script.js
const { WucaiCode } = require('@wucai/wucai-code');

class AutomationScript {
  constructor() {
    this.wucai = new WucaiCode();
  }

  async run() {
    try {
      // 初始化
      await this.wucai.initialize();

      // 执行任务
      await this.executeTasks();

      // 清理
      await this.cleanup();
    } catch (error) {
      console.error('自动化脚本执行失败:', error);
    }
  }

  async executeTasks() {
    // 任务1：代码分析
    const analysisResult = await this.wucai.analyzeCode('./src');
    console.log('代码分析结果:', analysisResult);

    // 任务2：生成测试
    const testResult = await this.wucai.generateTests('./src/main.js');
    console.log('测试生成结果:', testResult);

    // 任务3：文档生成
    const docResult = await this.wucai.generateDocs('./src');
    console.log('文档生成结果:', docResult);
  }

  async cleanup() {
    await this.wucai.cleanup();
  }
}

// 运行脚本
const script = new AutomationScript();
script.run();
```

## 集成开发

### API集成
```javascript
// api-integration.js
class APIIntegration {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.example.com';
  }

  async callAPI(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  }

  async integrateWithWucai() {
    // 集成逻辑
    const result = await this.callAPI('/integrate', {
      tool: 'wucai-code',
      action: 'analyze'
    });

    return result;
  }
}
```

### 数据库集成
```javascript
// database-integration.js
const sqlite3 = require('sqlite3').verbose();

class DatabaseIntegration {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  async saveAnalysisResult(result) {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(`
        INSERT INTO analysis_results (timestamp, result, metadata)
        VALUES (?, ?, ?)
      `);

      stmt.run(
        new Date().toISOString(),
        JSON.stringify(result),
        JSON.stringify({ source: 'wucai-code' }),
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  async getAnalysisHistory() {
    return new Promise((resolve, reject) => {
      this.db.all(
        'SELECT * FROM analysis_results ORDER BY timestamp DESC LIMIT 10',
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }
}
```

## 性能优化

### 缓存配置
```json
{
  "cache": {
    "enabled": true,
    "type": "redis",
    "config": {
      "host": "localhost",
      "port": 6379,
      "password": "your-password"
    },
    "ttl": 3600,
    "maxSize": "500MB"
  }
}
```

### 并发控制
```json
{
  "concurrency": {
    "maxRequests": 10,
    "rateLimit": {
      "requests": 100,
      "window": 60000
    },
    "queue": {
      "size": 1000,
      "timeout": 30000
    }
  }
}
```

## 监控和日志

### 日志配置
```json
{
  "logging": {
    "level": "info",
    "format": "json",
    "outputs": [
      {
        "type": "file",
        "path": "./logs/wucai-code.log",
        "maxSize": "10MB",
        "maxFiles": 5
      },
      {
        "type": "console",
        "colorize": true
      }
    ]
  }
}
```

### 监控配置
```json
{
  "monitoring": {
    "enabled": true,
    "metrics": {
      "performance": true,
      "errors": true,
      "usage": true
    },
    "alerts": {
      "errorRate": 0.05,
      "responseTime": 5000,
      "memoryUsage": 0.8
    }
  }
}
```

## 安全配置

### 访问控制
```json
{
  "security": {
    "accessControl": {
      "enabled": true,
      "rules": [
        {
          "path": "/admin/*",
          "allow": ["admin"],
          "deny": ["user"]
        },
        {
          "path": "/api/*",
          "allow": ["user", "admin"],
          "requireAuth": true
        }
      ]
    },
    "encryption": {
      "enabled": true,
      "algorithm": "aes-256-gcm",
      "keyRotation": 86400
    }
  }
}
```

## 最佳实践

### 1. 配置管理
- 使用版本控制管理配置
- 环境分离（开发、测试、生产）
- 敏感信息使用环境变量
- 定期备份配置

### 2. 插件开发
- 遵循插件接口规范
- 提供完整的错误处理
- 编写单元测试
- 文档化插件功能

### 3. 性能优化
- 合理使用缓存
- 控制并发数量
- 监控资源使用
- 定期性能测试

### 4. 安全考虑
- 验证所有输入
- 限制文件访问权限
- 使用HTTPS连接
- 定期安全审计

## 下一步

- [学习MCP服务器](./mcp-servers.md)
- [了解检查点功能](./checkpointing.md)
- [查看实际示例](/zh/examples/automation)
- [学习故障排除](/zh/troubleshooting/common-issues)
