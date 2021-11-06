function isPrime(num){
    if(num==2) 
    return 'число простое';
    if(num<2) 
    return 'число не должно быть равно 0 и 1';  
    if(num>1000) 
    return 'данные не верны, число должно быть не больше 1000';   
    for(i=2;i<Math.sqrt(num);i++){
    if(num % i==0) 
    return 'число составное';
    }
    return 'число простое';
    }
    console.log(isPrime(1100));