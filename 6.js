let arr = [10, 10, 11, 10, 10];
let a = true;
for (let i = 0; i < arr.length; i++){
 if (arr[i] != arr[0]){
  a = false;
 } 
}
console.log(a);