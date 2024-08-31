const path = require('path');

const Product = require('../model/product');

//const Product = require('../model/sequelizes');

//const rows = [];


exports.getaddproduct=(req, res, next) => {

   
    res.render(path.join(__dirname, '../', 'views' ,'admin.ejs'));
    
}

// exports.postaddproduct=(req, res, next) => {
   
//     const name = req.body.name;
//     const email = req.body.email;
//     const city = req.body.city;
//     const product = new Product(null,name, email, city);
//     product.save()
//     .then((result) => {
//        // res.redirect('/');
//        console.log(result);
//     })
//     .catch(err => console.log(err));

//     };


//----------------------------------------------------------------------------------

// sequelizes modes


// exports.postaddproduct=(req, res, next) => {
//     const id = req.body.id;
//     const name = req.body.name;
//     const email = req.body.email;
//     const city = req.body.city;
//     Product.create({
//         id:id,
//         name: name,
//         email: email,
//         city: city
//     })
//     .then((result)=>{
//         console.log(result);
//         res.redirect('/');
//     })
//     .catch(err =>{
//         console.error(err);
//     });




    
    

    


//}
















    //products.push({product: req.body.product});
    

 


 






 
 