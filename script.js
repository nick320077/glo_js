

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

let title = prompt('Как называется ваш проект?');
let screens = prompt(' Какие типы екранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = prompt('Нужен ли адаптив на сайте?');

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');



const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}


function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle  = function() {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLocaleLowerCase();
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getRollbackMessage = function(price) {
      if(price >= 30000) {
        return 'Даем скидку в 10%';
    } else if(price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%';
    } else if(price >= 0 &&  price < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';
    }
} 

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);



console.log("Стоимость верстки экрана " + screenPrice + " юаней и Стоимость разработки сайта " + fullPrice + " юаней");








