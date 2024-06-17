//'use strict';
/*
function describeCountry(country, population, capitalCity){
  return `${country}, has ${population} milion of people and its about ${((population / 7900) * 100).toFixed(2)}% of the world, and its capital city is ${capitalCity}.`;
}

const countryBrazil =  describeCountry('Brazil', 215, 'Distrito Federal');
const countryFinland = describeCountry('Finland', 6, 'Helsinki');
const countryGermany = describeCountry('Germany', 83, 'Berlin');

console.log(countryBrazil);
console.log(countryFinland);
console.log(countryGermany);
//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}*/

//arrow function
//const calcAge3 = birthYear => 2037 - birthYear;
//const age3 = calcAge3(1999);
//const idade = prompt('Em qual ano você nasceu?');
//const luiz = ['Luiz', 'Flores Vivas', `${2024 - idade}`];
//console.log(luiz);
// function calcTip(bill){
//     if (bill >= 50 && bill <= 300) {
//          return bill * 0.15;
//     } else {
//         return bill * 0.20;
//     }
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);
// const luiz = { 
//   fullName: 'Luiz Henrique Flores Vivas',
//   drivesLicense: false,
//   job: 'Programmer',
//   birthYear: 2004,
  
//   calcAge: function(){
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   hasDriversLicense: function(){
//     if(this.drivesLicense === true) {
//       return "a"
//     } else {
//       return "no"
//     }
//   }

// };
// console.log(`${luiz.fullName}, is a ${luiz.calcAge()}-years old and has ${luiz.hasDriversLicense()} drivers lincese.`);

// const mark = {
//   fullName: 'Mark Smith',
//   mass: 78,
//   height: 169,

//   calcBmi: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const jonh = {
//   fullName: 'Jonh Smith',
//   mass: 92,
//   height: 195,

//   calcBmi: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// function checkBmi(){
//   if (mark.calcBmi() > jonh.calcBmi()){
//     return console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jonh.fullName}'s (${jonh.bmi})!`);
//   } else {
//     return console.log(`${jonh.fullName}'s BMI (${jonh.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
//   }
// }

// console.log(checkBmi())
//Udemy version
// const mark = {
//   fullName:"Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
 
// const john = {
//   fullName:"John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
 
// mark.calcBMI();
// john.calcBMI();
 
 
// if(mark.bmi > john.bmi){
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi){
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }


//for loop keeps running while condition is true

//;

// const luiz = [
//   'Luiz', 
//   'Flores Vivas',
//   2024 - 2004,
//   'Programmer',
//   ['Pedro', 'Luiza', 'Amanda']
// ];

// for (let i = 0; i < luiz.length; i++) {
//   console.log(luiz[i]);
// }
// let rep = 1;
// while (rep <= 10){
//   console.log(`Lifiting wights ${rep} times`);
//   rep++;
// };

// let dice = Math.trunc(Math.random() * 6);

// while(dice !== 6) {6
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//  };
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// //loop bills/tips/totals
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const arry = [];
// for (let i = 0; i <= bills.length - 1; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// };
// //avarage
// let sum = 0;
// for (let i = 0; i <= bills.length - 1; i++) {
//   sum = sum + totals[i];
// }
// console.log(sum);
// console.log(tips);
// console.log(totals);

