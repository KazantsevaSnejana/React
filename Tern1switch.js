function manyChecks() {
  let a = Math.floor(Math.random() * 100);
  console.log(a = ${a});
  let tmp = a;
  let flag = false;
  switch (true) {
  case (a > 10):
    tmp = tmp;
    console.log(tmp);
    break;
  case (tmp < 10):
    tmp = tmp * 2;
    console.log(tmp);
    break;
}
switch (true) {
  case (tmp > 5):
    tmp = (2 * tmp) + 1 ;
    console.log(tmp);
    break;
  switch (true) {
  case (tmp < 3):
    tmp = 1;
    console.log(tmp);
    break;
  case (tmp > 3):
    tmp = 2 * (tmp - 2);
    console.log(tmp);
    break;
  }
}
switch (true) {
  case (tmp > 4):
    tmp = 5;
    console.log(tmp);
    break;
switch (true) {
  case (a % 2 == 0):
    tmp = 6;
    console.log(tmp);
    break;
  case (a % 2 == 1):
    tmp = 7;
    console.log(tmp);
    break;   
}
}
}

manyChecks();