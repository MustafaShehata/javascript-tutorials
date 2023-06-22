// Add Variables Here
let numOne = 10, numTwo = 20;
// Output
console.log(numOne + "" + numTwo); // Normal Concatenate => 1020
console.log(typeof(numOne + "" + numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numOne}${numTwo}`)); // Template Literals Way => String

console.log(numTwo
    +"\n" + numOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numTwo}
${numOne}`);
/*
  Template Literals Way
  20
  10
*/
