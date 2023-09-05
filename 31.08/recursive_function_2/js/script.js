// 1. Напишіть функцію зведення числа у ступінь.
// function printPower(num, pow){
// 	if(pow == 0){
// 		 return 1;
// 	} else {
// 		 return num * printPower(num, pow - 1);
// 	}
// }
// console.log(printPower(2, 5));

// 2. Напишіть функцію пошуку найбільшого спільного дільника.
// function gcd(a, b){
// 	if(b === 0){
// 		return a;
// 	} else {
// 		return gcd(b, a % b);
// 	}
// }
// console.log(gcd(18, 8));

// 3. Напишіть функцію для пошуку максимальної цифри у числі.
// function findMaxDigit(num){
// 	if(num < 10){
// 		return num;
// 	} else {
// 		let currentDigit = num % 10;
// 		let maxDigitInRest = findMaxDigit(Math.floor(num / 10));
// 		return Math.max(currentDigit, maxDigitInRest);
// 	}
// }
// console.log(findMaxDigit(12345));

// 4. Напишіть функцію, яка визначає чи є передане число простим.
// function isPrime(num, divisor = 2){
// 	if(num <= 2){
// 		return num === 2;
// 	}
// 	if(num % divisor === 0){
// 		return false;
// 	}
// 	if(divisor * divisor <= num){
// 		return isPrime(num, divisor + 1);
// 	}
// 	return true;
// }
// console.log(isPrime(11));

// 5. Напишіть функцію для виведення усіх множників, переданих числу у зростаючому порядку. Наприклад: число 18 – множники 2*3*3
// function findFactors(num, divisor = 2, factors = []){
// 	if(num < 2){
// 		return factors;
// 	}
// 	if(num % divisor === 0){
// 		factors.push(divisor);
// 		return findFactors(num / divisor, divisor, factors);
// 	} else {
// 		return findFactors(num, divisor + 1, factors);
// 	}
// }
// console.log(findFactors(18));

// 6. Написати функцію, яка повертає число Фібоначчі за переданим порядковим номером. Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на тому, що кожне число дорівнює сумі двох попередніх чисел. Наприклад: порядковий номер 3 – число 2, порядковий номер 6 – число 8.
function fibonacci(num){
	if(num <= 2){
		return 1;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
}
console.log(fibonacci(8));