// @ts-check
import { defineConfig } from "astro/config";

// 本番: Vercel（https://nandmain.vercel.app/）はルート直下で配信する。
// http://egghifuazu.me/NANDmain/ に置くときは `npm run build:nandmain`（--base /NANDmain）でビルドする。
export default defineConfig({
  site: "https://nandmain.vercel.app",
  trailingSlash: "ignore",
});
