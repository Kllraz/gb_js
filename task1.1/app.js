'use strict';

// es5

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Product.prototype.make25PercentDiscount = function () {
//     this.price = this.price - (this.price / 100 * 25);
// }

// let productObj = new Product("Хлеб", 10);

// productObj.make25PercentDiscount();
// console.log(productObj)

// es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

let productObj = new Product("Хлеб", 10);

productObj.make25PercentDiscount();
console.log(productObj)