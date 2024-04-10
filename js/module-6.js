// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }

// class User {
// Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// class User {
//     name;
//     #email;

//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }
//     getEmail() {
//         return this.#email;
//     }
// }

// changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//         this.#email = newEmail;
//     } else {
//         console.log('Invalid email format');
// }
// }

// #validateEmail(email) {
//     return email.includes('@');
//         }

// const mango = new User({
//     name: "Mango",
//     email: 'mango@mail.com',
// });

// const user = {
//     name: "Alice",
//     showThis() {
//         console.log("this", this);
//     }
// }

// user.showThis()

// function showThis() {
//   console.log('this', this);
// }

// const user = {
//   name: 'Alice',
// };

// user.foo = showThis;
// user.foo();

// const user = {
//     name: "Alice",
//     showThis() {
//         console.log("this", this);
//     }
// }

// const petya = {
//     name: "Petya"
// }

// petya.foo = user.showThis;
// petya.foo();

// const user = {
//     name: "Alice",
//     showThis() {
//         console.log("this", this);
//     }
// }

// function foo(callback) {
//     callback()
// }

// foo(user.showThis)

// const book = {
//     title: "React",
//     showThis() {
//         console.log("this", this);
//     },
//     showTitle() {
//     console.log("Title", this.title);
// }
// }

// book.showThis()

// ЗАДАЧА-------------------

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(item => item.name.toLowerCase() === stoneName)

//         if (!stone) {
//             return `${stoneName} not found`;
//         }
//         return stone.price * stone.quantity;
//     },
// };

// console.log(chopShop.calcTotalPrice("ruby"));

// МЕТОД CALL, APPLY-------------------------

// function foo(a, b, arr) {
//     console.log(a, b, arr);
//     console.log("this", this);
// }

// const petya = {
//     name: "Petya"
// }

// const alice = {
//     name: "Alice"
// }

// foo.call(petya, 10, "Hello", [1, 2, 3]);
// foo.apply(alice, [5, "world", [1, 2, 3]]);

// МЕТОД bind---------------

// function changeColor(color) {
//     console.log("this", this);
//     this.color = color;
// }

// const hat = {
//     color: "black"
// }

// const sweater = {
//     color: "blue"
// }

// changeColor.call(hat, "red")

// console.log(hat);

// const changeHat = changeColor.bind(hat);
// changeHat("green")
// console.log(hat);

// 2й приклад

// const counter = {
//     value: 0,
//     increment(num) {
//         console.log("increment", this);
//         this.value += num;
//     },
//     decrement(num) {
//         console.log("decrement", this);
//         this.value -= num;
//     }
// }

// function update(value, callback) {
//     console.log(callback);
//     callback(value)
// }

// update(10, counter.increment.bind(counter));
// update(3, counter.decrement.bind(counter));

// console.log(counter);

// Object.create--------------------
// const animal = {
//     legs: 4
// }

// const dog = Object.create(animal);
// dog.name = "Sharik";
// console.log(dog.name);
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//     console.log(key);
// }

// або
// for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

// ЛАНЦЮЖОК ПРОТОТИПІВ-------------------

// const objC = { c: "objC" };

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log("a", objA);
// console.log('b', objB);
// console.log('c', objC);

// function foo() {
//     return 5;
// }

// const num = foo();
// console.log(num);

// приклад---------

// const animal = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     }
// }
// const dog = Object.create(animal);
// dog.value = 10;
// dog.increment()
// console.log(dog);

// ЗАДАЧА---------------------------------

// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//   speed: 0,
//   brand: 'Audi',
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//   },
//     decrease() {
//         if (this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//         console.log(
//           `Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//   }
// };
// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);





// ЗАДАЧА-----------------------------
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//   brand: 'tesla',
//   speed: 30,
// };

// const bmw = {
//   brand: 'bmw',
//   speed: 70,
// };

// function speedSensor(maxSpeed) {
  // if (this.speed <= maxSpeed) {
  //     return `автомобіль ${this.brand} рухається з безпечною швидкістю`;
  // }
  // return ` ${this.brand} перевищено швидкість`
  // або можна використати тернарний оператор
//   return this.speed <= maxSpeed
//     ? `автомобіль ${this.brand} рухається з безпечною швидкістю`
//     : ` ${this.brand} перевищено швидкість`;
// }

// console.log(speedSensor.call(bmw, SAFE_SPEED));
// console.log(speedSensor.call(tesla, SAFE_SPEED));





// ----------------------- 2й урок-------------------------

