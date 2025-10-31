# Kael Landing Page

Kael 项目的官方 Landing Page，基于 Next.js 16 构建的现代化 Web 应用。

## 在线访问

- 生产环境：[https://kael.im](https://kael.im)
- 备用域名：[https://www.kael.im](https://www.kael.im)

## 仓库地址

- GitHub：[https://github.com/unispark-inc/kael-landing-page](https://github.com/unispark-inc/kael-landing-page)

## 技术栈

- **框架**: [Next.js 16](https://nextjs.org/) - React 服务端渲染框架
- **UI 库**: [React 19](https://react.dev/) - 用户界面构建库
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集
- **部署**: [Vercel](https://vercel.com/) - 现代化部署平台

## 快速开始

### 环境要求

- Node.js 20.x 或更高版本
- npm 或 yarn 或 pnpm 或 bun

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

### 本地开发

启动开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看页面效果。

修改 `app/page.tsx` 文件即可实时预览更改。

### 构建生产版本

```bash
npm run build
npm run start
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
kael-landing-page/
├── app/                    # Next.js App Router 目录
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页组件
│   └── globals.css        # 全局样式
├── public/                # 静态资源目录
├── next.config.ts         # Next.js 配置文件
├── tailwind.config.ts     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖配置
```

## 部署

本项目通过 Vercel 平台进行自动化部署：

- **生产域名**: [https://kael.im](https://kael.im)
- **Vercel 项目**: [https://vercel.com/unispark/kael-landing-page](https://vercel.com/unispark/kael-landing-page)
- **GitHub 仓库**: [https://github.com/unispark-inc/kael-landing-page](https://github.com/unispark-inc/kael-landing-page)

### 自动部署流程

每次推送代码到 `main` 分支，Vercel 会自动触发构建和部署流程，并自动更新到生产环境。

### 手动部署

如需手动部署新项目：

1. Fork 或克隆本仓库
2. 在 [Vercel](https://vercel.com/new) 导入你的仓库
3. Vercel 会自动检测 Next.js 项目并配置构建设置
4. 配置自定义域名（如需要）
5. 点击 "Deploy" 完成部署

## 相关资源

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 特性和 API
- [Next.js 教程](https://nextjs.org/learn) - 交互式 Next.js 教程
- [Tailwind CSS 文档](https://tailwindcss.com/docs) - Tailwind CSS 使用指南
- [Vercel 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) - Next.js 部署详细说明

## 开发团队

Unispark Team

## 许可证

本项目为私有项目。
