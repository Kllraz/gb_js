'use strict'

// задание 1

//пример 1
let a = 1, b = 1, c, d;

/*
1. Сначала переменная a увеличится на 1. a = 2
2. переменной c присвоится значение переменной a
*/
c = ++a;
alert(c); // ответ: 2

//пример 2
/*
1. переменной d присвоится значение переменной b
2. переменная b увеличится на 1. b = 2
*/
d = b++;
alert(d); //ответ: 1

//пример 3
/*
1. Так как после 1-го примера переменная a уже равна 2. То сначала переменная a увеличится на 1 (a = 3), а затем результат подставится в сложение.
2. 2 + 3 будет 5
*/
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
/*
1. Так как после 2-го примера переменная b уже равна 2. То сначала значение переменной b подставится в сложение
2. переменная b увеличится на 1. (b = 3)
3. 2 + 2(не 3, так как сначало подставилось значение, а потом произошло увеличение) будет 4 
*/
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

// задание 2

/*
1. переменной a присваивается значение 2
2. так как приоритет выше у группировки(скобах), то для начала переменная a умножается на 2 и вмесо выражения подставляется её новое значение(4)
3. 1 + 4 будет 5
4. 5 записываем в переменную x
5. с помощью console.log выводим переменную x в консоль
*/
// let a = 2;
// let x = 1 + (a *= 2);

// console.log(x);

// задание 3

// let a = 35;
// let b = -2;

// if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
//     alert(`Числа разных знаков. Результат сложения: ${a + b}`);
// } else if (a >= 0 && b >= 0) {
//     alert(`Результат вычитания: ${a - b}`);
// } else if (a < 0 && b < 0) {
//     alert(`Результат умножения: ${a * b}`);
// }

// задание 4

// /**
//  * Функция выполняет математическое действие СЛОЖЕНИЕ
//  * @param {number} first_num первое слагаемое
//  * @param {number} second_num второе слагаемое
//  * @returns {number} сумма чисел
//  */
// function sum(first_num, second_num) {
//     return first_num + second_num;
// }

// /**
//  * Функция выполняет математическое действие ВЫЧИТАНИЕ
//  * @param {number} first_num уменьшаемое
//  * @param {number} second_num вычитаемое
//  * @returns {number} разность чисел
//  */
// function diff(first_num, second_num) {
//     return first_num - second_num;
// }

// /**
//  * Функция выполняет математическое действие УМНОЖЕНИЕ
//  * @param {number*} first_num первый множитель
//  * @param {number} second_num второй множитель
//  * @returns {number} произведение чисел
//  */
// function mul(first_num, second_num) {
//     return first_num * second_num;
// }

// /**
//  * Функция выполняет математическое действие ДЕЛЕНИЕ
//  * @param {number} first_num делимое
//  * @param {number} second_num делитель
//  * @returns {number} частное чисел
//  */
// function div(first_num, second_num) {
//     return first_num / second_num;
// };


// // задание 5
// /**
//  * Функция-обертка для математических операций
//  * @param {number} arg1 первое число
//  * @param {number} arg2 второе число
//  * @param {number} operation номер действия
//  * @returns результат или ничего, если ошибка
//  */
// function mathOperation(arg1, arg2, operation) {
//     if (isNaN(arg1) || isNaN(arg2)) {
//         alert(`Что-то из этого не число`);
//         return;
//     } else {
//         switch (operation) {
//             case 1:
//                 return `Результат сложения: ${sum(arg1, arg2)}`;
//             case 2:
//                 return `Результат вычитания: ${diff(arg1, arg2)}`;
//             case 3:
//                 return `Результат умножения: ${mul(arg1, arg2)}`;
//             case 4:
//                 return `Результат деления: ${div(arg1, arg2)}`;
//             default:
//                 alert(`Неизвестная операция ${operation}`);
//                 return;
//         }
//     }
// }

// /**
//  * Рекурсивная функция. Повторяется пока функция mathOperation не вернет результат операции
//  */
// function calc() {
//     let first_num = parseFloat(prompt("Введите первое число"));
//     let second_num = parseFloat(prompt("Введите второе число"));
//     let operation = parseInt(prompt("Выберите действие (1 - сложение; 2 - вычитание; 3 - умножение; 4 - деление"));
//     let result = mathOperation(first_num, second_num, operation);

//     if (result !== undefined) {
//         alert(result);
//         return;
//     } 
//     calc();
// }

// calc();

// задание 6

// function decOfNum(num) {

//     if (num > 10 && num < 20) {
//         return "рублей";
//     }
//     if (num > 1 && num < 5) {
//         return "рубля";
//     }
//     if (num == 1) {
//         return "рубль";
//     }
//     return "рублей";
// }


// let money = parseInt(prompt("Сколько хотите положить на счет?"));
// alert(`Ваша сумма в ${money} ${decOfNum(money)} успешно зачислена.`)