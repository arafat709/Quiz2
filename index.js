//arithmatic operator**
let x = 5;
let y = 5;
// console.log(x+y); //addition
// console.log(x-y); //subtraction
// console.log(x*y); //multiflication
// console.log(x/y); //divition
// console.log(x%y); //remainder of divition
// console.log(x**y); //exponentiation(x to the power of y)

//increment (++)
// console.log(++x);
// console.log(x++);
// console.log(x);

//decrement (--)
// console.log(--y);
// console.log(y--);
// console.log(y);

//assignment operator**
let a = 3;
let b = 7;
// console.log(a+=b); //(means a = a+b)

//comperison operator**
//Relational 
// console.log(a > 0);
// console.log(a >= 1); //(gretar than or equal)
// console.log(a < 0);
// console.log(a <= 1); //(less than or equal)

//Equality 
//strict equality(Type+Value)

// console.log(a===3);
// console.log(a==="3");//false**
// console.log(a!==3);

//lose equality(Value)
// console.log(a == 2);
// console.log("3" == a);//true**
// console.log(true == 1);//true**


//Ternary Operator***
//Suppose, If a customer has more than 100 points,they are a "gold" customer Otherwise they are a "silver" customer.
// let points=99;
// let type= points>100 ? "gold" : "silver" ; //condition ? <expression if true> : <expression if false>.
// console.log(type);

//Logical Operator
//Logical And(&&)(Return True If both operands are true).
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

//logical Or(||)(Return True If one operands is true).
// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);

// let userColor = "White";
// let defaultColor = "Black";
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// let j="blue";
// let z = "red";
// p=z;
// z=j;
// j=p;
// console.log(j);
// console.log(z);


//Conditional Statements
//if...else
// let hour =17;
// if(hour>=6 && hour <12){
//     console.log("Good Morning");
// }
// else if(hour >=12 && hour <=18){
//     console.log("Good Afternoon");
// }
// else
//    console.log("Good Evening");

// let role;
// if(role ==="moderator"){
//     console.log("moderator user");
// }
// else if(role === "admin"){
//     console.log("Admin user");
// }
// else
//     console.log("guest user");


// let opt="+";
// let m = 5;
// let n = 3;
// switch(opt){
//     case "+":
//         console.log(m+n);
//         break;

//     case "-":
//         console.log(m-n);
//         break;

//     case "*":
//         console.log(m*n);
//         break;

//     default:
//         console.log("IDK");
// }

// let devices = "Fan";
// switch(devices){
//     case "AC":
//         console.log("Turn off AC");
//         break;
//     case "Fan":
//         console.log("Turn on Fan");
//         break;
//     case "Tubelight":
//         console.log("Turn off Tubelight");
//         break;
//     case "washingMachine":
//         console.log("Turn off this")
//     break;
//     default:
//         console.log(`${devices} Not abailable in your home.`);
// };




// let num = "ghj";

// typeof(num) === "number" ? num % 2 === 0 ? console.log('Even'):console.log("Odd"): console.log("It's not a number");

// console.log(typeof(num));


// if(typeof(num) == "number") {
//     if(num % 2 === 0) {
//         console.log("It's an even number");       
//     } else {
//         console.log("It's an odd number");       
//     }
// } else {
//     console.log("rfsdhzxj");
// }


// let ab = 10;
// let abc = "Arafat";
// let ghj = true;

// let obj = {
//     name: "Arafat",
//     age: 20
// }

// let arr = [10, 30, 50, 70];



// let str = 'Bangladesh is a small country';

// console.log(str.length);
// console.log(str.charAt(11));
// console.log(str.at(11));
// console.log(str[11]);
// console.log(str.charCodeAt(11));



// let slicedStr = str.slice(0, 10);
// console.log(slicedStr);



// let name1 = "Arafat-islam fdhc-ndvfjk";
// let name2 = "Islam";

// let res = name1.concat(" ",name2);

// console.log(res);

// console.log(name1.split(''));



// console.log(name1.toUpperCase() === name2.toUpperCase());




// let string = 'Bangladesh is a small and beautiful country';

// console.log(string.includes('small and'));
// console.log(string.startsWith('B'));
// console.log(string.endsWith('y'));

// ARRAYS
// let car1 = "Toyota";
// let car2 = "Marcedes";
// let car3 = "Porche";
// or using Array
// const car = ["Toyota","Marcedes","Porche"];

//adding elements to an array;
//adding element at the end to an array;
// car.push("BMW","Volkswagen");

//adding element at the biggining to an array;
// car.unshift("Rolls Royce","Range Rover");

//adding element at the middle or somewhere to an array;
// car.splice(1,1,"Kia");

//splice method are also used for remove elements;
// car.splice(0,1);
// console.log(car);


// let numbers = [1,2,3,4,5];
// let value = numbers.find(function(value){
//     return value>3;
// })
// console.log(value);

// let first  = [1,2,3];
// let second = [4,5,6];
// console.log([...first,...second]); //(It's called Spread Operator);

//function
//function declaration
// function walk(){
//     console.log("wald");
// }
// walk();

//function expression
// let walk = function (){
//     console.log("walk");
// }
// walk();


// function myFunction(_p1,_name4="Nur"){
//     return (`#(_p1) are You mad`)
// }
// console.log( _p1("Tahsan"));
// name4();

//global scope
// let globalVar = "I am global!";

// function showGlobal() {
//     console.log(globalVar); // Accessible here
// }

// showGlobal();
// console.log(globalVar); // Accessible here too

//Function scope
// function myFunction() {
//     let funcVar = "I am inside a function!";
//     console.log(funcVar); // Works
// }

// myFunction();
// console.log(funcVar); // Error: funcVar is not defined

//hoisting
// console.log(hoistedVar); // undefined (hoisting)
// var hoistedVar = "I am hoisted!";

// console.log(notHoisted); // Error: Cannot access 'notHoisted' before initialization
// let notHoisted = "I am not hoisted!";

// let Arrr = [1,2,3,4,5,6];
// function checkEven(Arrr){
//     if(Arrr % 2===0){
//         console.log(true);
//     }
//     else
//         console.log(false)
// }
// checkEven(Arrr);

//Loop
//for
// for(i=0; i<=5; i++){
//     console.log("Hello World");
// }

// let z = prompt("Enter No");
// for(i = 1; i<=10;i++){
//     console.log(z,"x",i,"=",z*i);
// }

// document.getElementById("showTable").addEventListener("click", function () {
//     let table = "";
//     let number = 3; // The number for the multiplication table
//     for (let i = 1; i <= 10; i++) {
//         table += `${number} x ${i} = ${number * i}\n`; // Generate the table
//     }
//     document.getElementById("output").value = table; // Display the table in the input
// });

const getDiv = document.querySelectorAll(".counterDiv");

for(let single of getDiv){
    let count = 0;
    let counterup = ()=>{
        count++;
        if(count <= getDiv.dataset.counterP);
        single.innerHTML = count
    }
    setInterval(counterup,20);
}