const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application/json'})
  const person={
    name:'subhojit',
    email:'subhojit1997pandit@gmail.com',
    job:'designer'
  };

  res.end(JSON.stringify(person));
    
})

server.listen(3000,'127.0.0.1');