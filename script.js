'use strict'



function one(x) {
 function two() {
     
   const a = prompt('Угадай число от 1 до 100');
   

   console.log(x);
   console.log(a);

   if (x < a) {
       alert('Загаданное число меньше!');
       
       two();
   } else if (x > a) {
       alert('Загаданное число больше Введите новый вариант');
       
       two();
   } else if(x === a) {
       alert("Поздравляю, Вы угадали!!!");
   } else if(typeof a === 'string' || typeof a === true) {
       
       alert("Введи число!");
       two();
   } 

   

 }
 two();

}

one(51);