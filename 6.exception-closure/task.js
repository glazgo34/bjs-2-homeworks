function parseCount(parseNumber) {
  let resultParse = Number.parseFloat(parseNumber);
  if (Number.isNaN(resultParse)) {
    throw new Error(`Невалидное значение`);
  }
  return resultParse;
}

function validateCount(parseNumber) {
  try {
    return parseCount(parseNumber);
  } catch(error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

		if ( (sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
      throw new Error(`Треугольник с такими сторонами не существует`);
    } 
  }
  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
  get area() {
    let p = this.perimeter / 2;
		let S = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3)
    return Number.parseFloat(S);
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch(error) {
      return {
        get perimeter() {
          return `Ошибка! Треугольник не существует`;
        },
        get area() {
          return `Ошибка! Треугольник не существует`;
        }
      }
  }
}