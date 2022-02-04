

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

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt(' Какие типы екранов нужно разработать?', 'Простые, Сложные');
    
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice)) 
    
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
     let sum = 0;

     for(let i = 0; i < 2; i++) {
         let price = 0;
       if(i === 0) { 
         service1 = prompt('Какой дополнительный тип услуги нужен?');  
     } else if(i === 1) {
         service2 = prompt('Какой дополнительный тип услуги нужен?');
     } 

     do {
        price = prompt('Сколько это будет стоить?');
     } while (!isNumber(price))
       sum += +price;
   }

  return sum;
     
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}


function getFullPrice() {
    return +screenPrice + allServicePrices;
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getTitle  = function() {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLocaleLowerCase();
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);



console.log("Стоимость верстки экрана " + screenPrice + " юаней и Стоимость разработки сайта " + fullPrice + " юаней");








