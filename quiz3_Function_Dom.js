// //1(Write a function named greetUser that takes a name as a parameter and logs:"Hello, [name]! Welcome to the class!")
// function greetUser(name){
//    let greet = (`Hello, ${name}! Welcome to the class!`);
//    return greet;
// }
// console.log(greetUser("Nur"));
// //or
// function greetUser(name){
//     console.log(`Hello, ${name}!Welcome to the class!`)
// }
// greetUser("Jarif");

// 2(Create a function addTwoNumbers(a, b) that returns the sum of a and b. Call the function with two numbers and display the result in the console.)
// function sumTwoNumber(a,b){
//     return a+b;
// }
// console.log(sumTwoNumber(25,25));

// 3(Write a function calculateArea(length, width) that calculates and returns the area of a rectangle.)
// function calculateArea(length,width){
//     return length*width;
// }
// console.log(calculateArea(7,5));

// 4(Create a function findMaximum(num1, num2, num3) that takes three numbers and returns the largest one.)

// function findMaximum(num1,num2,num3){
//     if(num1>num2 && num1>num3)
//         console.log(`${num1} is the laregest one`)

//     else if(num2>num1 && num2 >num3)
//         console.log(`${num2} is the largest one`)

//     else
//         console.log(`${num3} is the largest one`)
// }
// findMaximum(7,5,13);
// // or
// function findMaximum(num1,num2,num3){
//     return Math.max(num1,num2,num3);
// }
// console.log(findMaximum(7,5,13));

// 5(Define a variable inside a function. Try to access it outside the function and explain the result.)
// function yourFunction(){
//     let variaBle = ("What's wrong");
//     console.log(variaBle);
// }
// yourFunction();
// console.log(variaBle);

// 6(Write a function isEven(number) that checks if a number is even and returns true or false. Use it to check the evenness of numbers from an array.)

// let Arrr = [1,2,3,4,5,6];
// console.log(checkEven(6));

// function checkEven(number){

//     if(number % 2 === 0) {
//         return true
//     } else {
//         return false
//     }

// }

// 7(Write a function welcomeMessage(name = "Guest") that returns:"Welcome, [name]!")
// function name(Guest){
//     console.log(`Welcome,${Guest}!`)
// }
// name("Tahsan");

// 8(Write a function printStars(n) that takes a number n and prints n stars (*) on the console.)
// function printStars(n){
// console.log("*".repeat(n))
// }
// printStars(5);

// 9(Create a function calculateCircle(radius) that contains two nested functions:findDiameter(radius) to calculate the diameter findCircumference(radius) to calculate the circumference Return an object with both values.)
// function calculateCircle(radius){
//     function findDiameter()
// }

// 10(Write a function addToArray(arr, value) that adds a value to an array using the push() method.)
// function addToArray(arr,value){
//     console.log(arr.push(value))
// }
// addToArray([1,2,3,4],5);

// 11(Write a function joinStrings(arr, separator) that takes an array of strings and a separator and returns a combined string (e.g., joinStrings(['Hello', 'World'], ' ') -> "Hello World").
// function joinStrings(arr,separator){
//     console.log(arr.join(separator))
// }
// joinStrings(["whats", "wrong!"],"-");

// 12(Write a function getFirstChar(str) that takes a string and returns its first character using charAt() or at().)
// function getFirstChar(str){
//     console.log(str.at(0))
// }
// getFirstChar("Get first character");

// 13(Select a paragraph (<p>) element using getElementById() and change its text content to "This text was changed using JavaScript!".)
// const para = document.getElementById("paragr");
// para.innerHTML = "It's Changed by using JavaScript";

// 14(Use querySelectorAll to select all <li> elements from a list. Log their text content one by one in the console.)
// let selectAllLi = document.querySelectorAll("li");
// for(text of selectAllLi) {
//     console.log(text.innerText);
// }

// 15(Write a script that changes the font size of all <h2> elements to "24px" using getElementsByTagName.)
// const getelementsByTag = document.getElementsByTagName("h2");
// for(single of getelementsByTag) {
//     single.style.fontSize = '24px'
// }

// 16(Select all elements with the class highlight using getElementsByClassName. Change their text color to "red".)
// const selectClass = document.getElementsByClassName("classPro");
// for (let color of selectClass) {
//     color.style.color = "red";
// }

// 17(Write a script that selects a <div> with a specific ID and updates its innerHTML to include: "Updated content using JavaScript.")
// let divUpdate = document.getElementById("aDiv");
// divUpdate.innerHTML = "Updated content using JavaScript.";

// //18(Use querySelector to select the first <span> inside a <div> and change its background color to "yellow".)
// let bgChange = document.querySelector("span");
// bgChange.style.backgroundColor = "yellow";

// 19(Select all <p> elements using getElementsByTagName. Count how many <p> elements exist on the page and log the count.)
// const selectAllP = document.getElementsByTagName("p");
// for(onlyP of selectAllP){
//     console.log(onlyP.innerText);
// };

// 20(Select an element by ID and add a new CSS class to it using classList.add(). Then remove the class using classList.remove() and observe the changes.)
// let element1 = document.getElementById('paragr');
// element1.classList.add('class1')
// element1.classList.remove('class1')
// console.log(element1);

