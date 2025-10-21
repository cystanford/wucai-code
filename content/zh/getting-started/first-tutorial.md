# 第一次使用教程

欢迎使用Wucai Code！本教程将带您从零开始，完成第一次完整的AI编程体验。

## 启动Wucai Code

### 打开终端
- **Windows**: 打开命令提示符或PowerShell
- **macOS**: 打开终端应用
- **Linux**: 打开终端应用

### 进入项目目录
不建议在Home目录下运行Wucai Code，建议切换到项目目录：

```bash
cd /path/to/your/project
```

### 启动程序
```bash
wucai
```

初次启动时界面如下：

 ![wucai-code](/content/zh/assets/images/wucai_firstlaunch.png)


## 界面介绍

- `Wucai Code! v0.0.49` - 显示当前版本
- `>` - 输入提示符，等待您输入命令或问题

## 第一个任务：让AI写一个简单函数

### 1. 清晰地描述需求

```bash
> 请帮我写一个Python函数来计算斐波那契数列
```

AI会为您生成完整的代码，并提供说明。

### 2. 继续改进代码

AI会记住上下文，您可以基于之前的回答继续提问：

```bash
> 请为这个函数添加错误处理
```

```bash
> 现在帮我写一个测试用例
```

### 3. 保存到文件

```bash
> 把这个函数保存到 fibonacci.py 文件中
```

AI会自动创建文件并写入代码。

## 第二个任务：分析现有代码

### 1. 让AI读取文件

```bash
> 请分析这个文件的内容：./fibonacci.py
```

### 2. 请求代码审查

```bash
> 这段代码有没有性能问题？如何优化？
```

### 3. 应用优化建议

```bash
> 请帮我应用这些优化建议
```

AI会直接修改文件内容。

## 第三个任务：创建一个完整的HTML页面

### 1. 描述需求

```bash
> 帮我创建一个简单的个人主页，包含标题、简介和联系方式
```

### 2. 预览和修改

如果需要调整样式：

```bash
> 把背景色改成浅蓝色，字体改大一点
```

### 3. 添加更多功能

```bash
> 添加一个响应式导航栏
```

## 常用命令

### 效率提升
- `/approvals` - **必备！** 设置完全授权模式，避免每次操作都按Enter

### 会话管理
- `/clear` - 清除对话历史，重新开始
- `/compact` - 压缩对话历史以节省令牌
- `/stats` - 查看当前会话的令牌使用情况

### 工具命令
- `/tools` - 查看可用工具
- `/help` - 查看帮助信息

### 退出程序
- `/quit` - 退出程序
- `Ctrl+C` - 取消当前操作
- `Ctrl+D` - 退出程序

## 效率提升技巧

### 启用完全授权模式（强烈推荐）

如果您不想每次操作都手动按Enter确认，可以启用"完全授权"模式：

```bash
> /approvals
```

选择 **"完全授权 (Full Access)"**，之后所有操作（读取文件、编辑文件、运行命令）都会自动执行，无需手动确认。这是大多数用户的首选模式，能显著提升工作效率。

## 常用操作场景

### 学习新概念
```bash
> 请解释什么是闭包，并给出JavaScript示例
```

### 调试代码
```bash
> 这段代码有什么问题？请帮我修复
[粘贴代码]
```

### 代码重构
```bash
> 请重构这个函数，使其更易读
```

### 文件操作
```bash
> 列出当前目录的所有Python文件
> 在src目录下创建一个新的模块
> 查找所有包含"TODO"的文件
```

## 键盘快捷键

- `Ctrl+C` - 取消当前操作
- `Ctrl+D` - 退出程序
- `↑/↓` - 浏览命令历史
- `Tab` - 自动补全

## 下一步

现在您已经掌握了基本操作，可以继续学习：

- [查看完整的命令参考](/content/zh/reference/commands) - 了解所有可用命令
- [配置Wucai Code](/content/zh/reference/configuration) - 自定义您的使用体验
- [AI辅助编写代码项目](/content/zh/tutorials/code-generation) - 学习如何用AI创建完整项目
- [代码审查和优化](/content/zh/tutorials/code-review) - 学习如何用AI提升代码质量

## 遇到问题？

- 输入 `/help` 查看帮助信息
- 查看[故障排除指南](/content/zh/reference/troubleshooting)
- 在[GitHub Issues](https://github.com/cystanford/wucai-code/issues)中提问
