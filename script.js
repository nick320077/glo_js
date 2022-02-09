

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

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   adaptive: true,
   rollback: 10,
   allServicePrices: 0,
   fullPrice: 0,
   servicePercentPrice: 0,
   services: {},
   
   start: function() {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
   },

    isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
   },

   asking: function() {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
   
   for(let i = 0; i < 2; i++) {
        let name = prompt(' Какие типы екранов нужно разработать?');
        let price = 0;

        do {
            price = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(price));
        appData.screens.push({ id: i, name: name, price: price })

    }

    for(let i = 0; i < 2; i++) {
        let name = prompt('Какой дополнительный тип услуги нужен?'); 
        let price = 0;

    do {
       price = prompt('Сколько это будет стоить?');
    } while (!appData.isNumber(price));

    appData.services[name] = +price;
      
  }
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
   },

   addPrices: function() {
    for(let screen of appData.screens) {
        appData.screenPrice += +screen.price;
     } 

     for(let key in appData.services) {
        appData.allServicePrices += appData.services[key];

    }
   },

 getFullPrice: function() {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
},

 getServicePercentPrices: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
},

 getTitle: function() {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
},
getRollbackMessage: function(price) {
      if(price >= 30000) {
        return 'Даем скидку в 10%';
    } else if(price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%';
    } else if(price >= 0 &&  price < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';
    }
}, 
 logger() {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }

}

appData.start();














