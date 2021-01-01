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


// Introduction to Arrays

populations = [8.46,331,66.5,1393];

console.log(populations.length == 4);

let percentages = [];

percentages[0] = percentageOfWorld1(populations[0]);
percentages[1] = percentageOfWorld1(populations[1]);
percentages[2] = percentageOfWorld1(populations[2]);
percentages.push(percentageOfWorld1(populations[populations.length-1]))

console.log(percentages)

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

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `);

myCountry.population += 2;
console.log(myCountry.population)
myCountry['population'] -= 2;
console.log(myCountry.population)

// Coding Challenge 3

const Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height: 1.69

}

const John = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95
}

function calcBMI(mass, height){
    return mass/height**2;
}

if (calcBMI(Mark.mass,Mark.height) > calcBMI(John.mass,John.height)){
    console.log(`Mark's BMI (${calcBMI(Mark.mass,Mark.height)}) is higher than John's (${calcBMI(John.mass,John.height)}) `)
} else {
    console.log(`$John's BMI (${calcBMI(John.mass,John.height)}) is higher than Mark's (${calcBMI(Mark.mass,Mark.height)}) `)
}

// Iteration: The for loop

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

// Looping Arrays, Breaking and Continuing

let percentages2 = [];

for (let index = 0; index < populations.length; index++) {
    percentages2.push(percentageOfWorld1(populations[index]));
}

console.log(percentages2)

for (let index = 0; index < populations.length; index++) {
    console.log(percentages[index] == percentages2[index])
}

// Looping Backwards and Loops in Loops


let listOfNeighbours = [['Canada','Mexico'],['Spain'],['Norway','Sweden','Russia']];
console.log(listOfNeighbours.length)
console.log(listOfNeighbours[0])

for (let i = 0; i < listOfNeighbours.length; i++) {
    const max = listOfNeighbours[i]
    console.log(`Country: ${max[0]}`) 
    if(max.length>1){
        for (let  j= 1; j < max.length; j++) {
            if(max.length>1){
            console.log(`Neighbour: ${max[j]}`)
            }
        }
    }
    
}

// The while loop


voter = 1
while (voter <= 50) 
{
    console.log(`Voter number ${voter} is currently voting`)
    voter++;
}

// Coding Challenge 4

newBills = [10,292,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];

for (let index = 0; index < newBills.length; index++) {
    tips.push(calcTip(newBills[index]))
    totals.push(tips[index]+newBills[index])
}

console.log(tips)
console.log(totals)

