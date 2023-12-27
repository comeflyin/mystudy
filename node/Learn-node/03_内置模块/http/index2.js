const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { // req: 前端请求的信息; res: 后端返回的信息
  res.setHeader('Content-Type', 'application/json','charset=utf-8');
  if(req.url.startsWith('/movie')){
    const data = fs.readFileSync('./data.json','utf8')
    res.end(data);
  }
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
})