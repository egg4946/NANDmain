// @ts-check
import { defineConfig } from "astro/config";

// 公開先: http://egghifuazu.me/NANDmain/
// 公開URLが変わったら site / base をここで変更する
export default defineConfig({
  site: "http://egghifuazu.me",
  base: "/NANDmain",
  trailingSlash: "ignore",
});
