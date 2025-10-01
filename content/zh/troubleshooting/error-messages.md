# 错误信息说明

本指南解释了Wucai Code中可能出现的各种错误信息及其含义。

## 安装错误

### EACCES: permission denied
**含义：** 权限不足，无法访问指定目录
**解决方案：** 使用管理员权限或配置npm全局目录

### ENOENT: no such file or directory
**含义：** 找不到指定的文件或目录
**解决方案：** 检查文件路径是否正确

### ENOTFOUND: getaddrinfo ENOTFOUND
**含义：** 无法解析域名
**解决方案：** 检查网络连接和DNS设置

## 身份验证错误

### 401 Unauthorized
**含义：** 身份验证失败
**解决方案：** 检查API密钥或重新进行OAuth认证

### 403 Forbidden
**含义：** 访问被拒绝
**解决方案：** 检查API权限和配额

### 429 Too Many Requests
**含义：** 请求频率过高
**解决方案：** 等待一段时间后重试

## 网络错误

### ECONNREFUSED
**含义：** 连接被拒绝
**解决方案：** 检查服务是否运行和端口是否正确

### ETIMEDOUT
**含义：** 连接超时
**解决方案：** 检查网络连接和防火墙设置

### ENOTFOUND
**含义：** 域名解析失败
**解决方案：** 检查DNS设置和网络连接

## 文件操作错误

### EISDIR: illegal operation on a directory
**含义：** 对目录执行了非法操作
**解决方案：** 检查操作类型和路径

### EEXIST: file already exists
**含义：** 文件已存在
**解决方案：** 删除现有文件或使用不同名称

### ENOENT: no such file or directory
**含义：** 文件或目录不存在
**解决方案：** 检查路径是否正确

## 配置错误

### Invalid JSON
**含义：** JSON格式无效
**解决方案：** 检查配置文件语法

### Missing required field
**含义：** 缺少必需字段
**解决方案：** 检查配置完整性

### Invalid value
**含义：** 配置值无效
**解决方案：** 检查配置值格式

## 下一步

- [查看FAQ](./faq.md)
- [学习故障排除](/zh/troubleshooting/common-issues)
- [探索高级功能](/zh/advanced/customization)
