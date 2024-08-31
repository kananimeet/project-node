// const Sequelize = require('sequelize');

const mongoose = require('../util/database');

class Product{
    constructor(name,email,city){
        this.name = name;
        this.email = email;
        this.city = city;
    }

    save(){
        const db = mongoose();
        return db.collection('products')
        .insertOne(this)
        .then(result=>{console.log(result)})
        .catch(err=>{console.log(err)});
    }
}


module.exports = Product;


// const Product = sequelize.define('user',{

//     id:{
//         type:Sequelize.INTEGER,
//         primaryKey:true,
//         autoIncrement:true,
//         allowNull:false
//     },
//    // title:Sequelize.STRING,
//     name:
//     {
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     email:
//     {
//         type:Sequelize.STRING,
//         allowNull:false

//     },

//     city:
//     {
//         type:Sequelize.STRING,
//         allowNull:false

//     },

// });


// module.exports = Product;