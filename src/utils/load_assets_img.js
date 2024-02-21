// vite中解决动态获取图片地址的方案，web pack直接用require（）
export const getAssetURL = (Image) => {
  // 参数一： 相对路径
  // 参数二： 当前路径的URL
  return new URL(`../assets/img/${Image}`, import.meta.url).href
}