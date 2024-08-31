
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});



LoginSchema.methods.generateAuthToken = async function(){
    try{
        console.log(this._id);
        const token = jwt.sign({_id:this._id.toString()},"mynameiskananimeetkananimeetananimeetananimeets");
        this.tokens= this.tokens.concat({token:token})
        await this.save();
        return token;

    }catch (error){
        res.send("the error parh" +error);
        console.log("the error parh" +error);

    }
}

const collection = new mongoose.model("user",LoginSchema);

module.exports = collection;
