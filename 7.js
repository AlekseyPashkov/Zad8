let arr = ['stroka', 12, NaN, null, 1, 11, 1, 9, 2, 5, 0, 7];
if(arr.includes(0)) {
  console.log("В массиве присутствует 0");
}else {
  console.log("В массиве нет 0");
}
let array = [];
for (let i = 0; i < arr.length; i++){
  if (typeof arr[i] === 'number' && !isNaN(arr[i])){
    array.push(arr[i]);
}
}
let odd = arr.filter(i => i % 2)
console.log(odd.length);
let even = arr.filter(i => i % 2 == 0 && i!=0);
    console.log(even.length);