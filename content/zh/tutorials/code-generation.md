# AI辅助编写代码项目

本教程将带您完整体验如何使用Wucai Code从零开始创建一个实际的Web API项目，涵盖需求分析、代码生成、文件操作和测试运行的完整流程。

## 项目目标

我们将创建一个简单的待办事项管理API，包含以下功能：
- 用户注册和登录（JWT认证）
- 创建、查询、更新、删除待办事项
- 完整的错误处理和数据验证

## 第一步：项目初始化

### 1. 创建项目目录

首先进入你想要创建项目的目录，然后启动Wucai Code：

```bash
cd ~/projects
mkdir todo-api
cd todo-api
wucai
```

### 2. 生成项目基础结构

```bash
> 帮我创建一个Node.js + Express的API项目，包含JWT认证功能，使用MongoDB数据库
```

AI会为你创建：
- `package.json` - 项目配置文件
- `.env.example` - 环境变量示例
- `src/` 目录结构
- 基础的Express服务器配置

### 3. 了解生成的结构

```bash
> 解释一下项目的目录结构
```

AI会详细说明每个目录和文件的作用。

## 第二步：创建数据模型

### 1. 设计用户模型

```bash
> 创建用户模型，包含username、email、password字段，使用Mongoose
```

AI会在 `src/models/User.js` 创建：
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// 密码加密中间件
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);
```

### 2. 创建待办事项模型

```bash
> 创建Todo模型，包含title、description、completed、userId字段
```

AI会生成完整的模型定义并保存到文件。

## 第三步：实现认证功能

### 1. 创建JWT工具

```bash
> 创建JWT工具函数，包含生成token和验证token的功能
```

AI会在 `src/utils/jwt.js` 创建辅助函数。

### 2. 创建认证中间件

```bash
> 创建Express中间件，验证JWT token
```

### 3. 实现注册和登录接口

```bash
> 创建用户注册API端点，包含输入验证和错误处理
```

```bash
> 创建用户登录API端点，返回JWT token
```

AI会为每个端点生成完整的代码，包括：
- 输入验证
- 错误处理
- 安全性考虑
- HTTP状态码

## 第四步：实现待办事项CRUD

### 1. 创建待办事项

```bash
> 创建API端点：POST /api/todos，需要JWT认证，接收title和description
```

### 2. 获取待办事项列表

```bash
> 创建API端点：GET /api/todos，返回当前用户的所有待办事项
```

### 3. 更新待办事项

```bash
> 创建API端点：PUT /api/todos/:id，可以更新title、description、completed状态
```

### 4. 删除待办事项

```bash
> 创建API端点：DELETE /api/todos/:id
```

## 第五步：添加数据验证

### 1. 创建验证中间件

```bash
> 使用express-validator创建请求验证中间件
```

### 2. 应用验证到各个端点

```bash
> 为注册接口添加验证：用户名长度3-20字符，邮箱格式验证，密码最少6位
```

```bash
> 为创建待办事项接口添加验证：title不能为空且最长100字符
```

## 第六步：测试API

### 1. 安装依赖

```bash
> 运行 npm install 安装所有依赖
```

### 2. 配置环境变量

```bash
> 创建 .env 文件，设置MongoDB连接字符串和JWT密钥
```

### 3. 启动服务器

```bash
> 运行 npm run dev 启动开发服务器
```

### 4. 测试API端点

使用curl或者让AI帮你创建测试脚本：

```bash
> 创建一个测试脚本，测试所有API端点
```

AI会生成类似这样的测试脚本：

```bash
#!/bin/bash

API_URL="http://localhost:3000/api"

# 测试用户注册
echo "测试用户注册..."
REGISTER_RESPONSE=$(curl -s -X POST $API_URL/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "123456"
  }')

echo $REGISTER_RESPONSE | jq

# 测试用户登录
echo "\n测试用户登录..."
LOGIN_RESPONSE=$(curl -s -X POST $API_URL/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }')

TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.token')
echo "获取到token: $TOKEN"

# 测试创建待办事项
echo "\n测试创建待办事项..."
TODO_RESPONSE=$(curl -s -X POST $API_URL/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "学习Wucai Code",
    "description": "完成教程学习"
  }')

echo $TODO_RESPONSE | jq

# 测试获取待办事项列表
echo "\n测试获取待办事项列表..."
curl -s -X GET $API_URL/todos \
  -H "Authorization: Bearer $TOKEN" | jq
```

## 第七步：添加错误处理

### 1. 创建全局错误处理中间件

```bash
> 创建Express全局错误处理中间件，统一返回错误格式
```

### 2. 创建自定义错误类

```bash
> 创建自定义错误类，支持不同类型的错误
```

### 3. 应用错误处理

```bash
> 在各个路由中使用自定义错误类
```

## 第八步：添加日志记录

### 1. 配置日志工具

```bash
> 使用winston配置日志记录，输出到文件和控制台
```

### 2. 添加请求日志

```bash
> 创建日志中间件，记录所有API请求
```

## 实际操作演示

### 完整对话流程示例

```
用户: 帮我创建一个Node.js + Express的API项目结构
AI: [创建项目文件和目录结构]

用户: 现在创建用户模型
AI: [生成User模型代码]

用户: 为这个模型添加密码加密功能
AI: [添加bcrypt密码加密中间件]

用户: 创建用户注册接口
AI: [生成完整的注册路由]

用户: 这个接口需要添加邮箱格式验证
AI: [添加express-validator验证]

用户: 现在运行这个项目试试
AI: [执行npm install和npm run dev]

用户: 有错误，提示MongoDB连接失败
AI: [分析错误，提供解决方案]
```

## 项目扩展建议

完成基础功能后，你可以继续：

### 1. 添加更多功能
```bash
> 为待办事项添加分类功能
> 实现待办事项的搜索和过滤
> 添加用户头像上传功能
```

### 2. 优化性能
```bash
> 添加Redis缓存来缓存用户信息
> 实现数据库查询优化
> 添加API请求限流
```

### 3. 完善测试
```bash
> 使用Jest创建单元测试
> 创建API集成测试
> 添加测试覆盖率报告
```

### 4. 部署准备
```bash
> 创建Dockerfile
> 生成docker-compose.yml配置
> 创建生产环境配置
```

## 常见问题处理

### 依赖安装失败
```bash
> npm install失败，提示bcrypt安装错误
```
AI会提供多种解决方案。

### 数据库连接问题
```bash
> MongoDB连接超时，如何解决？
```

### API测试问题
```bash
> 测试登录接口返回401错误
```

## 关键学习点

### 1. 渐进式开发
不要一次性要求所有功能，而是逐步构建：
1. 先搭建基础结构
2. 然后添加核心功能
3. 最后完善细节

### 2. 及时测试
每完成一个功能模块就进行测试：
```bash
> 测试一下注册接口是否正常工作
```

### 3. 理解生成的代码
让AI解释代码的关键部分：
```bash
> 解释一下这个JWT验证中间件的工作原理
```

### 4. 迭代改进
根据测试结果不断优化：
```bash
> 这个错误提示不够友好，帮我改进
```

## 下一步

现在你已经学会了如何用AI辅助创建完整项目，可以继续学习：

- [代码审查和优化教程](/content/zh/tutorials/code-review) - 学习如何提升代码质量
- [命令参考](/content/zh/reference/commands) - 了解更多可用命令
- [配置参考](/content/zh/reference/configuration) - 自定义你的开发环境
