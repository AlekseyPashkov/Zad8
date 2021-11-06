num = prompt('Введите значение');
num = +num;
console.log(num);
console.log(typeof num);
if (num % 2 == 0){
   console.log("Вы ввели четное значение");
}else if(num % 2) {
   console.log("Вы ввели нечетное значение");  
}
else {
  console.log("Упс, кажется, вы ошиблись");
}