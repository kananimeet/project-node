// const db = require('../util/database');

// module.exports = class Product{
//     constructor(id,name,email,city){
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.city = city;
//     }

//     save(){
//       return db.execute('INSERT INTO products(name,email,city) VALUES(?,?,?)',
//         [this.name,this.email,this.city]
//        );
//     }

//    static deleteById(id){
//     db.execute('DELETE FROM products WHERE id')
//    }

//     static fetchAll(){
//        return db.execute('SELECT * FROM products');
           
//     }

  
// } 