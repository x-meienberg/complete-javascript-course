// Functions 

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

let switzerland = describeCountry('Switzerland',8.46, 'Bern');
let usa = describeCountry('USA', 331, 'Washington DC');
let uk = describeCountry('United Kingdom',66.65, 'London' );

// Function Declarations vs Expressions

function percentageOfWorld1(population){
    return population/7900*100;
}

let populationSwizterland = percentageOfWorld1(8.46); 
console.log(populationSwizterland);
let populationUSA = percentageOfWorld1(331);
console.log(populationUSA);
let populationUK = percentageOfWorld1(66.65);
console.log(populationUK)

const percentageOfWorld2 = function(population){
    return (population/7900)*100;
}

populationSwizterland = percentageOfWorld2(8.46);
populationUS = percentageOfWorld2(331);
populationUK = percentageOfWorld2(66.65)

console.log(populationSwizterland, populationUS,populationUK)

// Arrow Functions

const percentageOfWorld3 = population => (population/7900)*100;

// Functions calling other functions

function describePopulation(country, population){

   console.log(`${country} has ${population} people, which is ${percentageOfWorld1(population)}% of the world`)
}

describePopulationSwitzerland = describePopulation('Switzerland', 8.46);
describePopulationUSA = describePopulation('USA',331);
describePopulationUK = describePopulation('UK', 66.65)
// Coding Challenge 1

const calcAverage = (scoreOne,scoreTwo,scoreThree)=> (scoreOne+scoreTwo+scoreThree)/3;

// Data 1
let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(85,54,41);

// Data 2

avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27)

const checkWinner = (avgDolphins,avgKoalas) => {
    if (avgDolphins*2<=avgKoalas) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
    } else if(avgKoalas*2<=avgDolphins){
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
    } 
    else {
        console.log(`No winner`)
    }
}

checkWinner(avgDolphins,avgKoalas)

// Basic Array Operations

let neighbours = ['Germany','Italy','France','Austria'];

neighbours.push('Utopia');

neighbours.pop();

if (neighbours.includes('Germany')){
    console.log('Probably not a central European country :D')
} 
else{
    console.log('A central European country')
}

neighbours[neighbours.indexOf('Austria')] = 'Republic of Austria';

console.log(neighbours);

// Coding Challenge 2

function calcTip(bill) {
    if(bill >= 100 && bill <= 300){
        return bill*0.15;
    }
    else{
        return bill*0.2;
    }
}

console.log(calcTip(100));

const bills = [125,555,44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length-1])];

console.log(bills)
console.log(tip)

let total = [];

total.push(bills[0]+tip[0]);
total.push(bills[1]+tip[1]);
total.push(bills[bills.length-1]+tip[tip.length-1]);

console.log(total)

// Introduction to Objects

const myCountry = {
    country : 'Switzerland',
    capital: 'Bern',
    language: 'German, French, Italian, and Romanic',
    population: 8.46,
    neighbours: ['Germany','France','Italy','Austria']
}

console.log(myCountry)

// Dot vs. Bracket Notation



// Coding Challenge 3

// Iteration: The for loop

// Looping Arrays, Breaking and Continuing

// Looping Backwards and Loops in Loops

// The while loop

// Coding Challenge 4

