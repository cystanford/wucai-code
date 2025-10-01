# 代码审查和优化

本教程将通过一个实际项目，展示如何使用Wucai Code进行代码审查、发现问题、获取优化建议并实施改进。

## 教程目标

我们将审查一个已有的待办事项管理API项目，完整体验：
- 代码质量分析
- 性能问题诊断
- 安全漏洞检查
- 重构和优化实施
- 测试和验证改进效果

## 项目准备

假设我们有一个现有项目，存在以下代码：

### 问题代码示例

```javascript
// src/routes/todos.js
const express = require('express');
const router = express.Router();

router.post('/todos', (req, res) => {
  const title = req.body.title;
  const userId = req.headers.userId;

  // 直接查询数据库
  db.query('INSERT INTO todos (title, user_id) VALUES ("' + title + '", "' + userId + '")', function(err, result) {
    if (err) {
      res.send('Error');
    }
    res.send('Success');
  });
});

router.get('/todos', (req, res) => {
  const userId = req.headers.userId;

  // 查询所有字段
  db.query('SELECT * FROM todos WHERE user_id = ' + userId, function(err, results) {
    if (err) {
      res.send('Error');
    }

    // 在每个循环中查询用户信息
    for (let i = 0; i < results.length; i++) {
      db.query('SELECT * FROM users WHERE id = ' + results[i].user_id, function(err, user) {
        results[i].user = user;
      });
    }

    res.send(results);
  });
});

module.exports = router;
```

## 第一步：初始代码审查

### 1. 将代码提交给AI进行审查

启动Wucai Code并切换到项目目录：

```bash
cd ~/projects/todo-api
wucai
```

让AI读取并审查代码：

```bash
> 请审查 src/routes/todos.js 文件的代码质量
```

### 2. AI的审查结果

AI会指出以下问题：

**安全问题：**
- SQL注入漏洞：直接拼接用户输入到SQL语句
- 缺少身份验证：没有验证用户身份
- 缺少输入验证：没有检查title是否为空

**性能问题：**
- N+1查询问题：在循环中执行数据库查询
- 查询所有字段：使用SELECT *
- 没有数据库索引建议

**代码质量问题：**
- 错误处理不完整：错误信息不明确
- 异步处理错误：循环中的异步查询未正确处理
- 缺少HTTP状态码：使用res.send而不是res.status().json()
- 缺少输入验证

### 3. 获取详细的安全分析

```bash
> 这段代码存在哪些安全漏洞？请详细说明并给出修复建议
```

AI会提供详细的安全分析和修复方案。

## 第二步：修复安全漏洞

### 1. 修复SQL注入问题

```bash
> 请修复SQL注入漏洞，使用参数化查询
```

AI会重写代码：

```javascript
router.post('/todos', (req, res) => {
  const { title } = req.body;
  const userId = req.headers.userId;

  // 使用参数化查询防止SQL注入
  db.query(
    'INSERT INTO todos (title, user_id) VALUES (?, ?)',
    [title, userId],
    function(err, result) {
      if (err) {
        return res.status(500).json({ error: '创建失败' });
      }
      res.status(201).json({
        message: '创建成功',
        id: result.insertId
      });
    }
  );
});
```

### 2. 添加身份验证中间件

```bash
> 创建JWT身份验证中间件，替代不安全的header userId
```

AI会创建 `src/middleware/auth.js`：

```javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: '缺少认证令牌' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '无效令牌' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
```

### 3. 添加输入验证

```bash
> 使用express-validator添加输入验证
```

AI会更新路由：

```javascript
const { body, validationResult } = require('express-validator');

router.post('/todos',
  authenticateToken,
  [
    body('title')
      .trim()
      .notEmpty().withMessage('标题不能为空')
      .isLength({ max: 100 }).withMessage('标题不能超过100个字符')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 处理逻辑...
  }
);
```

## 第三步：优化性能问题

### 1. 修复N+1查询问题

```bash
> 修复GET /todos接口的N+1查询问题，使用JOIN查询
```

AI会重写查询：

```javascript
router.get('/todos', authenticateToken, (req, res) => {
  const userId = req.user.userId;

  const query = `
    SELECT
      t.id,
      t.title,
      t.description,
      t.completed,
      t.created_at,
      u.username,
      u.email
    FROM todos t
    LEFT JOIN users u ON t.user_id = u.id
    WHERE t.user_id = ?
    ORDER BY t.created_at DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: '查询失败' });
    }

    res.json({
      todos: results,
      count: results.length
    });
  });
});
```

### 2. 添加数据库索引

```bash
> 为这个查询创建数据库索引的SQL语句
```

AI会生成：

```sql
-- 为user_id添加索引，优化查询性能
CREATE INDEX idx_todos_user_id ON todos(user_id);

-- 为created_at添加索引，优化排序
CREATE INDEX idx_todos_created_at ON todos(created_at);

-- 复合索引，进一步优化查询
CREATE INDEX idx_todos_user_created ON todos(user_id, created_at);
```

### 3. 测试性能改进

```bash
> 创建一个脚本来测试API性能
```

AI会创建性能测试脚本：

```javascript
// test/performance.js
const axios = require('axios');

