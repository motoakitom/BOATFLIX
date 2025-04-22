# BOATERS風ボートレース情報サイト雛形

このプロジェクトは、boaters-boatrace.com風のボートレース情報サイトを、無料枠中心の最新技術で模倣するための雛形です。

## ディレクトリ構成

```
boatrace-app/
├── scraper/              # Render用PythonスクレイピングBot
│   ├── main.py
│   ├── requirements.txt
│   └── .render.yaml
├── web/                  # Next.jsフロントエンド
│   ├── pages/
│   ├── components/
│   ├── lib/
│   ├── package.json
│   └── .env.example
├── db/                   # Supabase用SQL（初期化用）
│   └── schema.sql
└── README.md
```

## セットアップ手順

### 1. SupabaseでDB作成
- [Supabase公式](https://supabase.com/)で無料プロジェクトを作成
- db/schema.sqlの内容でテーブルを作成
- プロジェクトのURLとanonキーを控える

### 2. RenderでスクレイピングBotをデプロイ
- Renderで新規Webサービス作成
- scraper/配下をリポジトリにpushし、.render.yamlに従ってデプロイ
- 環境変数にSUPABASE_URL/SUPABASE_KEYを設定
- main.pyが定期実行されるようにcron設定も可能

### 3. Next.js（Vercel）でWebサイト公開
- web/配下で`npm install`→`npm run dev`でローカル確認
- Vercelで新規プロジェクト作成し、web/配下をデプロイ
- .env.exampleを.envにコピーし、SupabaseのURL/KEYを設定

### 4. 動作確認
- /racesページでレース一覧が表示されればOK

---

## 拡張案
- レース詳細ページ追加
- デザイン強化
- 過去データCSVの自動取り込み
- お問い合わせ・利用規約ページ追加

---

ご不明点や追加要望があればご相談ください。
