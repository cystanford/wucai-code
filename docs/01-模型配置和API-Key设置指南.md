# 01-模型配置和API Key设置指南

## 1. 配置文件位置

### 1.1 用户设置文件位置
`~/.wucai/settings.json` 文件位于：
- **Windows**: `C:\Users\{用户名}\.wucai\settings.json`
- **macOS**: `/Users/{用户名}/.wucai/settings.json`
- **Linux**: `/home/{用户名}/.wucai/settings.json`

### 1.2 环境变量文件位置
`~/.wucai/.env` 文件位于：
- **Windows**: `C:\Users\{用户名}\.wucai\.env`
- **macOS**: `/Users/{用户名}/.wucai/.env`
- **Linux**: `/home/{用户名}/.wucai/.env`

## 2. 多模型配置方案

### 2.1 推荐的配置结构

在 `~/.wucai/settings.json` 中配置多个模型：

```json
{
  "selectedAuthType": "USE_OPENAI",
  "model": "Qwen3-Coder-480B-A35B-Instruct",
  "systemPromptMappings": [
    {
      "baseUrls": [
        "https://dashscope.aliyuncs.com/compatible-mode/v1/",
        "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/"
      ],
      "modelNames": ["Qwen3-Coder-480B-A35B-Instruct"],
      "template": "SYSTEM_TEMPLATE:{\"name\":\"qwen3_coder\",\"params\":{\"is_git_repository\":{RUNTIME_VARS_IS_GIT_REPO},\"sandbox\":\"{RUNTIME_VARS_SANDBOX}\"}}"
    },
    {
      "baseUrls": [
        "https://dashscope.aliyuncs.com/compatible-mode/v1/",
        "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/"
      ],
      "modelNames": ["qwen2.5-vl-7b-instruct"],
      "template": "SYSTEM_TEMPLATE:{\"name\":\"qwen2_5_vl\",\"params\":{\"is_git_repository\":{RUNTIME_VARS_IS_GIT_REPO},\"sandbox\":\"{RUNTIME_VARS_SANDBOX}\"}}"
    },
    {
      "baseUrls": [
        "https://dashscope.aliyuncs.com/compatible-mode/v1/",
        "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/"
      ],
      "modelNames": ["qwen3-32b"],
      "template": "SYSTEM_TEMPLATE:{\"name\":\"qwen3_32b\",\"params\":{\"is_git_repository\":{RUNTIME_VARS_IS_GIT_REPO},\"sandbox\":\"{RUNTIME_VARS_SANDBOX}\"}}"
    }
  ]
}
```

### 2.2 环境变量配置

在 `~/.wucai/.env` 中设置：

```env
# DashScope API 配置
OPENAI_API_KEY=你的dashscope_api_key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1

# 默认模型（可以通过命令行参数覆盖）
OPENAI_MODEL=Qwen3-Coder-480B-A35B-Instruct
```

## 3. 模型使用场景配置

### 3.1 代码生成模型
```bash
# 使用 Qwen3-Coder-480B-A35B-Instruct 进行代码生成
qwen --model=Qwen3-Coder-480B-A35B-Instruct
```

### 3.2 图生代码模型
```bash
# 使用 qwen2.5-vl-7b-instruct 进行图生代码
qwen --model=qwen2.5-vl-7b-instruct
```

### 3.3 语言理解模型
```bash
# 使用 qwen3-32b 进行语言理解任务
qwen --model=qwen3-32b
```

## 4. 系统中使用的其他模型

### 4.1 嵌入模型
系统默认使用 `text-embedding-v4` 作为嵌入模型，用于：
- 文档检索
- 语义搜索
- 上下文理解

### 4.2 视觉模型
系统新增了视觉模型支持：
- **视觉模型**: `qwen2.5-vl-7b-instruct` - 用于图像分析和图生代码
- **代码模型**: `Qwen3-Coder-480B-A35B-Instruct` - 用于代码生成

### 4.3 模型配置位置
- **默认模型**: `packages/core/src/config/models.ts`
- **嵌入模型**: `DEFAULT_GEMINI_EMBEDDING_MODEL = 'text-embedding-v4'`
- **视觉模型**: `DEFAULT_VISUAL_MODEL = 'qwen2.5-vl-7b-instruct'`
- **代码模型**: `DEFAULT_CODER_MODEL = 'Qwen3-Coder-480B-A35B-Instruct'`

## 5. 动态模型切换

### 5.1 命令行切换
```bash
# 切换到图生代码模型
qwen --model=qwen2.5-vl-7b-instruct

# 切换到语言理解模型
qwen --model=qwen3-32b

# 切换到代码生成模型
qwen --model=Qwen3-Coder-480B-A35B-Instruct
```

### 5.2 项目级配置
在项目根目录创建 `.wucai/settings.json`：

