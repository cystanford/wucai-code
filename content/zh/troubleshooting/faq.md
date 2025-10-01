# 常见问题解答 (FAQ)

本指南回答了用户最常遇到的问题。

## 安装和设置

### Q: 如何安装Wucai Code？
A: 使用以下命令安装：
```bash
npm install -g @wucai/wucai-code@latest
```

### Q: 系统要求是什么？
A: 需要Node.js 20.0.0或更高版本，支持Windows、macOS和Linux。

### Q: 如何更新到最新版本？
A: 使用以下命令更新：
```bash
npm update -g @wucai/wucai-code@latest
```

## 身份验证

### Q: 如何设置身份验证？
A: 有两种方式：
1. OAuth认证（推荐，免费）
2. API密钥认证

### Q: OAuth认证有什么优势？
A: 完全免费，每天2000次请求，自动管理凭证。

### Q: 如何切换认证方式？
A: 使用 `/auth` 命令或设置相应的环境变量。

## 使用问题

### Q: 如何开始使用？
A: 运行 `wucai` 命令，然后输入您的问题或需求。

### Q: 如何查看帮助？
A: 输入 `/help` 查看所有可用命令。

### Q: 如何退出程序？
A: 输入 `/quit` 或按 `Ctrl+C`。

## 功能问题

### Q: 支持哪些编程语言？
A: 支持所有主流编程语言，包括Python、JavaScript、Java、C++等。

### Q: 可以处理多大的文件？
A: 默认限制为10MB，可在配置中调整。

### Q: 如何保存对话历史？
A: 使用 `/memory save` 命令保存重要信息。

## 性能问题

### Q: 响应速度慢怎么办？
A: 检查网络连接，使用 `/compress` 压缩历史，或尝试不同API端点。

### Q: 如何减少令牌使用？
A: 使用更简洁的提示，定期使用 `/compress` 和 `/clear`。

### Q: 内存使用过高怎么办？
A: 清除对话历史，减少并发操作，重启程序。

## 配置问题

### Q: 配置文件在哪里？
A: 用户配置在 `~/.wucai/settings.json`，项目配置在 `./.wucai/settings.json`。

### Q: 如何重置配置？
A: 删除配置文件，重新启动程序。

### Q: 如何自定义主题？
A: 使用 `/theme` 命令或编辑配置文件。

## 故障排除

### Q: 命令无响应怎么办？
A: 按 `Ctrl+C` 取消，检查网络连接，重启程序。

### Q: 文件操作失败？
A: 检查文件路径、权限和磁盘空间。

### Q: 如何获取技术支持？
A: 在GitHub Issues中提交问题或查看文档。

## 下一步

- [查看常见问题](/zh/troubleshooting/common-issues)
- [学习错误信息](/zh/troubleshooting/error-messages)
- [探索高级功能](/zh/advanced/customization)
