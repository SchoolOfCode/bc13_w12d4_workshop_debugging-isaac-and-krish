let correctAnswer = 70;

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  // a = String(a);
  return a + b;
}

function calc(numA, numB) {
  //numA = 2
  numA = double(numA);
  //numA = 4
  numA = square(numA);
  //numA =16
  numA = multiply(numA, numB);
  //16 * 4 numA = 64
  numA = add(numA, numB);
  //64 + 4 numA=68
  let answer = add(numA, numB) ;
  //68 + 4 answer = 72 +1 ---> answer = 73
  if (correctAnswer === answer) {
    return `Correct answer! You fixed all the bugs. Well done`;
  } else {
    return `${answer} is incorrect! The code still has bugs`;
  }
}

/* DO NOT CHANGE THE CODE BELOW */
calc(2, 4);
module.exports = { calc };
