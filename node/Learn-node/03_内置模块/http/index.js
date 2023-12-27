const http = require('http');

const server = http.createServer((req, res) => { // req: 前端请求的信息; res: 后端返回的信息
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  console.log(req.url,req.method);
  const{url} = req;
  const query = Object.fromEntries(new URL(url,'http://localhost').searchParams)
  console.log(query);

  if(url === '/home'){
    res.end('<h1>home</h1>');
  }else if(url.startsWith('/detail')){
    if(query.id == 1){
      res.end( `<h1>Hello detail 1</h1>`);
    }else if(query.id == 2){
      res.end( `<h1>Hello detail 2</h1>`);
    }
    
  }else{
    res.end('<h1>404 Not Found</h1>');
  }

  
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
})