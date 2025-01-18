//1. Write a function that converts a string to both uppercase and lowercase. Example: "JavaScript" → "JAVASCRIPT", "javascript".
function caseCng(aString) {
    const upper = aString.toUpperCase();
    const lower = aString.toLowerCase();
    return { upper, lower };
}
console.log(caseCng("javaScript"));

//2. Check if the string "JavaScript" contains the word "Script".
function checkScript(javaScript) {
    const check = javaScript.includes("Script");
    return check;
}
console.log(checkScript("JavaScript"));

//3. Create an array of numbers. Add two numbers to the end using push() and remove one using pop().
function addRmove(pushPop) {
    const add = pushPop.push(5, 6);
    const remove = pushPop.pop();
    return pushPop;
}
console.log(addRmove([1, 2, 3, 4]));

//4. Write a function that takes an array and returns a subarray with the first three elements.Example: [10, 20, 30, 40] → [10, 20, 30].
function sliceArray(arry) {
    return arry.slice(0, 3);
}
console.log(sliceArray([10, 20, 30, 40]));

//5. Write a function that checks if a number is greater than 50. Return "Yes" if true and "No" otherwise.
function checkNumber(number) {
    if (number > 50) return "Yes";
    else return "No";
};
console.log(checkNumber(20));

//6. Write a program that checks if a number is positive, even, and greater than 100.
function checknUmber(nmbr) {
    if (nmbr > 0 && nmbr % 2 === 0 && nmbr > 100)
        return `${nmbr} is positive,even and greater than 100`;
    else
        return `${nmbr} doesn't match with the condition`;
}
console.log(checknUmber(109));

//7. Write a function to determine the grade of a student based on their marks:
//90+: A
//80–89: B
//70–79: C
//<70: Fail.
function studentGrade(mark) {
    if (mark >= 90) {
        return "A";
    }
    else if (mark >= 80 && mark < 90) {
        return "B";
    }
    else if (mark >= 70 && mark < 80) {
        return "C";
    }
    else {
        return "Fail";
    }
};
console.log(studentGrade(85));

//8. Write a program that takes a day of the week (e.g., "Monday") and prints whether it is a weekday or weekend.
function checkWeekdayOrWeekend(day) {
    switch (day) {
        case "Sunday":
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            return `${day} is a Weekday`;
        case "Friday":
        case "Saturday":
            return `${day} is a Weekend`;
        default:
            return "invalid day!"
    }
};
console.log(checkWeekdayOrWeekend("Friday"));

//9. Create a function that takes two numbers and returns their sum. Call the function with the arguments 5 and 10.
const sumToNum = (num1, num2) => num1 + num2;
console.log(sumToNum(5, 10));

//10. Write a function that accepts a name as a parameter and returns "Hello, [name]!".
function nam(name) {
    return `Hello, ${name}!`;
}
console.log(nam("Sneha"));

//11. Write JavaScript to change the text inside a <p> tag with the id "content" to "Hello, World!".
const changeText = document.getElementById("content");
changeText.innerHTML = "Hello,World!";

//12. Change the background color of a <div> with the class "box" to "lightblue".
let backgroundColorChange = document.getElementsByClassName("box")[0];
backgroundColorChange.style.backgroundColor = "lightblue";

//13. Write JavaScript to select all <li> elements in a list and log their content.
const selectAll = document.querySelectorAll("li");
for (i = 0; i < selectAll.length; i++) {
    console.log(selectAll[i].textContent);
}

//14. Add the class "active" to a button when it is clicked and remove it when clicked again.
const tooGle = document.getElementById("Content");
tooGle.addEventListener("click", e => {
    tooGle.classList.toggle("active");
});

//15. Write an explanation of JavaScript events with an example of a mouseover event that changes an image source.
const mouseOver = document.getElementById("img1");
mouseOver.addEventListener("mouseover", () => {
    mouseOver.src = "images/2img.jpg";
})
mouseOver.addEventListener("mouseout", () => {
    mouseOver.src = "images/1img.jpg";
})

