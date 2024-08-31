//const http = require('http');
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const jwt = require('jsonwebtoken');
// const session =  require('express-session');


const Login = require('./util/login');

const mongoConnect = require('./util/database');

let methodOverride = require('method-override')

const app = express();



const mongoose =require('./model/pageModel');

const bodyParser = require('body-parser');

// app.use(session({
//     secret:'meetkanani'
// }))
app.use(bodyParser.json());

app.set('view engine', 'ejs');
 app.set('views','views');

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'public')));





const adminrouters = require('./routers/admin');
//const shoprouters = require('./routers/shop');

//const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({extended:false}));


app.use(adminrouters.routes);
//app.use(shoprouters);


// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });




app.use((req, res,next) => {
    res.status(404).send('page not found');
});


// const User = require('./model/sequelizes');

// User.sync()

// .then((result)=>{
//     console.log(result);
    
// })
// .catch((err) => {
//     console.log(err);
// });



// mongoConnect(client=>
//     {
//         console.log(client);
//         
//     });


//app.listen(3000);
const PORT = 5000;


//const routes = require('./routes');

//const server = http.createServer(routes);
    
app.listen(PORT,()=>{
    console.log("success listen on port" + PORT);
});