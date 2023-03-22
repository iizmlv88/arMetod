"use strict";



import {data} from './produktu.js';
console.log("-> data", data);

import {chek} from './chek.js';
console.log("-> chek", chek);

import {academy} from './academy.js';
console.log("-> academy", academy);
const silpo = document.querySelector('#silpo')
const hogvartz = document.querySelector('#hogvartz')
const text = document.querySelector('#text')


//! Завдання 1
//? Створить масив «список покупок». Кожен елемент масиву є
//? об'єктом, який містить назву продукту, необхідну кількість і чи
//? був він куплений.
//? Напишіть декілька функцій для роботи із таким масивом.
//? 1. Виведення всього списку на екран таким чином, щоб спочатку йшли некуплені продукти, а потім куплені.
//? 2. Додавання покупки до списку. Враховуйте, що при додаванні покупки з вже існуючим продуктом у списку, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
//? 3. Купівля продукту. Функція приймає назву продукту і
//? помічає його як придбаний.

// !1.1 
//! 1. Виведення всього списку на екран таким чином, щоб спочатку йшли некуплені продукти, а потім куплені.

// function kypleneNeKyplene(data) {
//   const falseStatus = data.filter(item => item.status === false);
//   const trueStatus = data.filter(item => item.status === true);
//   const kyput = [...falseStatus, ...trueStatus];
//   silpo.innerHTML = kyput.map(item => `<li>${item.produkt}</li>`).join('');
// }
// kypleneNeKyplene(data);

// !1.2
//! 2. Додавання покупки до списку. Враховуйте, що при додаванні покупки з вже існуючим продуктом у списку, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.

// function addProductToList(productName, quantity, status) {
//   let existingProductIndex = -1;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].produkt === productName) {
//       existingProductIndex = i;
//       break;
//     }
//   }

//   if (existingProductIndex !== -1) {
//     data[existingProductIndex].skiko += quantity;
//   } else {
//     data.push({
//       produkt: productName,
//       skiko: quantity,
//       status: status
//     });
//   }
//   silpo.innerHTML = data.map(item => `<li>${item.produkt}</li>`).join('');
// }
// addProductToList("Milk", 2, false)

// !1.3
//! 3. Купівля продукту. Функція приймає назву продукту і помічає його як придбаний.

// function done(productName) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].produkt === productName) {
//       data[i].status = true;
      
//     }
//     silpo.innerHTML = data.map(item => `<li>${item.produkt} - ${item.skiko}, ${item.status}</li>`).join('');
//   }
// }
// done("Chiken")



//! Завдання 2
//? Створить масив, який описує чек у магазині. Кожен елемент
//? масиву складається із назви товару, кількості та ціни за одиницю
//? товару.
//? Напишіть наступні функції.
//? 1. Виведення чека на екран.
//? 2. Підрахунок загальної суми покупки.
//? 3. Отримання найдорожчої покупки у чеку.
//? 4. Підрахунок середньої вартості одного товару у чеку. 

//! 2.1
//! 1. Виведення чека на екран.

// function outputChek (chek){

// silpo.innerHTML = chek.map(item =>  `<li>найменування ${item.produkt} - ${item.skiko}шт., ціна - ${item.price}/грн.</li>`).join('');
// }
// outputChek (chek);



// ! 2.2
//! 2. Підрахунок загальної суми покупки.

// function sumPrice(chek) {
//     let sum = chek.reduce((i, n) => i + n.price, 0);
//     silpo.innerHTML = `
//     <p>сума покупок - ${sum}грн.</p>
//     `
// }
// sumPrice(chek)

//!2.3
//! 3. Отримання найдорожчої покупки у чеку.

// function maxPrice(chek) {
//   const prices = chek.map(item => item.price); 
//   const maxPrice = Math.max(...prices);
//   silpo.innerHTML = `найбільша ціна ${maxPrice}грню`;
// }

// maxPrice(chek);

// ! 2.4
//! 4. Підрахунок середньої вартості одного товару у чеку. 

