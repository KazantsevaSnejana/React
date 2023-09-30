function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(a = ${a});
  switch (true) {
  case (a > 10):
    console.log("a is bigger than 10");
    break;
  case (a < 10):
    console.log("a is less than or equal to 10");
    break;
}
switch (true) {
  case (a === 5):
    console.log("an example of a special case");
    break;
  case (a === 5):
    console.log("");
    break;
}
switch (true) {
  case (a === 15):
    console.log("but a is not 15");
    break;
  case (a !== 15):
    console.log("");
    break;
}
switch (true) {
  case (a > 5):
    console.log("and a is greater than 5");
    break;
  case (a < 5):
    console.log("and a is less than or equal to 5");
    break;
}
switch (true) {
  case (a % 2 == 0):
    console.log(" and a is odd");
    break;
  case (a % 2 == 1):
    console.log(" and a is even ");
    break;
}
}

manyChecks();