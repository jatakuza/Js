/*
let name = "some";
let age = 254;
console.log("Hi, I'm", name, "I'm", age, "years old");
age = 255;
console.log("New age:", age);

const product = "coffee";
let price = 350;
let count = 4;

console.log("Total cost:", price * count);
console.log("With sale:", price * count * 0.8);
console.log(`4 cups of coffee cost ${price * count}, with discount ${price * count * 0.8}`);

console.log("5" + 3); // 53 like string
console.log("5" - 3); // 2 like int

let some;
console.log(typeof some); // undefined

const CAT = "cat";
CAT = "some";
console.log(CAT);
*/
/*
Uncaught TypeError: invalid assignment to const 'CAT'
    <anonymous> http://127.0.0.1:5500/ad.js:22

*/

// let age = 25;
// let temperature = 20;
// console.log("age > 18", age > 18);
// console.log("age < 30", age < 30);
// console.log("age === 25", age === 25);
// console.log("age !== 30", age !== 30);

// console.log("temp === '20", temperature === '20') // false (type temperature - int)

// let has_license = true;
// let is_adult = age >= 18;
// let has_car = true;

// let canDrive = has_license && is_adult && has_car;
// console.log("Can drive?", canDrive);

// let canBuyCar = has_license || is_adult;
// console.log("Can buy car", canBuyCar);

// let is_dark = false;
// console.log("is dark", is_dark);

// if(temperature > 30){
//     console.log("Hot");
// }

// let money = 500;
// let pizza_price = 450;

// if(money >= pizza_price) {
//     console.log("Can buy");
//     money -= pizza_price;
//     console.log("Money: ", money);

// }else {
//     console.log("Cant buy");
// }

// let day_number = 3;

// switch(day_number){
//     case 1: 
//         day_name = "Monday";
//         break;

//     case 2:
//         day_name = "2";
//         break;

//     case 3:
//         day_name = "3";
//         break;
        
//     case 4:
//         day_name = "4";
//         break;

//     case 5:
//         day_name = "5";
//         break;

//     case 6: 
//         day_name = "6";
//         break;

//     case 7:
//         day_name = "7";
//         break;

//     default:
//         day_number = "incorrect day";
//         break;

// }

// console.log("Today is", day_name);

// let command = "Hi";

// switch(command){
//     case "Hi":
//         console.log("Hi");
//         break;
//     case "Bye":
//         console.log("Bye");
//         break;
// }


// let countdown = 5;
// console.log("Reverse");
// while (countdown > 0){
//     console.log(countdown);
//     countdown--;
// }
// console.log("End");

// let password;
// let attempts = 0;
// const CORRECT_PASSWORD = "1234";

// do{
//     password = prompt("Enter password");
//     attempts++;
// }while(password != CORRECT_PASSWORD && attempts <= 3);

// if (password === CORRECT_PASSWORD) {
//     console.log("Success");
// }else {
//     console.log("your attemts is out");
// }

// console.log();

// for(let i = 1; i <= 10; i++){
//     console.log(`3 * ${i} = ${3 * i}`);
// }

// const SECRET_NUMBER = Math.floor(Math.random() * 10) + 1;
// let attempts = 3;
// let quessed = false;

// console.log("Choice number");
// for(let i = 0; i < attempts; i++) {
//     let choice = parseInt(prompt("Choice number"));

//     if (choice === SECRET_NUMBER) {
//         quessed = true;
//         console.log("Success");
//         break;

//     }else if (choice < SECRET_NUMBER){
//         console.log("Try bigger");
//     }else {
//         console.log("Try smaller");
//     }
// }

// if (!quessed) {
//     console.log("Attempts is out");
// }

// grade = parseInt(prompt("Enter grade: "));

// if (grade >= 90 && grade <= 100){
//     console.log(5);
// }else if(grade >= 75 && grade <=89){
//     console.log(4);
// }else if(grade >= 60 && grade <= 74){
//     console.log(3);
// }else if (grade > 100 || grade < 0){
//     console.log("incerrect input");
// }else{
//     console.log(2);
// }


// let a = parseInt(prompt("Enter first num: "));
// let b = parseInt(prompt("Enter second num: "))

// while (a !== b) {
//     if (a > b) {
//         a = a - b;
//     }else {
//         b = b - a;
//     }
// }

// console.log("GCD = ", a);


// let number = parseInt(prompt("Enter num: "));
// let sum = 0;

// while (number > 0) {
//     sum += number % 10;              
//     number = Math.floor(number / 10);
// }

// console.log("sum = ", sum);


// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if (i % 3 === 0) {
//         console.log("Fizz");
//     }else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }

// }
