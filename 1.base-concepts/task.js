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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(contribution) || isNaN(percent) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	
	percent = percent/100/12;

	let creditBody = amount - contribution;
	let payPerMonth = creditBody * (percent + (percent / (((1 + percent)**countMonths) - 1)));
	let totalPayment = payPerMonth * countMonths;

	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;
}