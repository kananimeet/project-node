const express = require('express');
const bcrypt = require('bcrypt');
let multer = require('multer');//use for upload images
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');
// const auth = require('../middleware/auth');
let pageModel = require('../model/pageModel');
// const session =  require('express-session');

let collection = require('../util/login');

const app = express();

// app.use(session({
//     secret:'my secret',
//     resave:false,
//     saveUninitialized:false
// }))
//const Product = require('../model/sequelizes');

//const products = [];

let storage = multer.diskStorage({
    destination:'public/images/',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

let upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' ){
            cb(null,true)
        }
        else{
            cb(null,false)
            {
                return cb(new Error('Only jpg,jpeg,and png Image Allow'));
            }
        }
    }
    
})


router.get('/',(req,res,next) => {
    res.render('login');
});


router.get('/register',(req,res,body) => {
    res.render('register');
});

// app.use(express.json());

// router.get('/demo',async(req,res) => {
//     try{
//         const ias =await collection.find();
        
//         res.send(ias);
//     }
//     catch(err){
//         res.send(err);
//     }
   

// });

// router.patch('/demos/:id',async(req,res,body) => {
//     try{
//         const _id = req.params.id;
//     const host = await collection.findByIdAndUpdate(_id,req.body,{new:true});
//     console.log(host);
//     res.send(host);
//     }
//     catch(err) {
//         res.send(err);
//     }
    

// });

//    router.post('/insert',(req,res)=>{

//     const data = new collection(req.body);
//     data.save();
//     res.send(data);
//     console.log(data);

//    }) 


// router.delete('/demoss/:id',async(req,res,body) => {
//     try{
//         const _id = req.params.id;
//     const host = await collection.findByIdAndDelete(_id);
//     console.log(host);
//     res.send(host);
//     }
//     catch(err) {
//         res.send(err);
//     }
    

// });


// database insert name and password


const postReg = require('../controller/register');

router.post('/data',postReg.postRegister);

// Login user

const postLoginuser = require('../controller/login');
router.post('/loginuser',postLoginuser.postLogin);

// show data

router.get('/showdata',(req,res,next)=> {

    pageModel.find({})
    .then((x)=>{
      
        //res.render(path.join(__dirname, '../', 'views' ,'shop.ejs'));
       res.render('../views/shop.ejs',{x})
    }).then((product)=>{
        res.render('../views/product.ejs',{product})
    })
    .catch((y)=>{
     console.log(y)
    });
    });



    //toke verify

    const secretKey = "secretKey";
    router.post('/logins',(req,res,body)=>{
        
            const user = {
            id:1,
            username:"kananimeet",
            email:"kananimeet@gmail.com"
        };
        jwt.sign({user},secretKey,{expiresIn:"300s"},(err,token)=>{
            res.json(token);
        });

    })


    router.post('/profile',verifyToken,(req,res)=>{

        jwt.verify(req.token,secretKey,(err,authData)=>{
            if(err){
                res.send({message:"invalid token"})
            }else{
                // res.redirect('/showdata');
               res.json({message:"Access granted",authData}); 
            }
        });
    });


    function verifyToken(req,res,next){
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== "undefined"){

            const bearer = bearerHeader.split(" ");
            const token = bearer[1];
            req.token = token;
            next();

        }else{
            res.send({msg:"token is not valid"});
        }
    }

const addProduct = require('../controller/product');
const bodyParser = require('body-parser');

router.get('/add',addProduct.getaddproduct);

router.post('/add-data',upload.single('image'),async(req,res,body)=>{

    const user = {
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        image:req.file.filename,
    
        }

    const existings = await pageModel.findOne({email:user.email});
    if(existings){
        res.send("not insert email");
    }
    else{
    const userdatas = await pageModel.insertMany(user);
    res.redirect('/showdata');
    console.log(userdatas);
    }

});

router.get('/product',(req,res,next)=> {
       
    pageModel.find({})
        .then((product)=>{
        res.render('../views/product.ejs',{product})
        })
        .catch((y)=>{
         console.log(y)
        });
        });


router.get('/edit-product/:id', (req, res,next)=>{
     pageModel.findOne({email:req.params.id})
    .then((x)=>{
        res.render('../views/edit.ejs',{x})
    })

    .catch((y)=>{console.log(y)});

});

router.put('/edit-product/:id',upload.single('image'),(req, res,next)=>{
    if(req.file)
        {

            pageModel.updateOne({email:req.params.id},{$set:{

                name:req.body.name,
                email:req.body.email,
                city:req.body.city,
                image:req.file.filename
    
        }})
        
    .then((x)=>{
        res.redirect('/showdata');
    });
 }
    else{
        pageModel.updateOne({email:req.params.id},{$set:{
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        
        }})

.then((x)=>{
res.redirect('/showdata');
});

 }
});

router.delete('/delete-product/:id',(req,res,next)=>{

    pageModel.deleteOne({email:req.params.id})
    .then((x)=>{
        res.redirect('/showdata');
    });

})



// const jwt = require('jsonwebtoken');


// const createToken = async () => {
//     const token = await jwt.sign({_id:"668ca8bb1c15a4257858aef7"},"mynameiskananimeetmynameiskananimeet");
//     console.log(token);

// }

// createToken();


exports.routes = router;
//exports.products = products;
