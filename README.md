# Wucai Code 

<div align="center">

![wucai code截图](./docs/assets/wucai-code-screenshot.png)

[![npm version](https://img.shields.io/npm/v/@wucai/wucai-code.svg)](https://www.npmjs.com/package/@wucai/wucai-code)
[![License](https://img.shields.io/github/license/cystanford/wucai-code.svg)](./LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![Downloads](https://img.shields.io/npm/dm/@wucai/wucai-code.svg)](https://www.npmjs.com/package/@wucai/wucai-code)

**命令行AI工具（智能编排）**

[安装](#安装) • [快速开始](#快速开始) • [功能特性](#核心功能) • [文档](./docs/) 

</div>

Wucai Code是命令行AI工具，从[**Gemini CLI**](https://github.com/google-gemini/gemini-cli)改进而来 ([详情](./README.gemini.md))，专门针对[Qwen3-Coder](https://github.com/QwenLM/Qwen3-Coder)模型进行优化。它通过代码理解、智能编排，自动化任务和增强您的开发工作流。

## 免费选项可用

使用以下任一免费选项，无需成本即可开始使用Wucai Code：

### Qwen OAuth（推荐）

- **每天2,000次请求**，无令牌限制
- **每分钟60次请求**速率限制
- 简单运行`qwen`并使用您的qwen.ai账户进行身份验证
- 自动凭证管理和刷新
- 如果您已使用OpenAI兼容模式初始化，使用`/auth`命令切换到Qwen OAuth

### 区域免费层级

- **中国大陆**：ModelScope提供**每天2,000次免费API调用**
- **国际**：OpenRouter在全球范围内提供**每天多达1,000次免费API调用**

详细设置说明，请查看[授权](#授权)。

> [!WARNING]
> **令牌使用说明**：wucai code可能在每个周期内发出多个API调用，导致更高的令牌使用量（类似Claude Code）。

## 核心功能

- **代码理解和编辑** - 查询和编辑超出传统上下文窗口限制的大型代码库
- **工作流自动化** - 自动化操作任务，如处理拉取请求和复杂的变基
- **增强解析器** - 专门针对Qwen-Coder模型优化的适配解析器

## 安装

### 前置条件

确保您已安装[Node.js 20版本](https://nodejs.org/en/download)或更高版本。

```bash
curl -qL https://www.npmjs.com/install.sh | sh
```

### 从npm安装

```bash
npm install -g @wucai/wucai-code@latest
wucai --version
```

### 使用Homebrew全局安装（macOS/Linux）

```bash
brew install wucai-code
```

## 快速开始

```bash
# 启动wucai code
wucai

# 示例命令
> 解释这个代码库结构
> 帮我重构这个函数
> 为这个模块生成单元测试
```

### 会话管理

通过可配置的会话限制来控制令牌使用，以优化成本和性能。

#### 配置会话令牌限制

在您的主目录中创建或编辑`.wucai/settings.json`：

```json
{
  "sessionTokenLimit": 32000
}
```

#### 会话命令

- **`/compress`** - 压缩对话历史以在令牌限制内继续
- **`/clear`** - 清除所有对话历史并重新开始
- **`/stats`** - 检查当前令牌使用和限制

> **注意**：会话令牌限制适用于单个对话，而非累积API调用。

### 授权

根据您的需求选择首选的身份验证方法：

#### 1. Qwen OAuth（推荐 - 30秒内开始使用）

最简单的开始方式 - 完全免费且提供慷慨的配额：

```bash
# 只需运行此命令并按照浏览器身份验证步骤操作
wucai
```

**流程如下：**

1. **即时设置**：CLI自动打开您的浏览器
2. **一键登录**：使用您的qwen.ai账户进行身份验证
3. **自动管理**：凭证在本地缓存供将来使用
4. **无需配置**：零设置要求 - 直接开始编码！

**免费层级好处：**

- ✅ **每天2,000次请求**（无需令牌计数）
- ✅ **每分钟60次请求**速率限制
- ✅ **自动凭证刷新**
- ✅ 个人用户**零成本**
- ℹ️ **注意**：为保持服务质量可能会进行模型回退

#### 2. OpenAI兼容API

为OpenAI或其他兼容提供商使用API密钥：

**配置方法：**

1. **环境变量**

   ```bash
   export OPENAI_API_KEY="your_api_key_here"
   export OPENAI_BASE_URL="your_api_endpoint"
   export OPENAI_MODEL="your_model_choice"
   ```

2. **项目`.env`文件**
   在项目根目录创建`.env`文件：
   ```env
   OPENAI_API_KEY=your_api_key_here
   OPENAI_BASE_URL=your_api_endpoint
   OPENAI_MODEL=your_model_choice
   ```

**API提供商选项**

> ⚠️ **区域说明：**
>
> - **中国大陆**：使用阿里云百炼或ModelScope
> - **国际**：使用阿里云ModelStudio或OpenRouter

<details>
<summary><b> 中国大陆用户</b></summary>

**选项1：阿里云百炼** ([申请API密钥](https://bailian.console.aliyun.com/))

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

**选项2：ModelScope（免费层级）** ([申请API密钥](https://modelscope.cn/docs/model-service/API-Inference/intro))

- ✅ **每天2,000次免费API调用**
- ⚠️ 连接您的阿里云账户以避免身份验证错误

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://api-inference.modelscope.cn/v1"
export OPENAI_MODEL="Qwen/Qwen3-Coder-480B-A35B-Instruct"
```

</details>

<details>
<summary><b> 国际用户</b></summary>

**选项1：阿里云ModelStudio** ([申请API密钥](https://modelstudio.console.alibabacloud.com/))

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

**选项2：OpenRouter（提供免费层级）** ([申请API密钥](https://openrouter.ai/))

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://openrouter.ai/api/v1"
export OPENAI_MODEL="qwen/qwen3-coder:free"
```

</details>

## 使用示例

### 探索代码库

```bash
cd your-project/
wucai

# 架构分析
> 描述这个系统架构的主要组成部分
> 主要依赖关系是什么，它们如何交互？
> 找到所有API端点及其身份验证方法
```

### 代码开发

```bash
# 重构
> 重构这个函数以提高可读性和性能
> 将这个类转换为使用依赖注入
> 将这个大模块拆分成更小、更专注的组件

# 代码生成
> 为用户管理创建REST API端点
> 为身份验证模块生成单元测试
> 为所有数据库操作添加错误处理
```

### 自动化工作流

```bash
# Git自动化
> 分析过去7天的git提交，按功能分组
> 从最近的提交中创建更新日志
> 找到所有TODO注释并创建GitHub议题

# 文件操作
> 将此目录中的所有图像转换为PNG格式
> 将所有测试文件重命名为遵循*.test.ts模式
> 找到并删除所有console.log语句
```

### 调试和分析

```bash
# 性能分析
> 识别这个React组件中的性能瓶颈
> 找到代码库中所有的N+1查询问题

# 安全审计
> 检查潜在的SQL注入漏洞
> 找到所有硬编码的凭证或API密钥
```

## 常用任务

### 理解新代码库

```text
> 核心业务逻辑组件有哪些？
> 实施了什么安全机制？
> 数据如何在系统中流动？
> 使用了哪些主要设计模式？
> 为这个模块生成依赖关系图
```

### 代码重构和优化

```text
> 这个模块的哪些部分可以优化？
> 帮我重构这个类以遵循SOLID原则
> 添加适当的错误处理和日志记录
> 将回调转换为async/await模式
> 为昂贵的操作实现缓存
```

### 文档和测试

```text
> 为所有公共API生成全面的JSDoc注释
> 为这个组件编写包含边缘情况的单元测试
> 创建OpenAPI格式的API文档
> 添加解释复杂算法的内联注释
> 为这个模块生成README
```

### 开发加速

```text
> 使用身份验证设置新的Express服务器
> 创建带有TypeScript和测试的React组件
> 实现速率限制中间件
> 为新架构添加数据库迁移
> 为这个项目配置CI/CD流水线
```

## 命令和快捷键

### 会话命令

- `/help` - 显示可用命令
- `/clear` - 清除对话历史
- `/compress` - 压缩历史以节省令牌
- `/stats` - 显示当前会话信息
- `/exit`或`/quit` - 退出wucai code

### 键盘快捷键

- `Ctrl+C` - 取消当前操作
- `Ctrl+D` - 退出（在空行上）
- `上/下` - 浏览命令历史
## 身份验证

有关详细的身份验证设置，请参阅[身份验证指南](./docs/cli/authentication.md)。

## 故障排除

如果您遇到问题，请查看[故障排除指南](docs/troubleshooting.md)。

## 致谢

本项目基于[Google Gemini CLI](https://github.com/google-gemini/gemini-cli)。我们感谢并赞赏Gemini CLI团队的出色工作。我们的主要贡献专注于解析器级别的适配，以更好地支持Qwen-Coder模型。

## 许可证

[LICENSE](./LICENSE)

