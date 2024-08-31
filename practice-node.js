const fs = require('fs');

const requestHandler = (req,res) => {


const url = req.url;
const method = req.method;

if(url === '/') {

    res.write("<html>");
    res.write("<head><title>trasfer Page</title></head>");
    res.write("<body><form action='/message' method='post'> Message:<input type='text' name='message'><br>  <button type='submit'>Send</button>  </form></body>");
    return res.end();
}
if( url === '/message' && method === 'POST'){

    const body = [];
    req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk);
    });

    req.on('end',()=>{
     const parsebody = Buffer.concat(body).toString();
     const message = parsebody.split('=')[1];
     fs.writeFileSync('messages.js',message);
    });


    
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
}

if(url === '/demo'){
res.setHeader('content-type', 'text/html');
res.write("<html>");
res.write("<head><title>First Page</title></head>");
res.write("<body><h1>Welcome to Node js !!</h1></body>");

}
else{
res.write("<h1>page not found</h1");
res.end();
}

};

module.exports = requestHandler;
