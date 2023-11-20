const { log } = require('console')
const cheerio = require('cheerio');
const https = require('https')
const fs = require('fs')

https.get('https://movie.douban.com/top250',res => {
  let html = ''
    res.on('data',(chunk) => { // 监听数据的读取
      // console.log(chunk + '');
      html += chunk
    })

    res.on('end',() => { // 监听数据读取完成
      const $ = cheerio.load(html)
      let result = []
      $('li .item').each(function(){
        const title = $('.title',this).text()
        const rate = $('.rating_num',this).text()
        const pic = $('.pic img',this).attr('src')
        result.push({
          title,
          rate,
          pic
        })
        // console.log(title,rate,pic);
      })

      // console.log(result);
      fs.writeFile('./list.json',JSON.stringify(result),err => {
        if(err) throw err
        console.log('文件写入成功');
      })
      
    })
})