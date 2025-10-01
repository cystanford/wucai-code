# 编程任务示例

本指南提供了各种编程任务的实用示例，展示如何使用Wucai Code解决常见的开发问题。

## 基础编程任务

### 算法实现

#### 排序算法
```bash
> 实现一个快速排序算法，包含详细注释
```

**生成结果：**
```python
def quick_sort(arr):
    """
    快速排序算法实现
    
    Args:
        arr: 待排序的数组
    
    Returns:
        排序后的数组
    """
    if len(arr) <= 1:
        return arr
    
    # 选择基准元素
    pivot = arr[len(arr) // 2]
    
    # 分割数组
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    # 递归排序并合并
    return quick_sort(left) + middle + quick_sort(right)

# 测试用例
if __name__ == "__main__":
    test_array = [64, 34, 25, 12, 22, 11, 90]
    print("原数组:", test_array)
    sorted_array = quick_sort(test_array)
    print("排序后:", sorted_array)
```

#### 搜索算法
```bash
> 实现二分查找算法，包含错误处理
```

**生成结果：**
```python
def binary_search(arr, target):
    """
    二分查找算法
    
    Args:
        arr: 已排序的数组
        target: 要查找的目标值
    
    Returns:
        目标值的索引，如果不存在返回-1
    """
    if not arr:
        return -1
    
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# 测试用例
if __name__ == "__main__":
    sorted_array = [1, 3, 5, 7, 9, 11, 13, 15]
    target = 7
    result = binary_search(sorted_array, target)
    print(f"在数组 {sorted_array} 中查找 {target}: 索引 {result}")
```

### 数据结构实现

#### 链表操作
```bash
> 实现一个单链表，包含插入、删除、查找功能
```

**生成结果：**
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert(self, val, position=0):
        """在指定位置插入节点"""
        new_node = ListNode(val)
        
        if position == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            for _ in range(position - 1):
                if current is None:
                    raise IndexError("位置超出范围")
                current = current.next
            
            new_node.next = current.next
            current.next = new_node
    
    def delete(self, val):
        """删除指定值的节点"""
        if self.head is None:
            return False
        
        if self.head.val == val:
            self.head = self.head.next
            return True
        
        current = self.head
        while current.next:
            if current.next.val == val:
                current.next = current.next.next
                return True
            current = current.next
        
        return False
    
    def find(self, val):
        """查找指定值的节点"""
        current = self.head
        index = 0
        
        while current:
            if current.val == val:
                return index
            current = current.next
            index += 1
        
        return -1
    
    def display(self):
        """显示链表内容"""
        elements = []
        current = self.head
        
        while current:
            elements.append(current.val)
            current = current.next
        
        return elements

# 测试用例
if __name__ == "__main__":
    ll = LinkedList()
    ll.insert(1)
    ll.insert(2)
    ll.insert(3)
    print("链表内容:", ll.display())
    print("查找值2的索引:", ll.find(2))
    ll.delete(2)
    print("删除2后的链表:", ll.display())
```

## Web开发任务

### 前端开发

#### React组件
```bash
> 创建一个用户管理组件，包含增删改查功能
```

**生成结果：**
```jsx
import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user'
  });
  const [editingId, setEditingId] = useState(null);

  // 添加用户
  const addUser = (e) => {
    e.preventDefault();
    if (editingId) {
      // 更新用户
      setUsers(users.map(user => 
        user.id === editingId ? { ...user, ...formData } : user
      ));
      setEditingId(null);
    } else {
      // 新增用户
      const newUser = {
        id: Date.now(),
        ...formData
      };
      setUsers([...users, newUser]);
    }
    setFormData({ name: '', email: '', role: 'user' });
  };

  // 删除用户
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // 编辑用户
  const editUser = (user) => {
    setFormData(user);
    setEditingId(user.id);
  };

  return (
    <div className="user-management">
      <h2>用户管理</h2>
      
      {/* 用户表单 */}
      <form onSubmit={addUser} className="user-form">
        <input
          type="text"
          placeholder="姓名"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="邮箱"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({...formData, role: e.target.value})}
        >
          <option value="user">用户</option>
          <option value="admin">管理员</option>
        </select>
        <button type="submit">
          {editingId ? '更新' : '添加'}
        </button>
      </form>

      {/* 用户列表 */}
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className={`role ${user.role}`}>{user.role}</span>
            </div>
            <div className="user-actions">
              <button onClick={() => editUser(user)}>编辑</button>
              <button onClick={() => deleteUser(user.id)}>删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
