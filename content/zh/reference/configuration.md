# 配置选项

Wucai Code提供了丰富的配置选项，让您可以根据个人喜好和工作需求自定义工具的行为。

## 配置文件位置

### 用户全局配置
```
~/.wucai/settings.json
```

### 项目配置
```
./.wucai/settings.json
```

### 环境变量
```bash
# 身份验证
export DASHSCOPE_API_KEY="your_api_key"

# 其他设置
export WUCAI_THEME="dark"
export WUCAI_VERBOSE="true"
```

## 配置优先级

配置的优先级从高到低：
1. 环境变量
2. 项目配置文件
3. 用户全局配置文件
4. 默认值

## 基本配置选项

### 身份验证配置
```json
{
  "auth": {
    "type": "oauth",  // "oauth" 或 "dashscope"
    "apiKey": "your_api_key"
  }
}
}
```

### 界面配置
```json
{
  "ui": {
    "theme": "dark",           // "default", "dark", "light", "github"
    "showWelcome": true,       // 显示欢迎信息
    "showStats": true,         // 显示统计信息
    "autoComplete": true,      // 自动补全
    "syntaxHighlight": true    // 语法高亮
  }
}
```

### 会话配置
```json
{
  "session": {
    "tokenLimit": 32000,       // 会话令牌限制
    "autoCompress": false,     // 自动压缩历史
    "saveHistory": true,       // 保存历史记录
    "maxHistory": 100          // 最大历史记录数
  }
}
```

## 高级配置选项

### 工具配置
```json
{
  "tools": {
    "enabled": ["file", "shell", "web"],  // 启用的工具
    "disabled": ["dangerous"],            // 禁用的工具
    "confirmExecution": true,             // 执行前确认
    "timeout": 30000                      // 工具执行超时时间
  }
}
```

### 文件操作配置
```json
{
  "file": {
    "maxFileSize": "10MB",     // 最大文件大小
    "allowedExtensions": [".js", ".py", ".md"],  // 允许的文件扩展名
    "backupEnabled": true,     // 启用备份
    "backupDir": "./.wucai/backups"  // 备份目录
  }
}
```

### 网络配置
```json
{
  "network": {
    "timeout": 30000,          // 网络超时时间
    "retries": 3,              // 重试次数
    "proxy": null,             // 代理设置
    "userAgent": "WucaiCode/1.0"  // 用户代理
  }
}
```

## 主题配置

### 内置主题
```json
{
  "theme": {
    "name": "dark",
    "colors": {
      "primary": "#00ff00",
      "secondary": "#ff0000",
      "background": "#1a1a1a",
      "foreground": "#ffffff"
    }
  }
}
```

### 自定义主题
```json
{
  "theme": {
    "name": "custom",
    "colors": {
      "primary": "#your_color",
      "secondary": "#your_color",
      "background": "#your_color",
      "foreground": "#your_color",
      "accent": "#your_color",
      "muted": "#your_color"
    }
  }
}
```

## 工具特定配置

### Shell工具配置
```json
{
  "shell": {
    "allowedCommands": ["npm", "git", "ls"],  // 允许的命令
    "blockedCommands": ["rm", "format"],      // 禁止的命令
    "workingDirectory": "./",                 // 工作目录
    "environment": {                          // 环境变量
      "NODE_ENV": "development"
    }
  }
}
```

### 文件工具配置
```json
{
  "file": {
    "readOnly": false,        // 只读模式
    "createBackup": true,     // 创建备份
    "maxLines": 10000,        // 最大行数
    "encoding": "utf8"        // 文件编码
  }
}
```

## 性能配置

### 缓存配置
```json
{
  "cache": {
    "enabled": true,          // 启用缓存
    "ttl": 3600,             // 缓存生存时间（秒）
    "maxSize": "100MB",      // 最大缓存大小
    "directory": "./.wucai/cache"  // 缓存目录
  }
}
```

### 并发配置
```json
{
  "concurrency": {
    "maxRequests": 5,         // 最大并发请求数
    "rateLimit": 60,          // 速率限制（每分钟）
    "queueSize": 100          // 队列大小
  }
}
```

## 安全配置

### 权限配置
```json
{
  "security": {
    "allowFileWrite": true,   // 允许文件写入
    "allowShellExecution": true,  // 允许Shell执行
    "allowNetworkAccess": true,   // 允许网络访问
    "requireConfirmation": true   // 需要确认
  }
}
```

### 沙箱配置
```json
{
  "sandbox": {
    "enabled": true,          // 启用沙箱
    "type": "docker",         // 沙箱类型
    "image": "node:18",       // 沙箱镜像
    "resources": {            // 资源限制
      "memory": "512MB",
      "cpu": "0.5"
    }
  }
}
```

## 配置验证

### 验证配置文件
```bash
> /settings validate
```

### 重置配置
```bash
> /settings reset
```

### 导出配置
```bash
> /settings export
```

## 配置示例

### 开发环境配置
```json
{
  "auth": {
    "type": "oauth"
  },
  "ui": {
    "theme": "dark",
    "showWelcome": false
  },
  "session": {
    "tokenLimit": 16000,
    "autoCompress": true
  },
  "tools": {
    "enabled": ["file", "shell", "web"],
    "confirmExecution": false
  },
  "file": {
    "backupEnabled": true,
    "maxFileSize": "5MB"
  }
}
```

### 生产环境配置
```json
{
  "auth": {
    "type": "openai",
    "apiKey": "your_production_key"
  },
  "ui": {
    "theme": "default",
    "showWelcome": false
  },
  "session": {
    "tokenLimit": 8000,
    "autoCompress": true
  },
  "tools": {
    "enabled": ["file"],
    "confirmExecution": true
  },
  "security": {
    "allowShellExecution": false,
    "requireConfirmation": true
  }
}
```

## 配置管理最佳实践

### 1. 版本控制
- 将项目配置提交到版本控制
- 不要提交包含敏感信息的配置
- 使用环境变量存储敏感信息

### 2. 配置备份
```bash
# 备份用户配置
cp ~/.wucai/settings.json ~/.wucai/settings.json.backup

# 恢复配置
cp ~/.wucai/settings.json.backup ~/.wucai/settings.json
```

### 3. 配置测试
```bash
# 测试配置
wucai --config-test

# 验证配置
wucai --validate-config
```

### 4. 配置迁移
```bash
# 导出配置
wucai --export-config > config.json

# 导入配置
wucai --import-config config.json
```

## 故障排除

### 配置不生效
1. 检查配置文件语法
2. 验证配置优先级
3. 重启Wucai Code

### 配置文件损坏
1. 删除损坏的配置文件
2. 使用默认配置重新开始
3. 从备份恢复

### 权限问题
1. 检查文件权限
2. 确保目录存在
3. 使用管理员权限

## 下一步

配置完成后，您可以：

- [高级自定义](/content/zh/advanced/customization) - 探索高级自定义选项
- [AI辅助编写代码项目](/content/zh/tutorials/code-generation) - 开始实践项目
- [故障排除](/content/zh/reference/troubleshooting) - 解决常见问题