// 16. Create a button and dynamically add an onclick handler using JavaScript to log "Button Clicked" to the console.
const onCLick = document.getElementById("onClick")
onCLick.addEventListener("click", () => {
    console.log("Button Clicked");
})

// //17. Create a password field with a "Show/Hide Password" toggle button.
const passwordField = document.getElementById("password");
const toggleButton = document.getElementById("showHideBtn");

toggleButton.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.innerText = "Hide";
    }
    else {
        passwordField.type = "password";
        toggleButton.innerText = "Show"
    }
});

//18. Create an object with properties name, age, and profession. Write a function to update the profession property.
let Person = {
    name: "Arafat",
    age: 18,
    profession: "Student"
};
function updateProfession(updatedProfession) {
    Person.profession = updatedProfession;
    return `Profession updated to: ${updatedProfession}`
}
console.log(updateProfession("Developer"));
console.log(Person);

//19. Write a loop to iterate over an array [1, 2, 3, 4, 5] and print each element.
let array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//or
for (let value of array) {
    console.log(value);
}

//20. Use a loop to filter and print only odd numbers from [10, 15, 20, 25, 30].
let filteringOdd = [10, 15, 20, 25, 30];
for (i = 0; i < filteringOdd.length; i++) {
    if (filteringOdd[i] % 2 !== 0) {
        console.log(filteringOdd[i]);
    }
}
//or
for (i = 1; i < filteringOdd.length; i += 2) {
    console.log(filteringOdd[i]);
};

//21. Write a while loop that prints all the odd numbers between 1 and 50.
let i = 1;
while (i <= 50) {
    if (i % 2 !== 0) {
        console.log([i]);
    };
    i++;
}
//22. Using a for loop, print all the even numbers from 2 to 100.
for (i = 2; i <= 100; i += 2) {
    console.log(i);
}

//23. Given an array of numbers [3, 8, 12, 5, 9], use a for loop to calculate the sum of the elements in the array.
let arrray = [3, 8, 12, 5, 9];
let sum = 0;
for(i=0;i<arrray.length;i++){
    sum+=arrray[i];
}
console.log(sum);

//24. Use a while loop to iterate through the array [4, 15, 23, 42, 8, 16] and print each element.
let whileArray = [4, 15, 23, 42, 8, 16];
let i = 0;
while (i < whileArray.length) {
    console.log(whileArray[i]);
    i++;
};

//25. Write a for loop that loops through numbers 1 to 100, but breaks the loop when it encounters the number 45.
for (i = 1; i <= 100; i++) {
    if (i === 45) {
        break;
    }
    console.log(i);
}

//26. Write a while loop that prints numbers from 1 to 20 but skips numbers divisible by 4 using the continue statement.
for (i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

//27. Use a while loop to print numbers in reverse order from 20 to 1.
let i = 20;
while (i > 0) {
    console.log(i);
    i--;
}

//28. Write a for loop that subtracts all the numbers in the array [20, 5, 8, 10, 3] starting with the first number (20)
let subtractArray = [20,5,8,10,3];
let subtract = subtractArray[0];
for(i= 1;i<subtractArray.length;i++){
   subtract -= subtractArray[i];
}
console.log(subtract);

//Note:If i = 0, the loop subtracts the first element from itself, which is redundant and incorrect for your intended logic.
// If i = 1, the loop skips the first element and subtracts subsequent elements from the initial value, yielding the correct result.

//29. Given the array [10, 20, 30, 40, 50], calculate the average of the numbers using a for loop.
let calculateAve = [10, 20, 30, 40, 50];
let total = 0;
for (i = 0; i < calculateAve.length; i++) {
    total += calculateAve[i];
}
let average = total / calculateAve.length;
console.log(average);

//30. Write a program that iterates through numbers from 1 to 50. For each number, print "Even" if the number is divisible by 2, and "Odd" if it isn’t.
let i = 1;
while (i <= 50) {
    if (i % 2 === 0) console.log(i +" "+ "is Even");
    else console.log(i +" "+ "is Odd");
    i++;
}
