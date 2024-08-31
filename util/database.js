const express = require('express');

// this is Mysql Database -------------


// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'node-js'
    
//   });
// module.exports = pool.promise(); 

//----------------------------------------------------------------------------------



// This is Sequelize database------------------------------------------------------

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-js','root','',
//   {
//   dialect:'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;



//--------------------------------------------------------------------------------

// mongoDb database

const app = express();



const mongoose = require('mongoose');

    PORT = 5000;

    DB_URL = 'mongodb://localhost:27017/webtut';
    

    mongoose.connect(DB_URL);
    const con = mongoose.connection;

con.once('open',()=>{

    console.log('success database connection');

})
con.on('error',()=>{
    console.log('not connected');
});