```json
{
  "model": "qwen2.5-vl-7b-instruct",
  "systemPromptMappings": [
    {
      "baseUrls": ["https://dashscope.aliyuncs.com/compatible-mode/v1/"],
      "modelNames": ["qwen2.5-vl-7b-instruct"],
      "template": "SYSTEM_TEMPLATE:{\"name\":\"qwen2_5_vl\",\"params\":{\"is_git_repository\":{RUNTIME_VARS_IS_GIT_REPO},\"sandbox\":\"{RUNTIME_VARS_SANDBOX}\"}}"
    }
  ]
}
```

## 6. 模型能力对比

| 模型名称 | 代码能力 | 识图能力 | 语言理解 | 推荐用途 |
|---------|---------|---------|---------|---------|
| Qwen3-Coder-480B-A35B-Instruct | ⭐⭐⭐⭐⭐ | ❌ | ⭐⭐⭐⭐ | 复杂代码生成、重构 |
| qwen2.5-vl-7b-instruct | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 图生代码、UI设计 |
| qwen3-32b | ⭐⭐⭐ | ❌ | ⭐⭐⭐⭐⭐ | 需求分析、文档理解 |

## 7. 配置验证

### 7.1 检查配置是否生效
```bash
# 启动时查看模型信息
qwen --debug

# 检查环境变量
echo $OPENAI_API_KEY
echo $OPENAI_BASE_URL
echo $OPENAI_MODEL
```

### 7.2 配置文件检查
```bash
# 检查用户设置文件
cat ~/.wucai/settings.json

# 检查环境变量文件
cat ~/.wucai/.env
```

## 8. 故障排除

### 8.1 常见问题
1. **模型切换不生效**: 检查 `systemPromptMappings` 配置是否正确
2. **API调用失败**: 验证 `OPENAI_API_KEY` 和 `OPENAI_BASE_URL` 是否正确
3. **识图功能不工作**: 确保使用支持视觉的模型（如 `qwen2.5-vl-7b-instruct`）

### 8.2 调试模式
```bash
# 启用调试模式查看详细信息
qwen --debug --model=qwen2.5-vl-7b-instruct
```

## 9. 图生代码功能

### 9.1 功能概述
系统现在支持图生代码功能，可以分析UI设计图并生成对应的前端代码。

### 9.2 使用方法
```bash
# 分析图像并生成Vue3代码
@界面设计-1.png 帮我生成前端vue3

# 分析图像并生成React代码
@设计稿.png 根据这个设计生成React组件
```

### 9.3 工作流程
1. **图像检测**: 系统自动检测输入中的图像文件
2. **模型选择**: 自动选择 `qwen2.5-vl-7b-instruct` 进行图像分析
3. **UI分析**: 分析图像中的UI组件、布局、颜色等
4. **代码生成**: 使用 `Qwen3-Coder-480B-A35B-Instruct` 生成对应代码

### 9.4 图像分析工具
系统新增了 `image_analysis` 工具，支持：
- **ui_design**: UI设计分析（默认）
- **code_generation**: 代码生成分析
- **general**: 通用图像分析

### 9.5 配置示例
在 `~/.wucai/settings.json` 中配置：
```json
{
  "selectedAuthType": "USE_OPENAI",
  "model": "Qwen3-Coder-480B-A35B-Instruct",
  "embeddingModel": "text-embedding-v4",
  "systemPromptMappings": [
    {
      "baseUrls": ["https://dashscope.aliyuncs.com/compatible-mode/v1/"],
      "modelNames": ["qwen2.5-vl-7b-instruct"],
      "template": "SYSTEM_TEMPLATE:{\"name\":\"qwen2_5_vl\",\"params\":{\"is_git_repository\":{RUNTIME_VARS_IS_GIT_REPO},\"sandbox\":\"{RUNTIME_VARS_SANDBOX}\"}}"
    },
    {
      "baseUrls": ["https://dashscope.aliyuncs.com/compatible-mode/v1/"],
      "modelNames": ["Qwen3-Coder-480B-A35B-Instruct"],
      "template": "SYSTEM_TEMPLATE:{\"name\":\"qwen3_coder\",\"params\":{\"is_git_repository\":{RUNTIME_VARS_IS_GIT_REPO},\"sandbox\":\"{RUNTIME_VARS_SANDBOX}\"}}"
    }
  ]
}
```

## 10. 最佳实践

1. **默认配置**: 在用户级别设置最常用的模型
2. **项目配置**: 为特定项目设置专门的模型配置
3. **环境隔离**: 使用不同的 `.env` 文件管理不同环境的配置
4. **版本控制**: 将项目级配置加入版本控制，用户级配置保持本地
5. **图生代码**: 使用 `@图像文件` 语法引用图像文件进行分析
