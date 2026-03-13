# KXO205 网页设计作业说明
# KXO205 Web Design Assignment Documentation

---

## 📋 作业信息 / Assignment Information

| 信息 / Information | 详情 / Details |
|-----------------|---------------|
| **课程代码 / Course Code** | KXO205 |
| **项目名称 / Project Name** | Starry Sky Expeditions (星空探险) |
| **项目类型 / Project Type** | 电子商务网站 / E-commerce Website |
| **提交日期 / Submission Date** | 2023-11-09 |
| **GitHub 仓库 / GitHub Repository** | https://github.com/Moshenluo/kxo205-ecommerce-website |

---

## 👥 团队成员 / Team Members

| 姓名 / Name | 学号 / Student ID | 负责模块 / Responsible Module |
|-----------|-----------------|-----------------------------|
| Yijie Tang | - | 首页设计、视频背景 |
| Yiyan He | - | 产品页面、购物车功能 |
| Bowen Shao | - | 登录注册、表单验证 |
| Mohan Yang | - | CSS 样式、响应式设计 |

---

## 🎯 作业要求与实现 / Assignment Requirements & Implementation

### ✅ 必做要求 / Required Requirements

| 要求 / Requirement | 状态 / Status | 实现说明 / Implementation Details |
|------------------|-------------|--------------------------------|
| **多页面设计**<br>Multi-page Design | ✅ 完成 | 10 个 HTML 页面 (首页、产品页 x6、登录、注册、产品列表) |
| **CSS 样式**<br>CSS Styling | ✅ 完成 | 5 个 CSS 文件，统一配色方案，产品卡片设计 |
| **JavaScript 交互**<br>JavaScript Interactivity | ✅ 完成 | 购物车功能、产品弹窗、搜索功能 |
| **图片资源**<br>Image Assets | ✅ 完成 | Logo、产品图、背景图、轮播图 |
| **表单设计**<br>Form Design | ✅ 完成 | 登录表单、注册表单 |

### ⭐ 额外功能 / Extra Features

| 功能 / Feature | 说明 / Description |
|--------------|-------------------|
| 🎬 **视频背景** | 首页嵌入 MP4 视频背景，增强视觉效果 |
| 🛒 **购物车系统** | JavaScript 实现购物车计数和添加功能 |
| 🔍 **搜索功能** | 产品搜索框，支持关键词搜索 |
| 📦 **产品展示** | 6 款产品详细信息，含价格和产品描述 |
| 🎨 **弹窗效果** | 产品点击弹出详细信息 |
| 🔄 **轮播图** | 首页图片轮播展示 |

---

## 📁 项目结构 / Project Structure

```
kxo205-ecommerce-website/
│
├── 📄 HTML 文件 / HTML Files
│   ├── index.html          # 首页 / Home Page
│   ├── product.html        # 产品列表 / Product List
│   ├── product1.html       # 产品详情 1 / Product Detail 1
│   ├── product2.html       # 产品详情 2 / Product Detail 2
│   ├── product3.html       # 产品详情 3 / Product Detail 3
│   ├── product4.html       # 产品详情 4 / Product Detail 4
│   ├── product5.html       # 产品详情 5 / Product Detail 5
│   ├── product6.html       # 产品详情 6 / Product Detail 6
│   ├── login.html          # 登录页面 / Login Page
│   └── register.html       # 注册页面 / Register Page
│
├── 🎨 CSS 文件 / CSS Files
│   ├── index.css           # 首页样式 / Home Styles
│   ├── product.css         # 产品页样式 / Product Styles
│   ├── login.css           # 登录页样式 / Login Styles
│   └── register.css        # 注册页样式 / Register Styles
│
├── ⚙️ JavaScript 文件 / JavaScript Files
│   ├── index.js            # 首页脚本 / Home Scripts
│   ├── product.js          # 产品页脚本 / Product Scripts
│   ├── login.js            # 登录脚本 / Login Scripts
│   └── register.js         # 注册脚本 / Register Scripts
│
├── 🖼️ 图片资源 / Image Assets
│   ├── image/
│   │   ├── logo/          # 标志 / Logo
│   │   ├── product/       # 产品图片 / Product Images
│   │   ├── background/    # 背景图片 / Background Images
│   │   └── Skypicture/    # 星空图片/视频 / Sky Pictures/Videos
│   └── images/            # 其他图片 / Other Images
│
└── 📚 文档 / Documentation
    ├── README.md          # 项目说明 / Project Documentation
    ├── ASSIGNMENT.md      # 作业说明 / Assignment Documentation
    └── LICENSE            # 许可证 / License
```

