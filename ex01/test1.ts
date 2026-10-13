import { myStrlen, myIsPrime, myPower, myRepeat } from "./primitives";

console.log(myStrlen("hello")); // 5
console.log(myStrlen(""));      // 0

console.log(myIsPrime(7));     // true
console.log(myIsPrime(4));     // false
console.log(myIsPrime(1));     // false
console.log(myIsPrime(-5));    // false

console.log(myPower(2, 10));   // 1024
console.log(myPower(5, 0));    // 1

console.log(myRepeat("ab", 3)); // "ababab"