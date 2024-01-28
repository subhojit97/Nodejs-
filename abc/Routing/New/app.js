const express=require('express');

const app=express();
const bodyParser=require('body-parser');
app.set('view engine','ejs')
app.use('/assets',express.static('assets'))

const urlencoderParser=bodyParser.urlencoded({extended:false})

// app.use('/assets',(req,res,next)=>{
//     console.log(req.url);
// next();
// })
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')

// })
app.get('/',(req,res)=>{
    res.render('index')

})
// app.get('/about',(req,res)=>{
//     res.send("about Page")

// })
app.get('/about',(req,res)=>{
    console.log(req.query);
    res.render('about',{qs:req.query})

})

app.post('/about',urlencoderParser,(req,res)=>{
    console.log(req.body);
    res.render('about-success',{data:req.body})

})
// app.get('/profile/:id',(req,res)=>{
//     res.send("profile id is: " + req.params.id )

// })
app.get('/profile/:name',(req,res)=>{
    const data={age:30,job:'developer' ,friends:["ar","kl","gf"]}
    res.render('profile',{person:req.params.name,data})

})
app.listen(3000);