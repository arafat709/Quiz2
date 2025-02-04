//Exercise-1(M H)
//Write a function that takes two numbers and returns the maximum of two.
function checkMaximum(one, two) {
    (one > two) ? console.log(`${one} is the maximum number`) : console.log(`${two} is the maximum number`);
};
checkMaximum(7, 99);

//Exercise-2(M H)
//Write a function "isLandscape" that takes two parameter ("height","width") of an image And returns "true" if the image is landscape otherwise it returns "false".
function isLandscape(width, height) {
    return (width > height) ? true : false;
}
console.log(isLandscape(300, 50));
//or or or
function isLandscape(width, height) {
    return (width > height);
}
console.log(isLandscape(300, 50));

//Exercise-3(M H)
//FizzBuzz Algorithm: Write a function "fizzBuzz" then give it an input(like: if the input is divisible by 3,it's return "Fizz"...if the number is divisible by 5, it's return "Buzz"...if the number is divisible by both 3 and 5,it's return "FizzBuzz"...if the number isn't divisible by either 3 or 5,it's returns the input that you gave...if you pass a string or boleean or anything that not a number that retuns "it's not a number") and it's return a string.
function fizzBuzz(input) {
    if (typeof input !== "number") {
        return NaN;
    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return "FizzBuzz";
    }
    if (input % 3 === 0) {
        return "Fizz";
    }
    if (input % 5 === 0) {
        return "Buzz";
    }
    return input;
};
console.log( fizzBuzz(23));

//Exercise-4(M H)
//Write a JavaScript function checkSpeed(speed) that:
//Prints "Ok" if speed is less than 70.
//Gives 1 point per 5 km/h over 70.
//Suspends the license if 12 or more points are accumulated.
checkSpeed(130);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoints = 5;
    if (speed < speedLimit + kmPerPoints)
        console.log("Ok");
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoints);
        if (points >= 12)
            console.log("License Suspended!");
        else
            console.log(points, "point");
    }
}

//Exercise-5(M H)
//Write a JavaScript function called showNumbers(limit) that takes a number as an argument. The function should iterate from 0 to limit (inclusive) and print each number along with whether it is "EVEN" or "ODD".
showNumbers(11);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if(i % 2 ===0)
            console.log(i,"EVEN");
        else
            console.log(i,"ODD")
    };
};

//Exercise-(M H)
//Write a JavaScript function called countTruthy(array) that takes an array as input and counts the number of truthy values in the array. A truthy value is any value that evaluates to true in a Boolean context (i.e., not 0, null, undefined, '', false, or NaN).
const array = [1,2,3,4,5,0,undefined,null," "];
function countTruthy(array){
    return array.filter(value => value).length;
}
console.log(array)

//Exercise-(M H)
//Create an address object with three properties (Street, City, and Zipcode). Then, create a function called showAddress that takes an address object and displays all the properties of the address object along with their values.
const address = {
    Street: "Indira Road",
    City: "Dhaka,Farmgate",
    Zipcode: 1190
};
function showAddress(address) {
    for (let code in address) {
        console.log(code, address[code]);
    };
};
showAddress(address);