```

#### Vue组件
```bash
> 创建一个待办事项组件，使用Vue 3 Composition API
```

**生成结果：**
```vue
<template>
  <div class="todo-app">
    <h2>待办事项</h2>
    
    <!-- 添加任务表单 -->
    <form @submit.prevent="addTodo" class="todo-form">
      <input
        v-model="newTodo"
        type="text"
        placeholder="添加新任务..."
        required
      />
      <button type="submit">添加</button>
    </form>

    <!-- 任务列表 -->
    <div class="todo-list">
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <input
          type="checkbox"
          v-model="todo.completed"
          @change="updateTodo(todo)"
        />
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)" class="delete-btn">删除</button>
      </div>
    </div>

    <!-- 过滤器 -->
    <div class="filters">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="currentFilter = filter"
        :class="{ active: currentFilter === filter }"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 响应式数据
const newTodo = ref('');
const todos = ref([]);
const currentFilter = ref('全部');

// 过滤器选项
const filters = ['全部', '进行中', '已完成'];

// 计算属性
const filteredTodos = computed(() => {
  switch (currentFilter.value) {
    case '进行中':
      return todos.value.filter(todo => !todo.completed);
    case '已完成':
      return todos.value.filter(todo => todo.completed);
    default:
      return todos.value;
  }
});

// 方法
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value.trim(),
      completed: false,
      createdAt: new Date()
    });
    newTodo.value = '';
  }
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
};

const updateTodo = (todo) => {
  // 更新任务状态
  const index = todos.value.findIndex(t => t.id === todo.id);
  if (index !== -1) {
    todos.value[index] = { ...todo };
  }
};
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-form button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.filters button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.filters button.active {
  background: #007bff;
  color: white;
}
</style>
```

### 后端开发

#### Express.js API
```bash
> 创建一个用户管理的RESTful API，包含JWT认证
```

**生成结果：**
```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 数据库模型
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

const User = mongoose.model('User', UserSchema);

// 中间件
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: '访问令牌缺失' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '无效令牌' });
    }
    req.user = user;
    next();
  });
};

// 路由
// 用户注册
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // 验证输入
    if (!username || !email || !password) {
      return res.status(400).json({ error: '所有字段都是必需的' });
    }

    // 检查用户是否已存在
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: '用户已存在' });
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 创建用户
    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    // 生成JWT令牌
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: '用户注册成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 用户登录
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 查找用户
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: '无效的邮箱或密码' });
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: '无效的邮箱或密码' });
    }

    // 生成JWT令牌
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: '登录成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取用户信息
app.get('/api/user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 更新用户信息
app.put('/api/user', authenticateToken, async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { username, email },
      { new: true }
    ).select('-password');

    res.json({
      message: '用户信息更新成功',
      user
    });
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 删除用户
app.delete('/api/user', authenticateToken, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.userId);
    res.json({ message: '用户删除成功' });
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});
```

## 数据库操作

### SQL查询
```bash
> 创建一个复杂的SQL查询，分析销售数据
```

**生成结果：**
```sql
-- 分析销售数据的复杂查询
WITH monthly_sales AS (
  SELECT 
    DATE_TRUNC('month', order_date) as month,
    product_id,
    SUM(quantity * unit_price) as total_sales,
    COUNT(*) as order_count
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.order_date >= '2023-01-01'
  GROUP BY DATE_TRUNC('month', order_date), product_id
),
product_rankings AS (
  SELECT 
    month,
    product_id,
    total_sales,
    order_count,
    ROW_NUMBER() OVER (PARTITION BY month ORDER BY total_sales DESC) as sales_rank,
    ROW_NUMBER() OVER (PARTITION BY month ORDER BY order_count DESC) as order_rank
  FROM monthly_sales
)
SELECT 
  pr.month,
  p.product_name,
  pr.total_sales,
  pr.order_count,
  pr.sales_rank,
  pr.order_rank,
  CASE 
    WHEN pr.sales_rank <= 3 THEN '热销产品'
    WHEN pr.sales_rank <= 10 THEN '畅销产品'
    ELSE '普通产品'
  END as product_category
