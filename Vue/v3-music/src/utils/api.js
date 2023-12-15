import http from '@/utils/http';
// 模块,前后端的 交流 数据模块的封装
// localhost:3000/banner // 轮播图 axios get
// 轮播图
export async function getBanner(){
  // get 统一 http 
  const { banners } = await http.get('/banner',{type:1})
  return banners
}

export async function getSearchSuggest(keywords){
  // get 统一 http 
  const { result } = await http.get('/search',{keywords})
  return result
}