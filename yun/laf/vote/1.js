// 把金数据 2200 数据 拿到的写法
const FID = 'TM8uOr'
const getJinData = async() =>{
  let res = []
  let coint = 50
  let next = 0

  // while + 请求 40次是很恐怖的
  while(count == 50){
    let url = `https://jinshuju.net/api/v1/forms/${FID}/entries`
    if(next){
      url = `${url}?next=${next}`
    }
    
    const rawData = await fetch(url,{
      headers: {
        
      }
    })
    const data = await rawData.json()
    count = data.count
    res = res.concat(data.data)
  }
}