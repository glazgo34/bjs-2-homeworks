function getArrayParams(...arr) {
	let min = Math.min.apply(null, arr),
			max =	Math.max.apply(null, arr),
			sum = 0,
			avg = 0;

	for(let index = 0; index <arr.length; index++) {
				sum = sum + arr[index];
	}

	avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length === 0) {
		return sum = 0;
	}
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	let difference;
	if (arr.length === 0) {
		return difference = 0;
	}
	difference = Math.max.apply(null, arr) - Math.min.apply(null, arr);
	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0,
 			sumOddElement = 0,
			difElement = 0;
	if (arr.length === 0) {
		difElement = 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	difElement = sumEvenElement - sumOddElement;
	return difElement;
}

function averageEvenElementsWorker(...arr) {
	let sumElement = 0,
			countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumElement += arr[i];
			countEvenElement++;
		}
	}

	return sumElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for(let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if(maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}
	
	return maxWorkerResult;
}
