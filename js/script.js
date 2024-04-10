// ЗАДАЧА 1 ----------------

//  обєкт витягаємо значення(10, 20, 15, 21)

// const product = {
//   apple: 10,
//   tomato: 20,
//   banana: 15,
//   orange: 21,
// };

// 1й спосіб (не рекомендує Дмитро)
// for (const item in product) {
//   console.log(product[item]);
// }

// 2й спосіб повертає масив ключів (найкращий, бо можна спочатку витягти ключі потім значення)
// const keys = Object.keys(product);
// console.log(keys);

// витягаємо ключі з масива що створився з object.keys - apple, tomato,banana...
// for (const key of keys) {
//   console.log(key);
//   console.log(product[key]); // тут витягаємо значення ключів 10,20,15...
// }

// 3й спосіб повертає значення ключів одразу 10,20,15...

// const values = Object.values(product);
// for (const value of values) {
//   console.log(value);
// }






// ЗАДАЧА 2---------------------

// мутуючі методи(брудних функцій), будь ласка задачки з прикладами:
// 1) функція, яка в процесі виконання може змінювати або використовувати глобальні змінні.
// 2)змінює значення аргументів посилального типу.

// 1й) нечиста функція - значенні помножились на 2 [2, 4, 6,...], змінилась глобальна змінна

// const arr = [1, 2, 3, 5, 7, 8, 9];

// function foo() {
//   arr.forEach((item, index, arr) => {
//     arr[index] = item * 2;
//   });
// }
// foo();
// console.log(arr);

// 2й) значення аргумента посилального типу
// const arr = [1, 2, 3, 5, 7, 8, 9];

// function foo(data) {
//     data.forEach((item, index, array) => {
//         array[index] = item * 2;
//     })
// }
// foo(arr)
// console.log(arr);

// 3й) перетворимо на чисту функцію, створили новий масив зі значенням*2, вихідний залишився незмінним

// const arr = [1, 2, 3, 5, 7, 8, 9];

// function foo(data) {
//     const myArr = [...data];
//     myArr.forEach((item, index, arr) => {
//         arr[index] = item * 2;
//     })
//     return myArr;
// }

// console.log(foo(arr));
// console.log(arr);







// ЗАДАЧА 3---------------------

//  метод reduce
// 1й легкий рахує сумму
// const arr = [1, 2, 3, 5, 7, 8, 9];

// let total = 0;

// arr.forEach((item) => {
//     total += item;
// })

// console.log(total);

// 2й reduce
// const res = arr.reduce((acc, item) => {
//   return acc + item; // або acc += item
// });
// console.log(res);





// ЗАДАЧА 4 ---------------------

// приклад рефакторингу "брудної" функції.
//  Є два масиви об'єктів. Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів
// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary', city: 'Odessa' },
//   { id: 3, name: 'Bob' },
// ];
// const arr2 = [
//   { id: 2, name: 'Marusya', age: 30 },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// 1й тільки по id сортовка
// function foo(array1, array2) {
//     const res = [...array1];

//     array2.forEach(item => {
//         if (!res.some(el => el.id === item.id)) {
//             res.push(item)
//         }
//     })
//     return res;
// }
// console.log(foo(arr1, arr2));

// 2й на id 2, зміниться імя
// function foo(array1, array2) {
//   const res = [...array1];

//   array2.forEach(item => {
//     const index = res.findIndex(el => el.id === item.id);

//     if (index === -1) {
//       res.push(item);
//     } else {
      // res.splice(index, 1, item)
//       res.splice(index, 1, { ...res[index], ...item }); //3й спосіб, додати ще ключі які відрізняються (age, city)
//     }
//   });
//   return res;
// }
// console.log(foo(arr1, arr2));





// ЗАДАЧА 5------------------------------

// функція callback
// const arr1 = [5, 10, 78, 36, 98];
// const arr2 = [1.5, 3.7, 7.2, 6.3, 2.0, 4.3];
// const arr3 = [5, 2, 25, 49, 36, 100, 1];

// function foo1(arr) {
//   const newArr = [];
//   arr.forEach(item => {
//     newArr.push(item * 2);
//   });
//   return newArr;
// }

// function foo2(arr) {
//   const newArr = [];
//   arr.forEach(item => {
//     newArr.push(Math.sqrt(item));  //корінь
//   });
//   return newArr;
// }
//  console.log(foo2(arr2));

// ------
// щоб не писати кожну дію(*,/, корінь) окремо як показано вище, робимо наступне

// function foo(arr, functionlalala) {
//   const newArr = [];
//   arr.forEach(item => {
//     newArr.push(functionlalala(item));
//   });
//   return newArr;
// }

// console.log(foo(arr1, (number) => number * 2));
// console.log(foo(arr1, (number) => number / 2));
// console.log(foo(arr1, number => Math.sqrt(number)));





// ЗАДАЧА 6-----SORT/TOSORTED---------------

// SORT
// const arr = [2, 1, 9, 4, 5]
// const res = arr.sort((a, b) => a - b) // мутує вихідний масив
// arr.push(6)

// console.log("arr", arr);
// console.log('res', res);

//toSorted - не змінює вихідний масив

// const arr = [2, 1, 9, 4, 5]
// const res = arr.toSorted((a, b) => a - b);

// arr.push(6)
// console.log("res", res);
// console.log('arr', arr);




// ЗАДАЧА 7---------THIS--------------


//  1 й простий спосіб без this

// const petya = {
//   name: 'Petya',
//   age: 25,
//   sayHallo() {
//     console.log(`Hello ${petya.name}`);
//   },
//   changeName(newName) {
//     petya.name = newName;
//   },
// };

// petya.sayHallo();
// petya.changeName('Yura');
// console.log(petya);

// метод this

// const petya = {
//   name: 'Petya',
//   age: 25,
//   sayHallo() {
//     console.log(`Hello ${this.name}`);
//   },
//   changeName(newName) {
//     this.name = newName;
//   },
// };


// const kate = {
//     name: "Kate",
//     age: 30,
// }

// kate.sayHallo = petya.sayHallo;
// kate.changeName = petya.changeName;
// kate.changeName("Alice");

// console.log("kate", kate);
// console.log('petya', petya);




// ЗАДАЧА 8 -----спред оператор(REST)----------------
// function foo(...lalala) {    //складаємо значення в масив
//     console.log(lalala);
// }

// foo(1, 2, 3, 4, 5);






//  ЗАДАЧА 9-------(...SPREAD)---------
// розгортаємо масив (навпаки)б витягти кожен елемент
// 1й приклад
// function foo1(arr) {
//     console.log(...arr);
// }

// foo1([1, 2, 3, 4, 5]);

// 2й приклад

// const obj = {
//     skills: "JavaScript",
//     city: "Dnipro"
// }

// const user = {
//     name: "Alice",
//     age: 20,
//     ...obj
// }
// console.log(user);





// ЗАДАЧА 10--------------------------