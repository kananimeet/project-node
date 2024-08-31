// console.log("hello");//for print


// const fs = require("fs");
// fs.writeFileSync('hello.js', 'hello');


// let name='meet';
// const age = 20;
// const hobbies =true;

// name='meet kanani';

// const vardefined=(UserName,UserAge,UserHobby)=>{
//     return( 
//     'name is '+UserName+
//     'user age is '+UserAge+
//     'user hobby is '+UserHobby
//     );
// }






// const random = () =>1+2;

// console.log(random());
// console.log(vardefined(name,age,hobbies));







//objects create

const person = {
    name:'meet',
    age:'20',
    calling(){
        console.log('hi, i am '+ this.name);
    }
}

const data = ({name})=>{
console.log(name);

}
data(person);

person.calling();



// const copy = {...person}



//array create

const fruits = ['Apple','banana'];

// const [hobby1,hobby2]=fruits;
// console.log(hobby1,hobby2);

//     // for(let fru of fruits) 
//     //     {
//     //         console.log(fru);
//     //     }

// // console.log(fruits);
// // console.log(fruits.map(fru=>'Fruits: '+fru));


// fruits.push('greap');
// console.log(fruits);

