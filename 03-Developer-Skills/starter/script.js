// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem: 

// Given an array of temperatures, calculate the temperature amplitude. Sometimes there might be sensor error

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understand the problem

// Temperature ambplitude: Difference betw. max and min
// What is max, what is min?
// What's a error, what to do?`

// 2. Breaking up into sub-problems
// How to ignore errors
// Find max value
// Find in value
// subtract min from max


const calcTempAmplitude = function(temps){

	let max = temps[0];
	let min = temps[0];
	for( let i = 1; i< temps.length; i++){

		const curTemp = temps[i]
		if(typeof curTemp !== 'number') continue;
		if(temps[i]> max) max = temps[i];
	
		if(temps[i]< min) min = temps[i];
	}
	
	let amplitude = max - min;
	console.log('Max: '+max)
	console.log('Min: '+min)
	console.log('Amplitude: '+amplitude)

};

calcTempAmplitude(temperatures)


// Problem 2: 

// With two arrays -> Merge two arrays


const temperatures2 = [5,1,51,23,11,31,21];



const calcTempAmplitude2 = function(temps1, temps2){

	let temps = temps1.concat(temps2)
	let max = temps[0];
	let min = temps[0];
	for( let i = 1; i< temps.length; i++){

		const curTemp = temps[i]
		if(typeof curTemp !== 'number') continue;
		if(temps[i]> max) max = temps[i];
	
		if(temps[i]< min) min = temps[i];
	}
	
	let amplitude = max - min;
	console.log('Max: '+max)
	console.log('Min: '+min)
	console.log('Amplitude: '+amplitude)

};

calcTempAmplitude2(temperatures, temperatures2)