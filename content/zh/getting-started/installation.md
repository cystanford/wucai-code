# 安装指南

本指南将帮助您在系统上安装Wucai Code。

## 系统要求

### 最低要求
- **Node.js**: 版本 20.0.0 或更高
- **操作系统**: Windows 10+, macOS 10.15+, 或 Linux
- **内存**: 至少 4GB RAM
- **存储空间**: 至少 500MB 可用空间

### 推荐配置
- **Node.js**: 版本 20.x 或 22.x
- **内存**: 8GB 或更多
- **网络**: 稳定的互联网连接（用于API调用）

## 安装步骤

🌟**注意:** 在macOS或某些版本的Linux环境中(如Ubuntu Linux)安装Wucai Code时，需要使用sudo命令执行安装脚本：

```bash
sudo npm install -g @wucai/wucai-code@latest
```

### 方法一：使用 npm（推荐）

1. **检查 Node.js 版本**
   ```bash
   node --version
   ```
   确保版本为 20.0.0 或更高。

2. **安装Wucai Code**
   ```bash
   npm install -g @wucai/wucai-code@latest
   ```

3. **验证安装**
   ```bash
   wucai --version
   ```

### 方法二：使用 Homebrew（macOS/Linux）

```bash
brew install wucai-code
```

### 方法三：使用 yarn

```bash
yarn global add @wucai/wucai-code@latest
```

### 方法四：使用 pnpm

```bash
pnpm add -g @wucai/wucai-code@latest
```

## 安装后设置

### 1. 首次运行
```bash
wucai
```

初次启动时界面如下：

![wucai-code](../assets/images/wucai_firstlaunch.png)


### 2. 选择身份验证方式
- **Qwen OAuth**（推荐，免费）

   详细请参考[Qwen OAuth认证](/zh/getting-started/authentication#方法二qwen-oauth)


- **API 密钥**（需要申请）

   详细请参考[API密钥认证](/zh/getting-started/authentication#方法一api密钥)


### 3. 配置完成
按照提示完成身份验证设置。

## 常见安装问题

### 问题：命令未找到
**解决方案：**
1. 检查 Node.js 是否正确安装
2. 确保 npm 全局目录在 PATH 中
3. 重新安装：
   ```bash
   npm uninstall -g @wucai/wucai-code
   npm install -g @wucai/wucai-code@latest
   ```

### 问题：权限错误
**解决方案：**
1. **Windows**: 以管理员身份运行命令提示符
2. **macOS/Linux**: 使用 sudo 执行或配置 npm 全局目录权限（不推荐）

### 问题：网络连接问题
**解决方案：**
1. 检查网络连接
2. 配置 npm 镜像（中国用户）：
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```

## 卸载

如果需要卸载Wucai Code：

```bash
npm uninstall -g @wucai/wucai-code
```
如不能正确卸载需要使用 sudo 执行或配置 npm 全局目录权限（不推荐）

## 更新

更新到最新版本：

```bash
npm update -g @wucai/wucai-code@latest
```

## 下一步

安装完成后，请继续阅读：
- [首次使用指南](./first-steps.md)
- [身份验证设置](./authentication.md)
