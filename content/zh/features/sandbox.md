# 沙箱功能

Wucai Code的沙箱功能提供了一个安全的执行环境，让您可以安全地运行代码、执行命令和测试功能，而不会影响您的系统。

## 沙箱类型

### Docker沙箱
- 使用Docker容器隔离
- 支持多种操作系统
- 资源限制和控制
- 网络隔离

### Podman沙箱
- 无根容器支持
- 更好的安全性
- 资源效率
- 兼容Docker镜像

### 本地沙箱
- 基于系统权限控制
- 文件系统隔离
- 进程限制
- 网络访问控制

## 沙箱配置

### 基本配置
```json
{
  "sandbox": {
    "enabled": true,
    "type": "docker",
    "image": "node:18",
    "resources": {
      "memory": "512MB",
      "cpu": "0.5",
      "disk": "1GB"
    }
  }
}
```

### 安全配置
```json
{
  "sandbox": {
    "security": {
      "readOnly": false,
      "networkAccess": true,
      "fileSystemAccess": true,
      "processLimit": 10
    }
  }
}
```

## 沙箱操作

### 启动沙箱
```bash
> 在沙箱中运行这个Python脚本
> 使用Docker沙箱测试这个应用
> 在隔离环境中执行这个命令
```

### 文件操作
```bash
> 在沙箱中创建测试文件
> 修改沙箱中的配置文件
> 在沙箱中运行构建命令
```

### 网络操作
```bash
> 在沙箱中测试网络连接
> 下载文件到沙箱环境
> 在沙箱中运行Web服务
```

## 沙箱管理

### 容器管理
```bash
> 列出所有沙箱容器
> 停止沙箱容器
> 清理沙箱环境
> 重启沙箱服务
```

### 资源监控
```bash
> 查看沙箱资源使用情况
> 监控内存和CPU使用
> 检查磁盘空间
> 分析网络流量
```

### 日志管理
```bash
> 查看沙箱日志
> 分析执行结果
> 导出日志文件
> 清理历史日志
```

## 使用场景

### 代码测试
```bash
> 在沙箱中测试这个算法
> 运行单元测试
> 执行集成测试
> 性能基准测试
```

### 环境验证
```bash
> 验证部署脚本
> 测试配置文件
> 检查依赖安装
> 验证环境变量
```

### 安全测试
```bash
> 测试恶意代码
> 验证安全漏洞
> 检查权限设置
> 测试网络安全
```

## 沙箱示例

### 示例1：Python脚本测试
```bash
> 在沙箱中运行这个Python脚本：
import os
print("当前目录:", os.getcwd())
print("环境变量:", os.environ.get('PATH', 'Not found'))
```

**执行结果：**
- 在隔离环境中运行
- 显示沙箱内的目录结构
- 显示沙箱内的环境变量
- 不影响主机系统

### 示例2：Node.js应用测试
```bash
> 在沙箱中测试这个Express应用
```

**测试步骤：**
1. 创建沙箱环境
2. 安装Node.js依赖
3. 启动应用服务
4. 测试API端点
5. 清理沙箱环境

### 示例3：系统命令测试
```bash
> 在沙箱中执行这个系统命令
```

**安全执行：**
- 限制文件系统访问
- 控制网络访问
- 限制进程创建
- 监控资源使用

## 安全特性

### 文件系统隔离
- 只读文件系统
- 临时文件系统
- 访问权限控制
- 文件操作审计

### 网络隔离
- 网络访问控制
- 端口限制
- 协议过滤
- 流量监控

### 进程隔离
- 进程数量限制
- 资源使用限制
- 权限降级
- 进程监控

### 系统调用限制
- 系统调用过滤
- 危险操作阻止
- 权限检查
- 审计日志

## 配置选项

### Docker配置
```json
{
  "docker": {
    "image": "node:18",
    "volumes": [],
    "ports": [],
    "environment": {
      "NODE_ENV": "test"
    },
    "capabilities": ["NET_ADMIN"],
    "securityOpts": ["no-new-privileges"]
  }
}
```

### 资源限制
```json
{
  "resources": {
    "memory": "512MB",
    "memorySwap": "1GB",
    "cpu": "0.5",
    "disk": "1GB",
    "network": "100Mbps"
  }
}
```

### 安全策略
```json
{
  "security": {
    "readOnlyRootFilesystem": true,
    "noNewPrivileges": true,
    "user": "1000:1000",
    "capabilities": {
      "add": [],
      "drop": ["ALL"]
    }
  }
}
```

## 最佳实践

### 1. 安全配置
- 使用最小权限原则
- 限制资源使用
- 启用审计日志
- 定期更新镜像

### 2. 性能优化
- 合理设置资源限制
- 使用缓存机制
- 优化镜像大小
- 并行执行任务

### 3. 监控和维护
- 监控资源使用
- 定期清理容器
- 更新安全补丁
- 备份重要数据

## 故障排除

### 沙箱启动失败
1. 检查Docker/Podman状态
2. 验证镜像可用性
3. 检查资源限制
4. 查看错误日志

### 权限问题
1. 检查用户权限
2. 验证文件权限
3. 确认容器权限
4. 调整安全策略

### 性能问题
1. 检查资源使用
2. 优化配置设置
3. 升级硬件配置
4. 调整并发设置

## 高级功能

### 自定义镜像
```dockerfile
FROM node:18
RUN apt-get update && apt-get install -y python3
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
```

### 多容器编排
```yaml
version: '3.8'
services:
  app:
    image: node:18
    volumes:
      - .:/app
    working_dir: /app
    command: npm start
  
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: testdb
```

### 网络配置
```json
{
  "network": {
    "mode": "bridge",
    "ports": ["3000:3000"],
    "dns": ["8.8.8.8"],
    "hostname": "sandbox"
  }
}
```

## 下一步

掌握了沙箱功能后，您可以：

- [查看实际示例](/zh/examples/programming-tasks)
- [学习高级自定义](/zh/advanced/customization)
- [探索故障排除](/zh/troubleshooting/common-issues)
- [学习MCP服务器](/zh/advanced/mcp-servers)