FROM product_rankings pr
JOIN products p ON pr.product_id = p.product_id
WHERE pr.sales_rank <= 20
ORDER BY pr.month DESC, pr.sales_rank ASC;
```

## 自动化脚本

### 部署脚本
```bash
> 创建一个自动化部署脚本，包含测试、构建、部署步骤
```

**生成结果：**
```bash
#!/bin/bash

# 自动化部署脚本
set -e  # 遇到错误立即退出

# 配置变量
PROJECT_NAME="my-app"
DEPLOY_ENV="production"
DOCKER_IMAGE="my-app:latest"
REGISTRY="registry.example.com"
KUBERNETES_NAMESPACE="production"

echo "开始部署 $PROJECT_NAME 到 $DEPLOY_ENV 环境..."

# 1. 运行测试
echo "步骤 1: 运行测试..."
npm test
if [ $? -ne 0 ]; then
    echo "测试失败，部署中止"
    exit 1
fi

# 2. 代码质量检查
echo "步骤 2: 代码质量检查..."
npm run lint
npm run type-check

# 3. 构建应用
echo "步骤 3: 构建应用..."
npm run build
if [ $? -ne 0 ]; then
    echo "构建失败，部署中止"
    exit 1
fi

# 4. 构建Docker镜像
echo "步骤 4: 构建Docker镜像..."
docker build -t $DOCKER_IMAGE .
docker tag $DOCKER_IMAGE $REGISTRY/$DOCKER_IMAGE

# 5. 推送镜像到仓库
echo "步骤 5: 推送镜像到仓库..."
docker push $REGISTRY/$DOCKER_IMAGE

# 6. 部署到Kubernetes
echo "步骤 6: 部署到Kubernetes..."
kubectl set image deployment/$PROJECT_NAME $PROJECT_NAME=$REGISTRY/$DOCKER_IMAGE -n $KUBERNETES_NAMESPACE

# 7. 等待部署完成
echo "步骤 7: 等待部署完成..."
kubectl rollout status deployment/$PROJECT_NAME -n $KUBERNETES_NAMESPACE --timeout=300s

# 8. 健康检查
echo "步骤 8: 健康检查..."
kubectl get pods -n $KUBERNETES_NAMESPACE -l app=$PROJECT_NAME

# 9. 发送通知
echo "步骤 9: 发送部署通知..."
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"部署成功: '$PROJECT_NAME' 已部署到 '$DEPLOY_ENV' 环境"}' \
  $SLACK_WEBHOOK_URL

echo "部署完成！"
```

## 最佳实践

### 1. 代码质量
- 编写清晰的注释
- 使用有意义的变量名
- 遵循编码规范
- 添加错误处理

### 2. 测试驱动
- 先写测试用例
- 确保测试覆盖
- 自动化测试流程
- 持续集成

### 3. 文档完善
- 编写API文档
- 添加使用示例
- 记录配置说明
- 维护更新日志

## 下一步

掌握了编程任务示例后，您可以：

- [学习代码审查示例](./code-review.md)
- [查看调试示例](./debugging.md)
- [探索自动化示例](./automation.md)
- [学习高级功能](/zh/advanced/customization)
