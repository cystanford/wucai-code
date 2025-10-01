# 故障排除指南

本指南提供了使用Wucai Code时常见问题的解决方案。

## 安装问题

### 命令未找到

**问题：** 安装后提示 `wucai: command not found`

**解决方案：**

1. 检查Node.js版本（需要 >= 20.0.0）：
   ```bash
   node --version
   ```

2. 检查npm全局安装路径：
   ```bash
   npm config get prefix
   ```

3. 确保全局目录在PATH中：
   ```bash
   echo $PATH
   ```

4. 重新安装：
   ```bash
   npm uninstall -g @wucai/wucai-code
   npm install -g @wucai/wucai-code@latest
   ```

### 权限错误

**问题：** 安装时出现权限错误

**解决方案：**

**Windows**: 以管理员身份运行命令提示符

**macOS/Linux**: 配置npm全局目录权限：
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### 网络连接问题

**问题：** 安装时网络超时或连接失败

**解决方案：**

1. 检查网络连接

2. 配置npm镜像（中国用户）：
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```

3. 使用代理：
   ```bash
   npm config set proxy http://proxy-server:port
   npm config set https-proxy http://proxy-server:port
   ```

## 身份验证问题

### Qwen OAuth认证失败

**问题：** OAuth认证过程中出现错误

**解决方案：**
1. 邮箱注册后，会有一封激活邮件，点击激活即可


### 认证方式配置

使用DASHSCOPE_API_KEY配置认证：

```bash
# Windows (PowerShell)
$env:DASHSCOPE_API_KEY="your_api_key"

# macOS/Linux
export DASHSCOPE_API_KEY="your_api_key"
```

程序会自动使用默认配置：
- BASE_URL: `https://dashscope.aliyuncs.com/compatible-mode/v1`
- MODEL: `qwen3-coder-plus`

### 切换认证方式

如需切换认证方式：
1. 清除认证缓存：
   ```bash
   rm -rf ~/.wucai/auth
   ```
2. 设置新的环境变量
3. 重启Wucai Code

## 运行问题

### 命令无响应

**问题：** 输入命令后没有反应

**解决方案：**
1. 按 `Ctrl+C` 取消当前操作
2. 检查网络连接
3. 重启Wucai Code
4. 检查系统资源使用情况

### 文件操作失败

**问题：** 无法读取或写入文件

**解决方案：**
1. 检查文件路径是否正确（建议使用绝对路径）
2. 确认文件权限
3. 检查磁盘空间
4. 验证文件是否被其他程序占用

### 响应速度慢

**问题：** AI响应速度很慢

**解决方案：**
1. 检查网络连接速度
2. 使用 `/stats` 查看令牌使用情况
3. 使用 `/compress` 压缩对话历史
4. 使用 `/clear` 清除对话历史重新开始
5. 检查系统资源使用

## 网络问题

### 连接超时

**问题：** 网络请求超时

**解决方案：**
1. 检查网络连接
2. 检查防火墙设置
3. 尝试不同的网络环境
4. 配置代理（如需要）：
   ```bash
   export HTTP_PROXY=http://proxy:port
   export HTTPS_PROXY=http://proxy:port
   ```

### API请求失败

**错误信息说明：**
- `401 Unauthorized` - 身份验证失败，检查API密钥
- `403 Forbidden` - 访问被拒绝，检查API权限
- `429 Too Many Requests` - 请求频率过高，稍后重试
- `500 Internal Server Error` - 服务器错误，稍后重试

## 性能优化

### 内存使用过高

**解决方案：**
1. 使用 `/clear` 清除对话历史
2. 减少并发操作
3. 重启程序
4. 检查是否有大文件操作

### 令牌使用过多

**解决方案：**
1. 使用 `/compress` 压缩历史
2. 使用 `/clear` 清除历史
3. 使用更简洁的提示词
4. 避免提交过大的代码块

## 配置问题

### 配置文件错误

**问题：** 配置文件格式错误或无效

**解决方案：**
1. 验证JSON格式：
   ```bash
   cat ~/.wucai/settings.json | python -m json.tool
   ```
2. 重置配置文件：
   ```bash
   rm ~/.wucai/settings.json
   wucai
   ```

### 主题显示异常

**问题：** 主题颜色显示不正确

**解决方案：**
1. 检查终端颜色支持
2. 尝试其他主题：`/theme`
3. 重置主题设置
4. 检查终端配置

## 常见错误信息

### 安装错误
- `EACCES: permission denied` - 权限不足，使用管理员权限
- `ENOENT: no such file or directory` - 文件或目录不存在
- `ENOTFOUND: getaddrinfo ENOTFOUND` - 无法解析域名，检查网络

### 文件操作错误
- `EISDIR: illegal operation on a directory` - 对目录执行了非法操作
- `EEXIST: file already exists` - 文件已存在
- `ENOENT: no such file or directory` - 文件或目录不存在

### 网络错误
- `ECONNREFUSED` - 连接被拒绝
- `ETIMEDOUT` - 连接超时
- `ENOTFOUND` - 域名解析失败

## 常见问题解答

### Q: 如何开始使用？
A: 在项目目录下运行 `wucai`，然后输入您的问题或需求。

### Q: 如何查看帮助？
A: 输入 `/help` 查看所有可用命令。

### Q: 如何退出程序？
A: 输入 `/quit` 或按 `Ctrl+C`。

### Q: 支持哪些编程语言？
A: 支持所有主流编程语言，包括Python、JavaScript、Java、C++、Go、Rust等。

### Q: 如何保存对话历史？
A: 使用 `/memory save` 命令保存重要信息。

### Q: 配置文件在哪里？
A: 用户配置在 `~/.wucai/settings.json`，项目配置在项目目录下的 `.wucai/settings.json`。

### Q: 如何重置所有配置？
A: 删除配置文件后重启：
```bash
rm ~/.wucai/settings.json
wucai
```

### Q: 可以处理多大的文件？
A: 默认限制为10MB，可在配置中调整。

### Q: 如何减少令牌使用？
A: 使用更简洁的提示，定期使用 `/compress` 和 `/clear` 命令。

## 诊断工具

### 查看系统信息
```bash
> /settings    # 查看当前配置
> /stats       # 查看使用统计
> /tools       # 查看可用工具
```

### 日志收集
1. 启用详细日志模式
2. 重现问题
3. 收集错误信息
4. 在GitHub Issues中提交问题时附上日志

## 获取帮助

### 自助资源
- 输入 `/help` 查看内置帮助
- 查看本文档的其他章节
- 阅读教程和示例

### 社区支持
- **GitHub Issues**: [https://github.com/cystanford/wucai-code/issues](https://github.com/cystanford/wucai-code/issues)
- **文档中心**: 查看完整文档获取更多帮助

## 报告问题

在GitHub Issues中提交问题时，请包含：
1. 操作系统和版本
2. Node.js版本
3. Wucai Code版本
4. 详细的错误信息
5. 重现步骤
6. 相关的日志输出

## 下一步

如果问题仍未解决：
- [查看配置参考](/zh/reference/configuration) - 了解详细配置选项
- [查看命令参考](/zh/reference/commands) - 了解所有可用命令
- [查看高级功能](/zh/advanced/customization) - 深入了解高级特性
- 在GitHub Issues中寻求帮助
