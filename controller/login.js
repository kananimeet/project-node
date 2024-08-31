const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
let pageModel = require('../model/pageModel');
let collection = require('../util/login');


exports.postLogin=(async (req,res,next)=>
    {
       
        try{
            const check = await collection.findOne({email:req.body.email})
            if(!check){
                res.send("email cannot found");
                }
    
            const token = await check.generateAuthToken();
            console.log(token);
                
            
            const isPassword = await bcrypt.compare(req.body.password,check.password);
            
            if(isPassword){
            // req.session.user_id = isPassword._id;
            res.redirect("/showdata"); 
            }
        if(!isPassword)
            {
                req.send("wrong password");
        }
    }
        catch{
            
            res.send("wrong Details");
        }
    
        
});
