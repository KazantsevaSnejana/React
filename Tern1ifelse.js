function manyChecks() {
  let a = Math.floor(Math.random() * 100);
  console.log(`a = ${a}`);
  let tmp = a;
  
  if (tmp > 10){
      tmp = tmp;
      console.log(tmp);
  }else{
      tmp = tmp * 2;
      console.log(tmp);
  }
  
  if (tmp > 5){
      tmp = (2 * tmp) + 1;
      console.log(tmp);
  }else{
      if (tmp < 3){
        tmp = 1;
        console.log(tmp);
      }else{
        tmp = 2 * (a - 2);
        console.log(tmp);    
      }
  }
  
  if (tmp > 4){
      tmp = 5;
      console.log(tmp);
  }else{
  if (a % 2 == 0){
      tmp = 6;
      console.log(tmp);
  }else{
      tmp = 7;
      console.log(tmp);    
  }
  }
}

manyChecks();