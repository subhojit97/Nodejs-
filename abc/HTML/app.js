const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    const readStream=fs.createReadStream(__dirname+'/index.html','utf-8');

readStream.pipe(res)
    
})

server.listen(3000,'127.0.0.1');