---

## 🎨 设计亮点 / Design Highlights

### 1. 首页设计 / Home Page Design

```
┌─────────────────────────────────────────────────────┐
│  🔭 Logo    Starry Sky Expeditions    导航菜单      │
│  [Product] [About us] [Home Page] [Login in] 🛒    │
├─────────────────────────────────────────────────────┤
│                                                     │
│              🎬 视频背景区域                         │
│              Video Background Area                  │
│                                                     │
├─────────────────────────────────────────────────────┤
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐      │
│  │产品 1│  │产品 2│  │产品 3│  │产品 4│  │产品 5│      │
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘      │
├─────────────────────────────────────────────────────┤
│  [搜索框]  About us  More Service  ©2023 版权信息   │
└─────────────────────────────────────────────────────┘
```

### 2. 配色方案 / Color Scheme

| 颜色 / Color | 用途 / Usage | 色值 / Color Code |
|------------|------------|-----------------|
| 🔵 主色调 / Primary | 导航栏、按钮 | #2c3e50 |
| ⚪ 背景色 / Background | 页面背景 | #ffffff |
| 🔘 文字色 / Text | 主要文字 | #333333 |
| 🟠 强调色 / Accent | 价格、促销 | #e74c3c |

### 3. 字体设计 / Typography

| 元素 / Element | 字体 / Font | 大小 / Size |
|--------------|-----------|-----------|
| 标题 / Headings | Arial, sans-serif | 24-36px |
| 正文 / Body Text | Arial, sans-serif | 14-16px |
| 价格 / Price | Arial, bold | 18px |

---

## 🔧 技术实现 / Technical Implementation

### HTML5 特性 / HTML5 Features

```html
<!-- 语义化标签 / Semantic Tags -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>

<!-- 多媒体 / Multimedia -->
<video autoplay muted>...</video>
<img src="..." alt="...">

<!-- 表单 / Forms -->
<form>
  <input type="email" required>
  <input type="password" required>
</form>
```

### CSS3 特性 / CSS3 Features

```css
/* 弹性布局 / Flexbox */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 过渡动画 / Transitions */
.product-card {
  transition: transform 0.3s ease;
}
.product-card:hover {
  transform: scale(1.05);
}

/* 媒体查询 / Media Queries */
@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
  }
}
```

### JavaScript 功能 / JavaScript Features

```javascript
// 购物车功能 / Shopping Cart
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}

// 产品弹窗 / Product Popup
function showPopup(productId) {
  document.getElementById(productId + '-popup').style.display = 'block';
}

// 搜索功能 / Search Function
function searchProducts() {
  let keyword = document.querySelector('.search-box').value;
  // 过滤产品逻辑
}
```

---

## 📊 页面统计 / Page Statistics

| 指标 / Metric | 数量 / Count |
|-------------|------------|
| **HTML 页面** | 10 个 |
| **CSS 文件** | 4 个 |
| **JavaScript 文件** | 4 个 |
| **产品图片** | 5+ 个 |
| **代码总行数** | ~1,895 行 |
| **总文件大小** | ~35 MB |

---

## 🚀 如何运行项目 / How to Run Project

### 方法 1：直接打开 / Method 1: Open Directly

```bash
# 1. 下载项目 / Download project
git clone https://github.com/Moshenluo/kxo205-ecommerce-website.git

# 2. 进入项目目录 / Enter project directory
cd kxo205-ecommerce-website

# 3. 双击打开 index.html
# Double click to open index.html
```

### 方法 2：本地服务器 / Method 2: Local Server

```bash
# 使用 Python 启动服务器
# Start server with Python
python3 -m http.server 8000

# 访问 http://localhost:8000
# Visit http://localhost:8000
```

