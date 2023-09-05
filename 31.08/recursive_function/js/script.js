// function factor(number){
//     if(number == 0 || number == 1) return 1;
//     return number * factor(number - 1);
// }
// console.log(factor(5));

// 2. Напишіть функцію, яка виводить усі числа із заданого користувачем діапазону у прямому порядку. І ще одну функцію – для виведення у зворотному порядку

// function printAB(a, b){
//     if(a <= b){
//         console.log(a);
//         printAB(a+1, b);
//     }
// }
// function printBA(a, b){
//     if(a <= b){
//         console.log(b);
//         printBA(a, b-1);
//     }
// }
// printAB(1, 10);
// printBA(1, 10);

// 3. Напишіть функцію, яка виводить передане їй число паліндромом (число-перевертень). Наприклад: число 1234 вивести як 4321

// function printNumber(num){
//     if(num < 10){
//         return num;
//     } else {
//         return (num % 10).toString() + printNumber(Math.floor(num / 10));
//     }
//     // let num1 = parseInt(num / 1000);
//     // let num2 = parseInt((num % 1000) / 100);
//     // let num3 = parseInt((num % 100) / 10);
//     // let num4 = num % 10;
//     // console.log(num1, num2, num3, num4);
// }
// console.log(printNumber(528));

// 4. Напишіть функцію, яка підраховує суму цифр числа. Наприклад: число 1357, сума 1 + 3 + 5 + 7 = 16

// function sumDigists(num){
//     if(num < 10){
//         return num;
//     } else {
//         return num % 10 + sumDigists(Math.floor(num / 10));
//     }
// }
// console.log(sumDigists(1357));

// 5. Напишіть функцію, яка приймає число і виводить відповідну кількість вкладених пар круглих дужок. Наприклад: число 4 – (((())))

// function showBrackets(num){
//     if(num === 0){
//         return
//     } else {
//         return '(' + showBrackets(num - 1) + ')';
//     }
// }
// console.log(showBrackets(4));

// Завдання 1. Написати рекурсивну функцію знаходження стeпення числа.
function printPower(num, pow){
    if(pow == 0){
        return 1;
    } else {
        return num * printPower(num, pow - 1);
    }
}
console.log(printPower(2, 5));