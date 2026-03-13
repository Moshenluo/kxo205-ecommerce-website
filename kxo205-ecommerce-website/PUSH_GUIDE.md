# 🚀 推送到 GitHub 的指南
# Guide to Push to GitHub

---

## ⚠️ 需要 GitHub 认证 / GitHub Authentication Required

GitHub CLI 需要登录认证才能推送代码。

---

## 方法 1：使用 GitHub CLI 认证推送（推荐）
## Method 1: Using GitHub CLI Auth (Recommended)

### 步骤 1：登录 GitHub
### Step 1: Login to GitHub

```bash
gh auth login
```

按照提示操作：
Follow the prompts:

1. 选择 `GitHub.com`
2. 选择 `HTTPS`
3. 选择 `Login with a web browser`
4. 复制验证码并打开浏览器
5. 在浏览器中授权
6. 返回终端继续

### 步骤 2：创建仓库并推送
### Step 2: Create Repo and Push

```bash
cd /home/gem/workspace/github-upload/kxo205-ecommerce-website

gh repo create kxo205-ecommerce-website --public --source=. --push --description "KXO205 Web Design Assignment - Starry Sky Expeditions E-commerce Website"
```

---

## 方法 2：使用 Git 远程仓库推送
## Method 2: Using Git Remote Push

### 步骤 1：在 GitHub 上创建仓库
### Step 1: Create Repository on GitHub

1. 打开 https://github.com/new
2. 仓库名称 / Repository name: `kxo205-ecommerce-website`
3. 描述 / Description: `KXO205 Web Design Assignment - Starry Sky Expeditions E-commerce Website`
4. 选择 **Public**（公开）
5. **不要** 勾选 "Add a README file"
6. 点击 **Create repository**

### 步骤 2：添加远程仓库并推送
### Step 2: Add Remote and Push

```bash
cd /home/gem/workspace/github-upload/kxo205-ecommerce-website

# 添加远程仓库 / Add remote
git remote add origin https://github.com/Moshenluo/kxo205-ecommerce-website.git

# 推送代码 / Push code
git push -u origin main
```

### 如果需要强制推送：
### If Force Push Needed:

```bash
git push -u origin main --force
```

---

## 方法 3：使用 GitHub Desktop（最简单）
## Method 3: Using GitHub Desktop (Easiest)

### 步骤 1：下载 GitHub Desktop
### Step 1: Download GitHub Desktop

https://desktop.github.com/

### 步骤 2：添加本地仓库
### Step 2: Add Local Repository

1. 打开 GitHub Desktop
2. 登录你的 GitHub 账号
3. File → Add Local Repository
4. 选择文件夹：`/home/gem/workspace/github-upload/kxo205-ecommerce-website`
5. 点击 **Publish repository**
6. 填写名称和描述
7. 点击 **Publish**

---

## ✅ 推送成功后验证 / Verify After Successful Push

### 访问你的仓库
### Visit Your Repository

```
https://github.com/Moshenluo/kxo205-ecommerce-website
```

### 检查内容
### Check Contents

- [ ] 所有 HTML 文件已上传
- [ ] 所有 CSS 文件已上传
- [ ] 所有 JS 文件已上传
- [ ] 图片资源已上传
- [ ] README.md 已上传
- [ ] ASSIGNMENT.md 已上传
- [ ] LICENSE 已上传

---

## 🎯 快速命令（复制粘贴）
## Quick Commands (Copy and Paste)

### 完整推送流程（方法 2）
### Complete Push Process (Method 2)

```bash
# 1. 进入项目目录
cd /home/gem/workspace/github-upload/kxo205-ecommerce-website

# 2. 添加远程仓库（在 GitHub 创建仓库后）
git remote add origin https://github.com/Moshenluo/kxo205-ecommerce-website.git

# 3. 推送代码
git push -u origin main

# 4. 验证
git status
```

---

## 📸 推送成功后的截图
## Screenshot After Successful Push

推送成功后，访问你的 GitHub 仓库并截图：

After pushing successfully, visit your GitHub repo and take a screenshot:

```
https://github.com/Moshenluo/kxo205-ecommerce-website
```

---

## 🆘 常见问题
## FAQ

### 问题 1：提示 "repository already exists"
### Problem 1: "repository already exists"

**解决方案：**
```bash
# 删除远程仓库（如果已存在）
git remote remove origin

# 重新添加
git remote add origin https://github.com/Moshenluo/kxo205-ecommerce-website.git

# 推送
git push -u origin main --force
```

### 问题 2：认证失败
### Problem 2: Authentication Failed

**解决方案：**
- 检查 GitHub 账号密码
- 使用 Personal Access Token 代替密码
- 生成 Token：https://github.com/settings/tokens

### 问题 3：推送被拒绝
### Problem 3: Push Rejected

**解决方案：**
```bash
# 强制推送
git push -u origin main --force

# 或者先拉取再推送
git pull origin main --rebase
git push -u origin main
```

---

## 📞 需要帮助？
## Need Help?

如果遇到问题，请告诉我具体的错误信息！

If you encounter any problems, please tell me the specific error message!

---

*最后更新 / Last updated: 2026-03-13*
