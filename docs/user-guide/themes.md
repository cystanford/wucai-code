# 主题设置

五彩代码提供了多种主题选项，让您可以根据个人喜好和环境需求自定义界面外观。

## 内置主题

### 默认主题 (default)
- 适合大多数用户
- 平衡的对比度
- 支持所有功能

### 深色主题 (dark)
- 适合暗光环境
- 减少眼部疲劳
- 现代感设计

### 浅色主题 (light)
- 适合明亮环境
- 清晰的文字显示
- 经典界面风格

### GitHub主题 (github)
- 仿GitHub界面
- 开发者友好
- 熟悉的配色方案

## 切换主题

### 使用命令切换
```bash
> /theme
```
然后选择您喜欢的主题

### 使用配置文件
在 `~/.wucai/settings.json` 中设置：
```json
{
  "ui": {
    "theme": "dark"
  }
}
```

### 使用环境变量
```bash
export WUCAI_THEME="dark"
```

## 自定义主题

### 创建自定义主题
```json
{
  "theme": {
    "name": "my-custom-theme",
    "colors": {
      "primary": "#00ff00",
      "secondary": "#ff0000",
      "background": "#1a1a1a",
      "foreground": "#ffffff",
      "accent": "#0066cc",
      "muted": "#666666",
      "success": "#00ff00",
      "warning": "#ffaa00",
      "error": "#ff0000",
      "info": "#0066cc"
    }
  }
}
```

### 颜色配置说明

| 颜色属性 | 用途 | 示例值 |
|----------|------|--------|
| `primary` | 主要颜色 | `#00ff00` |
| `secondary` | 次要颜色 | `#ff0000` |
| `background` | 背景色 | `#1a1a1a` |
| `foreground` | 前景色 | `#ffffff` |
| `accent` | 强调色 | `#0066cc` |
| `muted` | 静音色 | `#666666` |
| `success` | 成功色 | `#00ff00` |
| `warning` | 警告色 | `#ffaa00` |
| `error` | 错误色 | `#ff0000` |
| `info` | 信息色 | `#0066cc` |

## 主题示例

### 程序员主题
```json
{
  "theme": {
    "name": "programmer",
    "colors": {
      "primary": "#00ff00",
      "secondary": "#ff6600",
      "background": "#0d1117",
      "foreground": "#c9d1d9",
      "accent": "#58a6ff",
      "muted": "#8b949e",
      "success": "#3fb950",
      "warning": "#d29922",
      "error": "#f85149",
      "info": "#58a6ff"
    }
  }
}
```

### 护眼主题
```json
{
  "theme": {
    "name": "eye-care",
    "colors": {
      "primary": "#2d5016",
      "secondary": "#8b4513",
      "background": "#f5f5dc",
      "foreground": "#2d5016",
      "accent": "#228b22",
      "muted": "#8b7355",
      "success": "#228b22",
      "warning": "#daa520",
      "error": "#dc143c",
      "info": "#4682b4"
    }
  }
}
```

### 高对比度主题
```json
{
  "theme": {
    "name": "high-contrast",
    "colors": {
      "primary": "#ffffff",
      "secondary": "#000000",
      "background": "#000000",
      "foreground": "#ffffff",
      "accent": "#ffff00",
      "muted": "#808080",
      "success": "#00ff00",
      "warning": "#ffff00",
      "error": "#ff0000",
      "info": "#00ffff"
    }
  }
}
```

## 主题配置选项

### 字体设置
```json
{
  "theme": {
    "font": {
      "family": "Consolas, Monaco, monospace",
      "size": 14,
      "weight": "normal"
    }
  }
}
```

### 间距设置
```json
{
  "theme": {
    "spacing": {
      "padding": 8,
      "margin": 4,
      "lineHeight": 1.5
    }
  }
}
```

### 边框设置
```json
{
  "theme": {
    "border": {
      "width": 1,
      "radius": 4,
      "color": "#333333"
    }
  }
}
```

## 主题管理

### 列出所有主题
```bash
> /theme list
```

### 预览主题
```bash
> /theme preview dark
```

### 重置主题
```bash
> /theme reset
```

### 导出主题
```bash
> /theme export my-theme
```

### 导入主题
```bash
> /theme import my-theme.json
```

## 主题最佳实践

### 1. 选择合适的主题
- **编程工作**：使用深色主题
- **文档阅读**：使用浅色主题
- **长时间使用**：使用护眼主题

### 2. 自定义主题
- 保持足够的对比度
- 避免过于鲜艳的颜色
- 考虑色盲用户的需求

### 3. 主题测试
```bash
# 测试主题在不同环境下的效果
> /theme test
```

### 4. 主题备份
```bash
# 备份当前主题
> /theme backup
```

## 主题故障排除

### 主题不生效
1. 检查配置文件语法
2. 验证颜色值格式
3. 重启五彩代码

### 颜色显示异常
1. 检查颜色值是否有效
2. 确保对比度足够
3. 测试在不同终端下的效果

### 自定义主题问题
1. 验证JSON格式
2. 检查颜色属性名称
3. 使用内置主题作为参考

## 主题分享

### 导出主题文件
```bash
> /theme export my-theme
```
生成 `my-theme.json` 文件

### 分享主题
1. 将主题文件上传到GitHub
2. 在社区论坛分享
3. 提交到主题库

### 导入他人主题
```bash
> /theme import https://github.com/user/theme.json
```

## 主题开发

### 创建主题模板
```json
{
  "theme": {
    "name": "template",
    "version": "1.0.0",
    "description": "主题描述",
    "author": "作者名称",
    "colors": {
      // 颜色配置
    },
    "font": {
      // 字体配置
    },
    "spacing": {
      // 间距配置
    }
  }
}
```

### 主题验证
```bash
> /theme validate my-theme.json
```

### 主题测试
```bash
> /theme test my-theme
```

## 下一步

配置好主题后，您可以：

- [学习快捷键](./keyboard-shortcuts.md)
- [查看配置选项](./configuration.md)
- [探索实际示例](../examples/programming-tasks.md)
- [学习高级功能](../advanced/customization.md)
