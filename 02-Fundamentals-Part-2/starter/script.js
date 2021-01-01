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



// Coding Challenge 2

// Introduction to Objects

// Dot vs. Bracket Notation

// Coding Challenge 3

// Iteration: The for loop

// Looping Arrays, Breaking and Continuing

// Looping Backwards and Loops in Loops

// The while loop

// Coding Challenge 4

