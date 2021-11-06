let myAuto = new Map ();
myAuto.set(`auto`,`white`);
myAuto.set(1,`green`);
myAuto.set(false,`blue`);
myAuto.set(true,`black`);
for (let x of myAuto.keys()){
  console.log('ключ', x)
}
for (let y of myAuto.values()){
  console.log('значение', y)
}
