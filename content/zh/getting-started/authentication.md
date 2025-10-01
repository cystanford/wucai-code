# 身份验证设置

Wucai Code支持两种身份验证方式，您可以根据需要选择最适合的方式。

## 认证方式对比

| 方式 | 费用 | 请求限制 | 设置难度 | 推荐度 |
|------|------|----------|----------|--------|
| Qwen OAuth | 免费 | 2000次/天 | 简单 | ⭐⭐⭐⭐⭐ |
| DASHSCOPE_API_KEY | 按量计费 | 无限制 | 简单 | ⭐⭐⭐⭐ |

## 方法一：Qwen OAuth（推荐）

### 优势
- ✅ 完全免费
- ✅ 每天2000次请求
- ✅ 自动凭证管理
- ✅ 零配置要求

### 设置步骤
1. **启动Wucai Code**
   ```bash
   wucai
   ```
   初次启动时界面如下：

   <img src="/wucai-code/assets/images/wucai_firstlaunch.png" alt="wucai-code" />

2. **选择Qwen OAuth认证**

   按⬇️键选择**Qwen OAuth**后按Enter键，当选择Qwen OAuth方式认证时，在字符终端界面中会显示二维码如下，可以使用支付宝或微信扫码登录：

   <img src="/wucai-code/assets/images/qwen_authentication_qr-code.png" alt="QR-Code" />

   同时，程序会自动打开浏览器进行认证，可以进行登录或注册。

   <img src="/wucai-code/assets/images/qwen_login.png" alt="Qwen-Login" />

   如百炼账号已经关联Google或GitHub账号，可以直接按确认登录:

   🌟注意：请先确认网络链接稳定后再访问

   <img src="/wucai-code/assets/images/qwen_login-github.png" alt="Qwen-Login-Github" />

   确认授权Wucai Code访问

   <img src="/wucai-code/assets/images/authentication_successful.png" alt="Auth-Successful" />

   认证完成后返回终端，Wucai Code即可正常使用

   <img src="/wucai-code/assets/images/wucai_screen_normal.png" alt="wucai-code-normal" />

### 使用示例
```bash
> 你好，请帮我写一个Python函数
```

## 方法二：DASHSCOPE_API_KEY

### 优势
- ✅ 无限制请求
- ✅ API Key永久有效

### 申请API Key

访问[阿里云百炼控制台](https://bailian.console.aliyun.com/)申请API Key

### 设置步骤

1. **启动Wucai Code**
   ```bash
   wucai
   ```

   初次启动时界面如下：

   <img src="/wucai-code/assets/images/wucai_firstlaunch.png" alt="wucai-code" />

2. **选择DASHSCOPE_API_KEY环境变量**

   按Enter键进行设置认证，在API Key的输入框中输入正确的阿里云百炼API Key信息：

   <img src="/wucai-code/assets/images/dashscope_configuration.png" alt="dashscope-configuration" />

   输入正确信息后，Wucai Code即可正常使用

   <img src="/wucai-code/assets/images/wucai_screen_normal.png" alt="wucai-code-normal" />

3. **设置永久环境变量（推荐）**

   上述方式设置的API Key是临时变量，重新启动Wucai Code时需要重新设置。建议设置永久环境变量：

   **Windows (PowerShell)**
   ```powershell
   $env:DASHSCOPE_API_KEY="your_api_key_here"
   ```

   **macOS/Linux**
   ```bash
   export DASHSCOPE_API_KEY="your_api_key_here"
   ```

   设置永久环境变量后，每次启动Wucai Code会自动使用该API Key。


## 常见问题

### Q: Qwen OAuth认证失败怎么办？
A: 邮箱注册后，Qwen会发送一封邮件，激活后即完成认证


## 下一步

认证设置完成后，您可以：

- [第一次使用教程](/zh/getting-started/first-tutorial) - 完整的入门教程
- [AI辅助编写代码项目](/zh/tutorials/code-generation) - 学习如何用AI创建完整项目
- [命令参考](/zh/reference/commands) - 了解所有可用命令
