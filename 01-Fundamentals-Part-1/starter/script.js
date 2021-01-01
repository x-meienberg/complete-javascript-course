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

console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123' < 57);
console.log(5+6+'4'+9-4+2)

// Equality Operators

let numNeighbors = prompt('How many neighbours does your country have?');
numNeighbors = Number(numNeighbors);

if (numNeighbors == 1) {
    console.log('Only 1 border')
} else if (numNeighbors > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}


// Logical Operators

if (language == 'English' && population < 50000000 && false==isIsland){
    console.log(`You should live in ${country} :)`)
} else  {
    console.log(`${country} does not meet your criteria :(`)
}

// Coding Challenge 3

function averageScore(firstScore,secondScore,thirdScore){
    return (firstScore+secondScore+thirdScore)/3
}

// Data 1
let averageScoreDolphins = averageScore(96,108,89);
let averageScoreKoalas = averageScore(88,91,110);

// Data Bonus 1
averageScoreDolphins = averageScore(97,112,101);
averageScoreKoalas = averageScore(109,95,123);

// Data Bonus 2
averageScoreDolphins = averageScore(97,112,101);
averageScoreKoalas = averageScore(109,95,106)


if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >100){
    console.log('Dolphins win')
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >100) {
    console.log('Koalas win')
} else if (averageScoreDolphins == averageScoreKoalas && averageScoreDolphins > 100){
    console.log('Draw')
} else {
    console.log('Nobody wins')
}


// The switch Statement

language = 'english';
switch (language) {
    case 'chinese' || 'mandarin': console.log('MOST number of native speakers'); break;
    case 'spanish': console.log('2nd place in number of native speakers'); break;
    case 'english': console.log('3rd place'); break;
    case 'hindi': console.log('Number 4'); break;
    case 'arabic': console.log('5th most spoken language'); break;
    default: console.log('Great language too :D'); break;

}

// The conditional (ternery) Operator
population = 6000000
let aboveOrBelow
population >= 33000000 ? aboveOrBelow = 'above' : aboveOrBelow = 'below';
console.log(`${country}'s population is ${aboveOrBelow} average`);

// Coding Challenge 4

// Value 1
let billValue = 275;
// Value 2
billValue = 40;
// Value 3
billValue = 430

let tip;

billValue >= 50 && billValue <= 300 ? tip = 0.15*billValue : tip = 0.2*billValue;
let totalValue = billValue+tip;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${totalValue}`)


