const express=require('express');
const app=express();
const todoController=require('./controllers/todoController')
app.set('view engine','ejs');

app.use(express.static('./public'));

//controller
todoController(app)
app.listen(3000);

console.log('you are listening to port 3000');