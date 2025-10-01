# 命令参考

Wucai Code提供了丰富的命令来帮助您更好地使用AI编程助手。本指南列出了所有可用的命令及其用法。

## 会话管理命令

### `/help`
显示帮助信息
```bash
> /help
```

### `/clear`
清除所有对话历史，重新开始
```bash
> /clear
```

### `/compress`
压缩对话历史以节省令牌
```bash
> /compress
```

### `/stats`
显示当前会话的统计信息
```bash
> /stats
```
显示内容：
- 令牌使用情况
- 请求次数
- 会话时长

### `/quit` 或 `/exit`
退出Wucai Code
```bash
> /quit
```

## 工具相关命令

### `/tools`
显示所有可用的工具
```bash
> /tools
```

### `/memory`
管理记忆功能
```bash
> /memory
```
子命令：
- `/memory save` - 保存当前信息到记忆
- `/memory list` - 列出所有记忆
- `/memory clear` - 清除所有记忆

## 设置和配置命令

### `/settings`
显示当前配置设置
```bash
> /settings
```

### `/theme`
切换界面主题
```bash
> /theme
```
可用主题：
- `default` - 默认主题
- `dark` - 深色主题
- `light` - 浅色主题
- `github` - GitHub风格

### `/auth`
管理身份验证设置
```bash
> /auth
```

## 文件操作命令

### `/directory`
显示当前目录信息
```bash
> /directory
```

### `/editor`
在外部编辑器中打开文件
```bash
> /editor filename.js
```

## 特殊功能命令

### `/bug`
报告问题或错误
```bash
> /bug
```

### `/chat`
开始新的聊天会话
```bash
> /chat
```

### `/copy`
复制内容到剪贴板
```bash
> /copy
```

### `/extensions`
管理扩展功能
```bash
> /extensions
```

### `/mcp`
管理MCP服务器
```bash
> /mcp
```

### `/privacy`
查看隐私设置
```bash
> /privacy
```

### `/restore`
恢复之前的会话状态
```bash
> /restore
```

### `/vim`
切换Vim模式
```bash
> /vim
```

### `/init`
初始化项目配置
```bash
> /init
```

## 自定义命令

### 创建自定义命令
您可以在配置文件中定义自定义命令：

```json
{
  "customCommands": {
    "test": "运行项目测试",
    "build": "构建项目",
    "deploy": "部署到生产环境"
  }
}
```

## 命令使用技巧

### 1. 命令补全
使用 `Tab` 键自动补全命令：
```bash
> /hel<Tab>  # 自动补全为 /help
```

### 2. 命令历史
使用 `↑/↓` 键浏览命令历史：
```bash
> # 按上箭头键查看之前的命令
```

### 3. 多行输入
使用 `Shift+Enter` 进行多行输入：
```bash
> 请帮我写一个函数：
> 输入：两个数字
> 输出：它们的和
```

### 4. 文件引用
使用 `@` 符号引用文件：
```bash
> 请分析这个文件：@src/main.js
> 修改这个文件：@config.json
```

## 快捷键

### 全局快捷键
- `Ctrl+C` - 取消当前操作
- `Ctrl+D` - 退出程序
- `Ctrl+L` - 清屏
- `Ctrl+R` - 搜索命令历史

### 输入快捷键
- `↑/↓` - 浏览命令历史
- `←/→` - 移动光标
- `Home/End` - 移动到行首/行尾
- `Ctrl+A` - 选择全部
- `Ctrl+K` - 删除到行尾
- `Ctrl+U` - 删除到行首

## 命令组合使用

### 连续执行多个命令
```bash
> /clear
> /theme dark
> 请帮我写一个Python脚本
```

### 条件执行
```bash
> /stats
> 如果令牌使用过多，执行 /compress
```

## 错误处理

### 命令不存在
如果输入了不存在的命令，系统会提示：
```
未知命令：/unknown
输入 /help 查看可用命令
```

### 命令执行失败
如果命令执行失败，会显示错误信息：
```
错误：无法执行 /editor
原因：文件不存在
```

## 最佳实践

### 1. 定期清理
```bash
> /stats  # 检查使用情况
> /compress  # 如果令牌使用过多
```

### 2. 保存重要信息
```bash
> /memory save  # 保存重要信息
```

### 3. 使用合适的主题
```bash
> /theme dark  # 在暗光环境下使用
```

### 4. 定期备份配置
```bash
> /settings  # 查看当前配置
```

## 故障排除

### 命令无响应
1. 按 `Ctrl+C` 取消当前操作
2. 检查网络连接
3. 重启Wucai Code

### 命令执行缓慢
1. 使用 `/stats` 检查令牌使用
2. 使用 `/compress` 压缩历史
3. 考虑使用更简洁的提示

### 配置丢失
1. 检查配置文件位置：`~/.wucai/settings.json`
2. 使用 `/init` 重新初始化
3. 恢复备份配置

## 下一步

掌握了命令使用后，您可以：

- [学习配置选项](./configuration.md)
- [自定义主题](./themes.md)
- [查看实际示例](/zh/examples/programming-tasks)
- [探索高级功能](/zh/advanced/customization)
