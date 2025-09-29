# 首次使用指南

欢迎使用五彩代码！本指南将帮助您快速上手这个强大的AI编程助手。

## 启动五彩代码

### 1. 打开终端
- **Windows**: 打开命令提示符或PowerShell
- **macOS**: 打开终端应用
- **Linux**: 打开终端应用

### 2. 启动程序
```bash
wucai
```
初次启动时界面如下：

   ![wucai-code](../assets/images/wucai_screen_normal.png)

用户即可使用五彩代码进行编程。

**我们不建议用户在Home目录下执行五彩代码**。当五彩代码运行在用户Home目录下时，会出现以下警告信息：

```
You are running Wucai Code in your home directory. It is recommended to run in a project-specific directory.
```

![wucai-code-home](../assets/images/wucai_screen_home.png)

## 界面介绍

启动后，您将看到五彩代码的交互界面：
![wucai-code](../assets/images/wucai_screen_normal.png)

- `Wucai Code! v0.0.47` - 显示当前版本
- `>` - 输入提示符，等待您输入命令或问题

## 基本操作

### 输入命令
在 `>` 提示符后输入您的问题或命令：

```bash
> 你好，请介绍一下五彩代码的功能
```

### 查看帮助
```bash
> /help
```

### 退出程序
```bash
> /quit
```
或按 `Ctrl+C`

## 常用命令

### 会话管理
- `/clear` - 清除对话历史
- `/compress` - 压缩对话历史
- `/stats` - 查看使用统计

### 工具命令
- `/tools` - 查看可用工具
- `/memory` - 管理记忆功能

### 设置命令
- `/settings` - 查看当前设置
- `/theme` - 切换主题

## 第一次对话示例

让我们开始您的第一次对话：

### 1. 简单问候
```bash
> 你好，我是新用户，请介绍一下五彩代码
```

### 2. 代码理解
```bash
> 请解释这段代码的功能：
function calculateSum(a, b) {
    return a + b;
}
```

### 3. 代码生成
```bash
> 帮我写一个Python函数，计算两个数的乘积
```

### 4. 文件操作
```bash
> 帮我创建一个简单的HTML页面
```

## 键盘快捷键

- `Ctrl+C` - 取消当前操作
- `Ctrl+D` - 退出程序
- `↑/↓` - 浏览命令历史
- `Tab` - 自动补全

## 身份验证

首次使用时，您需要设置身份验证：

### 选择认证方式
1. **Qwen OAuth** (详细请参考[Qwen OAuth认证](authentication.md#方法二qwen-oauth))
   - 免费使用
   - 每天2000次请求
   - 自动管理凭证

2. **API密钥** (详细请参考[API密钥认证](authentication.md#方法一api密钥))
   - 需要申请API密钥
   - 按使用量计费

## 常见问题

### Q: 如何知道命令是否执行成功？
A: 五彩代码会显示执行结果，包括成功信息或错误提示。

### Q: 可以撤销操作吗？
A: 使用 `/clear` 命令清除对话历史，或重新开始新的对话。

### Q: 如何获得更好的结果？
A: 提供详细的描述和上下文信息，使用具体的编程语言和框架名称。

## 下一步

现在您已经了解了基本操作，可以继续学习：

- [身份验证设置](./authentication.md) - 配置API访问
- [基础使用指南](../user-guide/basic-usage.md) - 深入学习功能
- [编程任务示例](../examples/programming-tasks.md) - 查看实际应用

## 获取帮助

如果遇到问题：
- 输入 `/help` 查看帮助信息
- 查看[故障排除指南](../troubleshooting/common-issues.md)
- 在[GitHub Issues](https://github.com/cystanford/wucai-code/issues)中提问

开始您的五彩代码之旅吧！🚀
