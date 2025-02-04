//1(Convert the following array into a string using `toString()`: ['apple', 'banana', 'cherry']")
let strArray = ['apple', 'banana', 'cherry'];
console.log(strArray.toString());

//2(Access the 3rd element of this array using `at()`: [10, 20, 30, 40, 50]")
let findEl =  [10, 20, 30, 40, 50];
console.log(findEl.at(2));

//3(Join all elements of the following array into a single string, separated by a hyphen (-): ['red', 'green', 'blue']",)
let joinArray = ['red', 'green', 'blue'];
console.log(joinArray.join("-"));

//4(Remove the last element from the following array : [1, 2, 3, 4, 5]", )
let deleteEl = [1, 2, 3, 4, 5];
console.log(deleteEl.pop());
console.log(deleteEl.splice(4,1));

//5(Add a new element 'grape' to the end of this array: ['apple', 'banana']",)
//let addEl = ['apple', 'banana'];
console.log(addEl.push('grape'));

let addEl = ['apple', 'banana'];
addEl.push('grape');
console.log(addEl);

//6(Remove the first element from the following array : ['car', 'bike', 'bus']",)
let removeEl = ['car', 'bike', 'bus'];
removeEl.shift();
console.log(removeEl);

//7(Add 'train' and 'plane' to the beginning of this array: ['boat', 'ship']")
let add2el = ['boat', 'ship'];
add2el.unshift("train","plane");
console.log(add2el);

//8(Use `delete` to remove the 2nd element from this array: ['dog', 'cat', 'bird']",)
let deleteItm = ['dog', 'cat', 'bird'];
delete deleteItm[1];
console.log(deleteItm);

//9(Merge these two arrays: [1, 2, 3] and [4, 5, 6]",)
let array1 = [1,2,3];
let array2 = [4,5,6];
console.log(array1.concat(array2));

//10(You have an array ["a", "b", "c", "d", "e", "f"], delete “c” and “d”)
let spliceArray = ["a", "b", "c", "d", "e", "f"];
console.log(spliceArray.splice(2,2));

//11(You have an array ["first", "second", "third", "fourth", "fifth","sixth","seventh","eighth","nineth" ]. Print the element at index 4.)
let Arrr =  ["first", "second", "third", "fourth", "fifth","sixth","seventh","eighth","nineth" ];
console.log(Arrr.at(4));

//12(let longString = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat lime melon nectar olive peach pear plum pomegranate rhubarb starfruit tomato vanilla"; 
//Find the index number of “fennel” from the variable longString.)
let longString = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat lime melon nectar olive peach pear plum pomegranate rhubarb starfruit tomato vanilla"; 
console.log(longString.indexOf("fennel"));

//13(You have an array ["apple", "banana", "cherry", "date", "fig"]. Remove the last two elements and print the updated array. [ you can use method multiple time you need ])
let fruits = ["apple", "banana", "cherry", "date", "fig"];
console.log(fruits.splice(3,2));

//14(You have an array ["dog","cat","fish","bird"].Convert this array into a comma-separated string)
let animal = ["dog","cat","fish","bird"];
console.log(animal.join(","));

//15(You have an array ["apple","Orange","banana","grape"].Create a string with each element separated by a hyphen("-"))
let hypn = ["apple","Orange","banana","grape"];
console.log(hypn.join("-"));

//16(You have an array["b","c","d"].Add the element "a","b" and "c" to the beginning of the array in a single call. print the updated array.)
let addABC = ["b","c","d"];
addABC.unshift("a","b","c");
console.log(addABC);

//17(You have an array[1,2,3,4,5].Use the delete operator to remove the element 4)
let delete4 = [1,2,3,4,5];
delete delete4[3];
console.log(delete4);

//18(You have two arrays [1, 2, 3] and [4, 5, 6]. Merge these arrays and then use slice() to get the first 4 elements of the resulting array.)
let mArray1 = [1, 2, 3];
let mArray2 = [4, 5, 6];
let mergingArrays = mArray1.concat(mArray2);
console.log(mergingArrays.splice(0,4));

//19(Given an array ["a", "b", "c", "d", "e"], Remove 2 elements starting from index 1 and insert "x" and "y" in their place. Print the updated array.)
let splArray = ["a", "b", "c", "d", "e"];
console.log(splArray.splice(1,2,"x","y"));
console.log(splArray);

//20(You have an array [10, 20, 30, 40, 50]. Use the slice() method to extract a subarray starting from index 1 and contain 3 elements.)
let tenToF = [10, 20, 30, 40, 50];
let subArray = tenToF.splice(1,3);
console.log(subArray);

//21(You have an array [1, 2, 3, 4, 5]. Convert this array into a string. Then use split() to convert it back into an array of strings. Print both the string and the resulting array.)
let newArray = [1, 2, 3, 4, 5];
let cString = newArray.toString();
console.log(cString);
let cArray = cString.split();
console.log(cArray);

//22(Given an array ["a", "b", "c", "d", "e", "f"], use the at() method to access and print the first and the last elements of the array.)
let atM = ["a", "b", "c", "d", "e", "f"];
console.log(atM.at(0));
console.log(atM.at(-1));

