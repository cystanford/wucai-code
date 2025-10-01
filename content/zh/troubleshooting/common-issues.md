# 常见问题

本指南列出了使用Wucai Code时可能遇到的常见问题及其解决方案。

## 安装问题

### 命令未找到
**问题：** 安装后提示 `wucai: command not found`

**解决方案：**
1. 检查Node.js版本：
   ```bash
   node --version
   ```
   确保版本 >= 20.0.0

2. 检查npm全局目录：
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
1. **Windows**: 以管理员身份运行命令提示符
2. **macOS/Linux**: 配置npm全局目录权限：
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

### OAuth认证失败
**问题：** OAuth认证过程中出现错误

**解决方案：**
1. 检查网络连接
2. 确保浏览器支持JavaScript
3. 清除浏览器缓存和Cookie
4. 尝试使用无痕模式
5. 检查防火墙设置

### API密钥无效
**问题：** 提示API密钥无效或过期

**解决方案：**
1. 验证API密钥是否正确
2. 检查API服务商账户状态
3. 确认API密钥权限
4. 重新生成API密钥
5. 检查环境变量设置

### 认证方式切换问题
**问题：** 无法从OAuth切换到API密钥

**解决方案：**
1. 清除认证缓存：
   ```bash
   rm -rf ~/.wucai/auth
   ```
2. 设置环境变量：
   ```bash
   export OPENAI_API_KEY="your_api_key"
   export OPENAI_BASE_URL="your_base_url"
   export OPENAI_MODEL="your_model"
   ```
3. 重启Wucai Code

## 功能问题

### 命令无响应
**问题：** 输入命令后没有反应

**解决方案：**
1. 按 `Ctrl+C` 取消当前操作
2. 检查网络连接
3. 查看错误日志
4. 重启Wucai Code
5. 检查系统资源使用情况

### 文件操作失败
**问题：** 无法读取或写入文件

**解决方案：**
1. 检查文件路径是否正确
2. 确认文件权限
3. 检查磁盘空间
4. 验证文件是否被其他程序占用
5. 使用绝对路径

### 工具执行失败
**问题：** 特定工具无法执行

**解决方案：**
1. 检查工具配置
2. 验证依赖是否安装
3. 查看工具日志
4. 更新工具版本
5. 检查系统权限

## 性能问题

### 响应缓慢
**问题：** AI响应速度很慢

**解决方案：**
1. 检查网络连接速度
2. 使用 `/stats` 查看令牌使用情况
3. 使用 `/compress` 压缩对话历史
4. 检查系统资源使用
5. 尝试使用不同的API端点

### 内存使用过高
**问题：** 程序占用大量内存

**解决方案：**
1. 使用 `/clear` 清除对话历史
2. 减少并发操作
3. 检查是否有内存泄漏
4. 重启程序
5. 升级系统内存

### 令牌使用过多
**问题：** 令牌使用量超出限制

**解决方案：**
1. 使用 `/compress` 压缩历史
2. 使用 `/clear` 清除历史
3. 优化提示词长度
4. 使用更简洁的指令
5. 考虑升级API计划

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
3. 使用默认配置重新开始

### 主题显示异常
**问题：** 主题颜色显示不正确

**解决方案：**
1. 检查终端颜色支持
2. 尝试其他主题：
   ```bash
   > /theme
   ```
3. 重置主题设置
4. 检查终端配置

### 快捷键冲突
**问题：** 快捷键与其他程序冲突

**解决方案：**
1. 检查系统快捷键设置
2. 修改自定义快捷键
3. 禁用冲突的快捷键
4. 使用不同的组合键

## 网络问题

### 连接超时
**问题：** 网络请求超时

**解决方案：**
1. 检查网络连接
2. 增加超时时间
3. 使用代理服务器
4. 检查防火墙设置
5. 尝试不同的网络环境

### 代理配置问题
**问题：** 无法通过代理访问API

**解决方案：**
1. 配置代理设置：
   ```bash
   export HTTP_PROXY=http://proxy:port
   export HTTPS_PROXY=http://proxy:port
   ```
2. 检查代理认证
3. 验证代理服务器状态
4. 尝试直接连接

## 系统兼容性问题

### 操作系统兼容性
**问题：** 在某些操作系统上无法正常运行

**解决方案：**
1. 检查系统要求
2. 更新操作系统
3. 安装必要的依赖
4. 使用兼容模式
5. 考虑使用Docker

### 终端兼容性
**问题：** 在某些终端中显示异常

**解决方案：**
1. 检查终端类型
2. 更新终端版本
3. 调整终端设置
4. 使用标准终端
5. 检查字符编码

## 数据问题

### 数据丢失
**问题：** 对话历史或配置丢失

**解决方案：**
1. 检查备份文件
2. 恢复配置文件
3. 重新配置设置
4. 启用自动备份
5. 定期导出数据

### 数据损坏
**问题：** 数据文件损坏无法读取

**解决方案：**
1. 检查文件完整性
2. 从备份恢复
3. 重新创建文件
4. 使用数据修复工具
5. 联系技术支持

## 获取帮助

### 自助诊断
```bash
> /help
> /stats
> /settings
```

### 日志收集
1. 启用详细日志
2. 重现问题
3. 收集错误信息
4. 导出日志文件

### 社区支持
- GitHub Issues: [https://github.com/cystanford/wucai-code/issues](https://github.com/cystanford/wucai-code/issues)
- 文档中心: [https://github.com/cystanford/wucai-code/tree/main/docs](https://github.com/cystanford/wucai-code/tree/main/docs)

## 下一步

如果问题仍未解决，请：

- [查看错误信息说明](./error-messages.md)
- [阅读FAQ](./faq.md)
- 在GitHub Issues中提交问题
- 联系技术支持
