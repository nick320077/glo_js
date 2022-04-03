






let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;


const getallServicePrices = function() {
    return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    return screenPrice + allServicePrices;
  }

  function getServicePercentPrice() {
    return fullPrice - (fullPrice * (rollback / 100));
  }

  const getTitle = function() {
       return title.trim()[0].toUpperCase() + title.trim().substr(1).toLocaleLowerCase();
    
    }

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
        if(price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
}

allServicePrices = getallServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log('Стоимость верстки екранов ' + screenPrice + ' рублей/долларов/гривен/юаней');
