const math = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    subtract: (num1, num2) => {
        return num1 - num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    }
}

let sum = math.add(9, 6);
let difference = math.subtract(2000, 2011);
let product = math.multiply(210, 2);
let quotient = math.divide(67, 8);