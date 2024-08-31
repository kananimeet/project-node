const bcrypt = require('bcrypt');


const path = require('path');
const jwt = require('jsonwebtoken');

let pageModel = require('../model/pageModel');

const secretKey = "secretKey";


let collection = require('../util/login');

exports.postRegister=(async(req,res,next) => {
        
        const datas = new collection
        ({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password
        })
        
    

        const existing = await collection.findOne({email:datas.email});
        
        if(existing) {
            res.send("user already exists.Please choose a different email");
        }else{
            
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(datas.password, saltRounds);
            datas.password = hashedPassword;
    
        const userdata = await datas.save();
    
        // token create
        console.log("the success part"+ datas);

        


        const token = await datas.generateAuthToken();
        console.log(token);
            
        
        res.redirect('/');
        console.log(userdata);
    
        }
       
    });
    