// function seredVartist(chek) {
//   let sum = 0;
//   for (let i = 0; i < chek.length; i++) {
//     sum += chek[i].price;
//   }
//   const res = sum / chek.length;
//   silpo.innerHTML = `середня вартість продукту округлена до меншого цілого ${Math.floor(res)}грн.`
// }
// seredVartist(chek)


//! Завдання 3
//! складається із двох властивостей: назва та значення стилю.
//! Напишіть функцію, яка приймає масив стилів та текст, і виводить цей текст за допомогою document.write() у тегах <p></p>,
//! додавши у відкритий тег атрибут style з усіма стилями, переліченими у масиві. 

// const css = [
//   { name: "color", x: "red" },
//   { name: "font-size", x: "99px" },
//   { name: "text-align", x: "center" },
//   { name: "text-decoration", x: "underline" },
// ];


// function addCss(css, entertext) {
//   const style = css.map(i => `${i.name}:${i.x};`).join('');
//   text.innerHTML = `<p style="${style}">${entertext}<p>`;
// // ?   document.write(`<p style="${style}">${entertext}</p>`);
// }

// addCss(css, "червоний великий підкреслений відцентрований ТЕКСТ");




//! Завдання 4
//? Створіть масив аудиторій академії. Об’єкт-аудиторія складається із назви, кількості місць (від 10 до 20) та назви факультету,
//? для якого вона призначена.
//? Напишіть декілька функцій для роботи з ним.
//? 1. Виведення на екран усіх аудиторій.
//? 2. Виведення на екран аудиторій для зазначеного факультету.
//? 3. Виведення на екран тільки тих аудиторій, які підходять
//? для переданої групи. Об’єкт-група складається з назви,
//? кількості студентів і назви факультету.
//? 4. Функція сортування аудиторій за кількістю місць.
//? 5. Функція сортування аудиторій за назвою (за алфавітом).



//! 4.1
//! 1. Виведення на екран усіх аудиторій.

// function allAcademy() {
//   const hogvartzUl = document.getElementById("hogvartz");

//   academy.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerText = `Назва: ${item.nazva}, Максимум: ${item.max}, Факультет: ${item.fac}`;
//     hogvartzUl.appendChild(li);
//   });
// }

// allAcademy();


// !4.2
//! 2. Виведення на екран аудиторій для зазначеного факультету.

// function audForFac(fac) {

//   for (let i = 0; i < academy.length; i++) {
//     if (academy[i].fac === fac) {
//       const lishka = document.createElement("li");
//       lishka.innerHTML = academy[i].nazva;
//       hogvartz.appendChild(lishka);
//     }
//   }
// }

// audForFac("Slizerin");


// !4.3
//! 3. Виведення на екран тільки тих аудиторій, які підходять
//! для переданої групи. Об’єкт-група складається з назви,
//! кількості студентів і назви факультету.


// const gosti =  { student: 15, fac: "SharmBaton" }

// function showHogvartz(gosti, academy) {

//   academy.forEach((i) => {
//     if (i.max >= gosti.student) {
//       const lishka = document.createElement("li");
//       lishka.textContent = i.nazva;
//       hogvartz.appendChild(lishka);
//     }
//   });
// }

// showHogvartz(gosti, academy);

//! 4.4
//! 4. Функція сортування аудиторій за кількістю місць.

// academy.sort((a, b) => a.max - b.max);

// academy.forEach((item) => {
//   const li = document.createElement("li");
//   li.textContent = `аудиторія: ${item.nazva}, максимальна кількість місць: ${item.max}, факультет: ${item.fac}`;
//   hogvartz.appendChild(li);
// });


//! 4.5
//! 5. Функція сортування аудиторій за назвою (за алфавітом).

// academy.sort((a, b) => a.nazva - b.nazva);

// academy.forEach((item) => {
//   const li = document.createElement("li");
//   li.textContent = `аудиторія: ${item.nazva}, максимальна кількість місць: ${item.max}, факультет: ${item.fac}`;
//   hogvartz.appendChild(li);
// });