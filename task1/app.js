'use strict';

// задание 1

/**
 * Преобразует число в объект, в котором описаны разряды числа
 * @param {number} number число
 * @returns {Object} объект, в котором описаны разряды числа
 */
function numToObj(number) {
    let obj = {}

    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log(`Передано неверное значение ${number}`);
        return obj;
    }

    obj = {
        units: number % 10,
        tens: Math.floor(number / 10) % 10,
        hundreds: Math.floor(number / 100)
    }

    return obj;
}

console.log(numToObj(2));
console.log(numToObj(45));
console.log(numToObj(123));