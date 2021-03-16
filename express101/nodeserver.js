
const http = require('http');


const server=http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'content-type':'text/html'});
    res.write('hello');
    res.end();
})

server.listen(3000);