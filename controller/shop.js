const path =  require('path');



//const Product = require('../model/product');

const Product = require('../model/sequelizes');




exports.getproduct=(req,res,next) => {
    Product.fetchAll()
    .then(([rows])=>{

        res.render('shop',{prods:rows, docTitel:'Shop'});
    })
    .catch(err => console.log(err));

    
    //const products = adminrouters.products;
    
}


//----------------------------------------------------------------------------------

//sequelize







// exports.getproduct=(req,res,next) => {
//     Product.findAll()
//     .then(rows => {
//         res.render('shop',{prods:rows, docTitel:'Shop'});
        
//     })
//     .catch(err => console.log(err));
        
//     }
  

    
    //const products = adminrouters.products;
    

   
     
    
     
      

    //  .then((rows)=> {

    //     return console.log(rows);
    // })
    