

// const title = 'project01';
// console.log(typeof title);
// const screens = 'Простые, Сложные, Интерактивные';
// const screenPrice = 100;
// const rollback = 10;
// const fullPrice = 1000;
// console.log(typeof fullPrice);
// const adaptive = true;
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log(`${screenPrice}$`);
// console.log(`${fullPrice}$`);
// console.log(screens.toLowerCase());
// console.log(screens.split(","));
// console.log(fullPrice * (rollback / 100));
const rollback = 10;
let title = prompt('Как называется ваш проект?');
let screens = prompt(' Какие типы екранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let adaptive = prompt('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

if(fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if(fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if(fullPrice >= 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}