//23(Remove the 2nd element from this array: ['apple', 'banana', 'cherry', 'date']".)
let newArray2 = ['apple', 'banana', 'cherry', 'date'];
delete newArray2[1];
console.log(newArray2);

//24(Extract the first three elements from this array: [10, 20, 30, 40, 50]".)
let newArray3 = [10, 20, 30, 40, 50];
console.log(newArray3.slice(0,3));
//
//Consider these input arrays for question T-21 to T-48
//employees array: An array of emplyees working in a department.
const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

//departments array: An array of departments where emplyees work.
const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
];

//T-021: Can you filter employees who work in the "Engineering" department?
const whoWorkEngDept = employees.filter(employee => employee.departmentId===2);
console.log(whoWorkEngDept);

//T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employeeWithDept = employees.map(employee =>{
    let departmentName = departments.find(dept => dept.id === employee.departmentId);
    return `${employee.name} (${departmentName.name})`})
console.log(employeeWithDept);

//T-023: Find the highest salary among employees.
const highestSalary = employees.reduce((maxSalary,currSalary)=>{
    return currSalary.salary >maxSalary ? currSalary.salary : maxSalary;
},0);
console.log(highestSalary);

//T-024: Check if there is at least one employee in the "Sales" department.
const salesDept = employees.some(checkDept => {
    return checkDept.departmentId === 4;
})
console.log(salesDept);

//T-025: Write a function to filter employees earning more than 6000.
const moreThan6000 = employees.filter(employee => employee.salary > 6000);
console.log(moreThan6000);

//T-026: Create an array of employee names only.
const employeesName = employees.map(employee => employee.name);
console.log(employeesName); 

//T-027: Calculate the total salary of all employees 
const totalSalary = employees.map(employee => employee.salary).reduce((accum,curr)=> accum + curr);
console.log(totalSalary);

//T-028: Is there any employee earning less than 5000?
const neglegticEmployee = employees.filter(employee => employee.salary < 5000);
console.log(neglegticEmployee);

//T-029: Find the first employee who earns exactly 5100.
const firstEmployee = employees.find(employee => employee.salary === 5100);
console.log(firstEmployee);

//T-030: Find the last employee in the "HR" department.
//const hrDept = employees.findLast(employee => employee.departmentId === 1); //findLast() ECMAScript2023(ES2023)
console.log(hrDept);

//T-031: Find the first employee in the "Marketing" department.
const marketingDept = employees.filter(employee => employee.departmentId===3).at(-1);
console.log(marketingDept);

//T-032: Check if all employees earn more than 4000.
const checkAllSalary = employees.every(employee => employee.salary > 4000);
console.log(checkAllSalary);

//T-033: Find the last employee in the "HR" department.
const hrDept = employees.filter(employee => employee.departmentId === 1).at(-1);
console.log(hrDept);

//T-034: Verify if all employees belong to a department listed in the departments array.
const VerifyAll = employees.every(employee =>departments.some(dept => dept.id === employee.departmentId));
console.log(VerifyAll);

//T-035: Log each employee's name and department name to the console.
const employeesNameAndDeptName = employees.map(employee => {
    let departmentName = departments.find(deft => deft.id === employee.departmentId);
    return `${employee.name} (${departmentName.name})`
});
console.log(employeesNameAndDeptName);

//T-036: Extract all employee skill names into a single array.
//????????????????????????????????????????????????????????????
//T-037: Increment each employee's salary by 10%
const incrementSalary = employees.map(employee =>Math.floor(employee.salary *= 1.1));
console.log(incrementSalary);

//T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
//?????????????????????????????????????????????????/

//T-039: Find the total salary of all employees working in the "Engineering" department.
const totalEng = employees.filter(employee => employee.departmentId === 2).map(employee => employee.salary).reduce((accum,curr)=>accum+curr,0);
console.log(totalEng);

//T-040: Check if there is any department where all employees earn more than 5000.


//T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
//???????????????????????????????????????????????????????????????????????????????????????????

//T-042: For each employee, find their department name and return an array of employee names with their department names.


//T-043: Get a list of names of employees earning more than 6000.
const earningAvobe6000 = employees.filter(employee => employee.salary > 6000).map(employee => employee.name);
console.log(earningAvobe6000);

//T-044: Write a for-of loop to print the names of all employees from the employees array.
for(const key of employees ){
    console.log(key.name)
}

//T-045: Using a for-of loop, print the names of employees earning more than 5000.
for(const employee of employees){
    if(employee.salary > 5000) console.log(employee.name)
};

//T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
for(const {name,salary} of employees){
    console.log(`name:${name} salary:${salary}`);
}

//T-047: Write a for-of loop to match employees with their departments and print the results.
for(const employee of employees){
    let department = departments.find(dept => dept.id === employee.departmentId);
    console.log(`${employee.name} works in ${department.name} department`);
}

//T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
for(const[index,value] of employees.entries()){
    console.log(index,value.name);
}
//T-049: Given the array-like object below, access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };

//T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

//T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

//T-052: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];

//T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

//T-054: Use Array.from to convert a string like "Hello" into an array of characters.
