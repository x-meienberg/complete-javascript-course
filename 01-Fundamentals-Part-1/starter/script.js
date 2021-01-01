let js= 'amazing';
console.log(40+8+23-10);

console.log("Xeno");
console.log(23);

let firstName = "Matilda";

console.log(firstName);


let jonas_matilda = "JM";
let sfunction = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob)


// Assignments

// Values and Variables

const country = 'Switzerland';
const continent = 'Europe';
let population = '7650000';

console.log('Country: '+country);
console.log('Continent: '+continent);
console.log('Population: '+ population); 


// Data Types

let isIsland = false;
let language

console.log(isIsland);
console.log('Country: '+country);
console.log('Continent: '+continent);
console.log('Population: '+ population);

// let, const var

language = 'German';
console.log('Language: '+ language)


// Basic Operators

let halfOfPopulation = population/2;
console.log('Half of Population: ' + halfOfPopulation)

population++;
console.log(population);

const populationLargerFinland = population > 6000000;
let populationGreaterAverage = population > 33000000;

console.log("Larger than Finland: "+populationLargerFinland);
console.log("Larger than average country: "+populationGreaterAverage)

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// Coding Challenge 1

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

function BMI(mass,height){
    let BMI = mass/height**2;
    return BMI;
}

let BMIMark = BMI(weightMark,heightMark);
let BMIJohn = BMI(weightJohn,heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI)

// Strings and Template Literals

description = `${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`
console.log(description)

// if/else Statements

if (population > 33000000) {
    console.log(`${country}'s population is above average`)
}else   {
    console.log(`${country}'s population is below average`)
    }

// Coding Challenge 2

if (BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}

// Type Conversion and Coersion

// Equality Operators

// Logical Operators