# 检查点功能

本指南介绍Wucai Code的检查点功能，帮助您保存和恢复会话状态。

## 检查点简介

检查点功能允许您保存当前会话的状态，包括对话历史、配置设置和上下文信息，以便后续恢复使用。

## 创建检查点

### 手动创建
```bash
> /checkpoint save "重要会话状态"
```

### 自动创建
```json
{
  "checkpointing": {
    "autoSave": true,
    "interval": 300000,
    "maxCheckpoints": 10
  }
}
```

## 管理检查点

### 列出检查点
```bash
> /checkpoint list
```

### 恢复检查点
```bash
> /checkpoint restore "检查点名称"
```

### 删除检查点
```bash
> /checkpoint delete "检查点名称"
```

## 检查点内容

### 保存的信息
- 对话历史
- 当前配置
- 上下文状态
- 工具状态
- 用户偏好

### 配置选项
```json
{
  "checkpointing": {
    "enabled": true,
    "autoSave": true,
    "interval": 300000,
    "maxCheckpoints": 10,
    "includeHistory": true,
    "includeConfig": true,
    "includeContext": true
  }
}
```

## 使用场景

### 项目切换
```bash
> /checkpoint save "项目A状态"
> /checkpoint restore "项目B状态"
```

### 实验保存
```bash
> /checkpoint save "实验前状态"
> 进行各种实验
> /checkpoint restore "实验前状态"
```

### 错误恢复
```bash
> /checkpoint save "稳定状态"
> 遇到问题时
> /checkpoint restore "稳定状态"
```

## 最佳实践

### 1. 定期保存
- 在重要操作前保存
- 设置自动保存
- 定期清理旧检查点

### 2. 命名规范
- 使用描述性名称
- 包含时间戳
- 说明检查点用途

### 3. 存储管理
- 限制检查点数量
- 定期清理
- 备份重要检查点

## 下一步

- [学习自定义配置](./customization.md)
- [了解MCP服务器](./mcp-servers.md)
- [查看实际示例](/zh/examples/automation)
- [学习故障排除](/zh/troubleshooting/common-issues)
