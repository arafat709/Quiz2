// 1(Declare variables for your name, age, and favorite food, then print a sentence using them.)
let name = "Arafat";
let age = 18;
let favouriteFood = "kacchi";
console.log("my name is" + " " + name, "i'm" + " " + age, "my favourite food is" + " " + favouriteFood);

//2(Create two variables: one with a number and another with a string. Add them and explain the result.)
let numberV = 18;
let stringV = "18";
console.log(numberV + stringV);

//3(Convert the string "123" to a number and add 10 to it.)
let str = "123";
let str2 = Number(str);
let result = str2 + 10;
console.log(str2);
console.log(result);

//4(Declare a number and check whether it is positive, negative, or zero.)
let checkNumber = 3;
if (checkNumber > 0) {
    console.log("It's a Positive number");
}
else if (checkNumber < 0) {
    console.log("It's a Negetive number");
}
else {
    console.log("It's Zero");
}
//5(Declare three numbers and find the largest among them.)
let a = 4;
let b = 10;
let c = 6;
if (a > b && a > c) {
    console.log("a is the largest number");
}
else if (b > a && b > c) {
    console.log("b is the largest number");
}
else
    console.log("c is the largest number");
//6(Count how many times the letter "a" appears in the string "Banana".)

//7(Convert the string "hello world" to uppercase.)
let convertString = "hello world"
console.log(convertString.toUpperCase());

//8(Check if a string contains the word "JavaScript".)
let includeTxt = "JavaScript is Easy";
if (includeTxt.includes("JavaScript")) {
    console.log("The String is contains the word'JavaScript'.");
}
else
    console.log("The String dosen't contain the word 'JavaScript'.")

//9(Check if the word "learning" exists in the string "I am learning JavaScript".)
let checkIng = "I am learning javascript";
console.log(checkIng.includes("learning"));

//10(Replace "bad" with "good" in the sentence "This is a bad day".)
let replaceWord = "This is a bad day";
console.log(replaceWord.replace("bad","good"));

//11(Extract the first 4 characters from a string.)
let extractWord = "Extract";
console.log(extractWord.slice(0,4));

//12(Find the index of "m" in the string "Programming".)
let findIndex = "programming";
console.log(findIndex.indexOf("m"));

//13(Declare a string and check whether it is in lowercase or uppercase.)
let myString = "HELLO WORLD";


//14(Write a short sentence about something you like and find its length.)
let lengthCheck = "what's wrong";
console.log(lengthCheck.length);

//15(Check if the string "Frontend Developer" starts with "Frontend".)
let anotherCheck = "Frontend Developer";
console.log(anotherCheck.startsWith("Frontend"));

//16(Use the substring method to extract the first 5 characters from the string "JavaScript".)
let subsTring = "JavaScript";
console.log(subsTring.substring(0,5));

//17(Concatenate the strings "Hello" and "World" to form a sentence.)
let string1 ="Hello";
let string2 ="World";
console.log(string1.concat(string2));

//18(Reverse the string "Banana" and print it.)
let reverSe = "Banana";
console.log(reverSe.repeat(2));

//19(Declare a number and check if it is an even number.)
let checkEvNum = 10;
if (checkEvNum % 2 ===0){
    console.log("It's an even number");
}
else
console.log("It's an odd number");

//20(Replace all spaces in the string "I love JavaScript" with dashes "-".)
let StrR = "I love JavaScript";
console.log(StrR.replaceAll(" " ,"-"));