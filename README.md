# NAND 公式サイト

南山大学 学生エンジニア団体 NAND のWebサイトです。[Astro](https://astro.build/) で作っています。

## 開発の始め方

Node.js 22.23 以上（24 推奨）が必要です。

```bash
npm install
npm run dev
```

http://localhost:4321/NANDmain/ を開くとプレビューできます（URLの末尾に `/NANDmain/` が必要です）。

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 型チェックをして `dist/` に本番用ファイルを出力 |
| `npm run preview` | ビルド結果をローカルで確認 |

## 公開

`npm run build` で作られた `dist/` の中身を、`http://egghifuazu.me/NANDmain/` に配置します。
公開先のURLが変わったら [astro.config.mjs](astro.config.mjs) の `site` と `base` を変更してください。

## フォルダ構成

```
src/
  pages/            ページ（index.astro がトップ、history/[id].astro が活動記録の個別ページ）
  layouts/          共通の <head>・ヘッダー・フッター
  components/       セクションごとの部品（Hero, About, Activities, History, Join, Faq, Contact）
  content/history/  「過去の活動」の記事（Markdown）
  assets/           ページで使う画像（ビルド時に WebP へ自動で軽量化）
  styles/global.css サイト全体のCSS
public/assets/      そのまま配信するファイル（favicon、OGP画像）
```

## 「過去の活動」に記事を追加する

1. [src/content/history/_template.md](src/content/history/_template.md) をコピーする
2. `2026-10-lt-night.md` のような名前で同じフォルダに保存する（ファイル名がURLになります）
3. 先頭の `title` や `date` と本文を書き換える

トップページの「過去の活動」に新しい順で並び、`/NANDmain/history/ファイル名/` に個別ページができます。
`_` で始まるファイルと `draft: true` の記事はサイトに載りません。
