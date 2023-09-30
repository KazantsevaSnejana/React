function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
    console.log(a = ${a});
  if (a > 10){
  console.log("a is bigger than 10")    
  }else{
    console.log("a is less than or equal to 10")    
  }
  
  if (a === 5){
    console.log("an example of a special case")    
  }else{
    console.log("")    
  }


  if (a === 15){
    console.log("but a is not 15")    
  }else{
    console.log("")    
  }


  if (a > 5){
    console.log("and a is greater than 5")    
  }else{
    console.log("and a is less than or equal to 5")    
  }


  if (a % 2){
    console.log(" and a is odd")    
  }else{
    console.log(" and a is even ")    
  }

  
}
manyChecks();