const http = require("http");

const server = http.createServer((req, res)=>{
  if(req.url === '/'){ 
    res.end("welcome to our home page")
    return;
  }
  if(req.url === '/about'){
    res.write("welcome to our about page")
    res.end();
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
})

server.listen(3000)

// go to http://localhost:3000/ in browser.