async function testPerformance() {
  const API_URL = 'http://localhost:3000/api';
  const token = 'your_test_token';

  console.log('开始性能测试...\n');

  // 测试GET请求
  const start = Date.now();
  for (let i = 0; i < 100; i++) {
    await axios.get(`${API_URL}/todos`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  const end = Date.now();

  console.log(`100次GET请求耗时: ${end - start}ms`);
  console.log(`平均响应时间: ${(end - start) / 100}ms`);
}

testPerformance();
```

运行测试：

```bash
> 运行 node test/performance.js
```

## 第四步：代码重构

### 1. 提取数据库查询到独立层

```bash
> 将数据库查询逻辑提取到独立的DAO层
```

AI会创建 `src/dao/todoDao.js`：

```javascript
class TodoDao {
  constructor(db) {
    this.db = db;
  }

  async create(title, description, userId) {
    const query = 'INSERT INTO todos (title, description, user_id) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      this.db.query(query, [title, description, userId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  async findByUserId(userId) {
    const query = `
      SELECT
        t.id,
        t.title,
        t.description,
        t.completed,
        t.created_at
      FROM todos t
      WHERE t.user_id = ?
      ORDER BY t.created_at DESC
    `;

    return new Promise((resolve, reject) => {
      this.db.query(query, [userId], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  // 其他方法...
}

module.exports = TodoDao;
```

### 2. 重构路由使用DAO层

```bash
> 重构路由文件使用新的TodoDao
```

### 3. 添加服务层

```bash
> 创建服务层来处理业务逻辑
```

AI会创建 `src/services/todoService.js` 来封装业务逻辑。

## 第五步：改进错误处理

### 1. 创建统一错误处理

```bash
> 创建全局错误处理中间件和自定义错误类
```

AI会创建 `src/middleware/errorHandler.js`：

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || '服务器错误';

  console.error('错误:', err);

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      error: {
        message: err.message,
        stack: err.stack,
        statusCode: err.statusCode
      }
    });
  } else {
    res.status(err.statusCode).json({
      error: {
        message: err.isOperational ? err.message : '服务器错误'
      }
    });
  }
};

module.exports = { AppError, errorHandler };
```

### 2. 应用错误处理

```bash
> 更新路由使用新的错误处理机制
```

## 第六步：添加日志和监控

### 1. 配置日志系统

```bash
> 使用winston配置日志系统，包括文件日志和控制台日志
```

### 2. 添加请求日志中间件

```bash
> 创建中间件记录所有API请求
```

### 3. 添加性能监控

```bash
> 添加响应时间监控
```

## 第七步：代码质量验证

### 1. 运行代码检查

```bash
> 运行 npm run lint 检查代码风格
```

### 2. 检查测试覆盖率

```bash
> 为重构后的代码创建单元测试
```

AI会创建完整的测试套件。

### 3. 运行测试

```bash
> 运行 npm test 执行所有测试
```

## 第八步：对比改进效果

### 1. 性能对比

```bash
> 对比重构前后的性能数据
```

AI会生成对比报告：

**优化前：**
- 100次请求耗时：5000ms
- 平均响应时间：50ms
- 数据库查询次数：101次（N+1问题）

**优化后：**
- 100次请求耗时：800ms
- 平均响应时间：8ms
- 数据库查询次数：1次

**性能提升：**
- 响应速度提升 84%
- 数据库查询减少 99%

### 2. 代码质量对比

```bash
> 分析重构前后的代码质量指标
```

**优化前：**
- 圈复杂度：15
- 安全漏洞：3个高危
- 代码重复率：25%
- 测试覆盖率：0%

**优化后：**
- 圈复杂度：3
- 安全漏洞：0个
- 代码重复率：0%
- 测试覆盖率：85%

## 完整对话流程示例

```
用户: 请审查 src/routes/todos.js 文件
AI: [分析代码，指出安全、性能、质量问题]

用户: 先修复SQL注入漏洞
AI: [使用参数化查询重写代码]

用户: 添加JWT认证
AI: [创建认证中间件]

用户: 修复N+1查询问题
AI: [使用JOIN优化查询]

用户: 提取DAO层
AI: [创建数据访问层]

用户: 添加单元测试
AI: [生成测试代码]

用户: 运行测试
AI: [执行npm test并显示结果]

用户: 生成性能对比报告
AI: [创建详细的对比报告]
```

## 关键学习点

### 1. 系统化审查
按照优先级处理问题：
1. 安全问题（最高优先级）
2. 性能问题
3. 代码质量
4. 可维护性

### 2. 渐进式重构
不要一次性重写所有代码：
1. 先修复关键问题
2. 逐步优化性能
3. 持续改进代码质量

### 3. 验证改进效果
每次改进后都要验证：
```bash
> 运行测试验证修改是否正确
> 测试性能是否有提升
> 确认没有引入新问题
```

### 4. 文档更新
重构后更新文档：
```bash
> 更新API文档
> 添加代码注释
> 记录重构原因和效果
```

## 常见审查场景

### 场景1：遗留代码接手

```bash
> 我接手了一个遗留项目，帮我分析主要问题
> 列出需要优先处理的技术债务
> 制定重构计划
```

### 场景2：性能优化

```bash
> 这个接口响应很慢，帮我分析原因
> 数据库查询如何优化？
> 添加缓存机制
```

### 场景3：安全加固

```bash
> 全面检查安全漏洞
> 添加输入验证和过滤
> 实施最佳安全实践
```

## 下一步

现在你已经学会了如何进行代码审查和优化，可以继续：

- [学习更多命令](/zh/reference/commands) - 掌握所有可用命令
- [配置开发环境](/zh/reference/configuration) - 优化工作流程
- [查看高级功能](/zh/advanced/customization) - 深入学习高级特性
