"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;
	if (D < 0) {
		return [];
	} else if (D === 0) {
		console.log(-b/(2*a));
		return [-b/(2*a)];
	} 
	
	arr.push((-b + Math.sqrt(D))/(2 * a));
	arr.push((-b - Math.sqrt(D))/(2 * a));
  return arr;
}

let uravnenie = solveEquation(1, 5, -3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}