---

## 📸 演示截图指南 / Screenshot Guide

### 建议截图页面 / Recommended Pages to Screenshot

| 序号 / No. | 页面 / Page | 说明 / Description |
|----------|-----------|------------------|
| 1 | 首页 / Home Page | 展示视频背景和产品列表 |
| 2 | 产品列表 / Product List | 展示所有产品 |
| 3 | 产品详情 / Product Detail | 展示单个产品弹窗 |
| 4 | 登录页面 / Login Page | 展示登录表单 |
| 5 | 注册页面 / Register Page | 展示注册表单 |
| 6 | 购物车 / Shopping Cart | 展示购物车功能 |

### 截图方法 / Screenshot Method

**Windows:**
```
Win + Shift + S  (截图工具)
```

**Mac:**
```
Cmd + Shift + 4  (选择区域截图)
```

**浏览器开发者工具：**
```
F12 → 切换设备工具栏 → 选择设备 → 截图
```

---

## ✅ 自查清单 / Self-Check Checklist

### 功能检查 / Functionality Check

- [ ] 所有页面可以正常访问
- [ ] 所有链接可以正常跳转
- [ ] 图片可以正常显示
- [ ] 视频可以正常播放
- [ ] 购物车功能正常工作
- [ ] 搜索功能正常工作
- [ ] 表单可以提交

### 代码检查 / Code Check

- [ ] HTML 语法正确
- [ ] CSS 样式正常
- [ ] JavaScript 无错误
- [ ] 代码有适当注释
- [ ] 文件命名规范

### 设计检查 / Design Check

- [ ] 配色协调
- [ ] 布局合理
- [ ] 字体清晰
- [ ] 图片质量良好
- [ ] 响应式适配（如有）

---

## 📝 使用说明 / User Instructions

### 浏览产品 / Browse Products

1. 打开首页 / Open home page (`index.html`)
2. 点击导航栏"Product" / Click "Product" in navigation
3. 浏览产品列表 / Browse product list
4. 点击产品查看详情 / Click product to view details

### 添加到购物车 / Add to Cart

1. 在产品页面点击产品 / Click product on product page
2. 产品弹窗显示详细信息 / Product popup shows details
3. 点击"Add to Cart"（如实现）/ Click "Add to Cart"
4. 右上角购物车数字增加 / Cart count increases

### 用户登录 / User Login

1. 点击"Login in" / Click "Login in"
2. 输入邮箱和密码 / Enter email and password
3. 点击登录 / Click login

### 用户注册 / User Registration

1. 在登录页点击"Register" / Click "Register" on login page
2. 填写注册信息 / Fill in registration info
3. 点击注册 / Click register

---

## 🎓 学习成果 / Learning Outcomes

通过这个项目，我们学会了：

Through this project, we learned:

| 技能 / Skill | 掌握程度 / Proficiency |
|------------|---------------------|
| **HTML5 结构** | ⭐⭐⭐⭐⭐ 精通 |
| **CSS3 样式** | ⭐⭐⭐⭐⭐ 精通 |
| **JavaScript 交互** | ⭐⭐⭐⭐ 熟练 |
| **Git 版本控制** | ⭐⭐⭐⭐ 熟练 |
| **团队协作** | ⭐⭐⭐⭐⭐ 精通 |
| **项目管理** | ⭐⭐⭐⭐ 熟练 |

---

## 📧 联系方式 / Contact

| 平台 / Platform | 链接 / Link |
|---------------|-----------|
| **GitHub** | https://github.com/Moshenluo |
| **项目仓库 / Project Repo** | https://github.com/Moshenluo/kxo205-ecommerce-website |

---

## 🙏 致谢 / Acknowledgments

- **产品图片** 来自 Swarovski Optik
- **Product images** from Swarovski Optik
- **视频素材** 用于演示目的
- **Video materials** for demonstration purposes
- **课程作业** KXO205 网页设计
- **Course Assignment** KXO205 Web Design

---

**感谢查阅！/ Thank you for reviewing!**

---

*最后更新 / Last updated: 2026-03-13*
