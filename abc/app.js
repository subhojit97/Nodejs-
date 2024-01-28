// const fs=require('fs');

// const file=fs.readFileSync('read-me.txt','utf-8');

// fs.writeFileSync('write.txt',file)


const fs=require('fs');

// const file=fs.readFile('read-me.txt','utf-8',function(err,data){
//     fs.writeFile('write.txt1',data,function(err){
//         if(err)
//         console.log(err)
//     })
// });

//fs.writeFileSync('write.txt',file)

// fs.unlink('write.txt1',(err)=>{
//     console.log(err);
// })

//fs.mkdirSync('my-folder')
// fs.rmdirSync('my-folder')

// fs.mkdir('my-folder',()=>{
//     fs.readFile('read-me.txt','utf-8',(err,data)=>{
//         fs.writeFile('./my-folder/write-me.txt',data,()=>{

//         })
//     })
// })

fs.unlink('./my-folder/write-me.txt',()=>
{
    fs.rmdir('my-folder',(err)=>{
        console.log(err);
    })
})




