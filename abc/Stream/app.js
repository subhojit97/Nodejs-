const http=require('http');
const fs=require('fs');

// const readStream=fs.createReadStream(__dirname+'/read-me.txt','utf-8');
// const writeStream=fs.createWriteStream(__dirname+'/write-me.txt')

// readStream.on('data',(chunk)=>{
//     console.log('new data recieved');
//     console.log(chunk)
//     writeStream.write(chunk);
// })

// readStream.pipe(writeStream)

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'})
    const readStream=fs.createReadStream(__dirname+'/read-me.txt','utf-8');

readStream.pipe(res)
    
})

server.listen(3000,'127.0.0.1');