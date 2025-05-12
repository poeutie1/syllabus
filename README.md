This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Confidence Calibration（反省ツール）

## Live Demo

https://syllabus-gold.vercel.app/

## 概要

タスクに対する「予測自信度」と「実績」を記録して、自己認識のズレを可視化・改善するツールです。

## 主な機能

- タスク登録：項目名＋予測自信度（％）
- 実績入力：実際の結果（％）
- グラフ表示：予測 vs 実績 を散布図で可視化
- アラート：平均誤差が閾値を超えたら通知

## 技術スタック

- フロントエンド：Next.js, React, Tailwind CSS, Recharts
- ストレージ：ブラウザ localStorage
- 言語：TypeScript

## セットアップ方法

```bash
git clone https://github.com/<あなたのユーザー名>/confidence-calibration.git
cd confidence-calibration
npm install
npm run dev
```
