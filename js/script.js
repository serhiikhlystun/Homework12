// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// Перший варіант з setInterval

// function printNumbers(from, to) {

//   let counter = setInterval(() => {
//     console.log(from);
//     from++;

//     if (from > to) {
//       clearInterval(counter);
//     }

//   }, 1000);
// }

// printNumbers(3, 9);

// Другий варіант з вкладеним setTiomeout

// function printNumbers(from, to) {

//   let counter = setTimeout(function repeat() {
//     console.log(from);
//     from++;
//     counter = setTimeout(repeat, 1000);

//     if (from > to) {
//       clearTimeout(counter);
//     }

//   }, 1000);
// }

// printNumbers(3, 8);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// } delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(2000).then(() => alert("виконалось через 2 секунди"));
