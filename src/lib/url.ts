/** base（/NANDmain）を付けたサイト内URLを返す */
export const withBase = (path = "") => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
};
