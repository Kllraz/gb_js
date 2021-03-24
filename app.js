// // задание 1

// for (let i = 0; i <= 10; i++) {
//     if (i == 0) {
//         console.log(`${i} - это ноль`);
//         continue;
//     }
//     if ((i % 2) == 0) {
//         console.log(`${i} - четное число`);
//     } else {
//         console.log(`${i} - нечетное число`);
//     }
// }

// задание 2
const post =
{
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// // задание 3

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
//  ];

// products.forEach(function (product) {
//     product.price = product.price - (product.price / 100 * 15)
// });

// console.log(products)

// задание 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// const result = products.filter(function (product) {
//     return product.hasOwnProperty('photos') && (product.photos.length > 0)
// })
// console.log(result)

// products.sort(function (product_1, product_2) {
//     if (product_1.price > product_2.price) {
//         return 1
//     }
//     if (product_1.price < product_2.price) {
//         return -1
//     }

//     return 0;
// });

// console.log(products);

// задание 5

// function for_func(j) {
//     console.log(j);
//     return j < 9
// }

// for (let i = 0; for_func(i); i++);

// задание 6

// for (let i = 0; i < 20; i++) {
//     console.log("x".repeat(i + 1));
// }