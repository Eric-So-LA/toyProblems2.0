// //find the greatest divisor of two numbers

// const greatestCommonDivisor = (a, b) => {
//   //primaryNumber is set to the smaller number
//   const primaryNumber = a > b ? b : a;
//   const secondaryNumber = a > b ? a: b;
//   if (secondaryNumber%primaryNumber === 0) {
//     return primaryNumber;
//   }
//   const sqrtOfPrimary = Math.sqrt(primaryNumber);
//   let counter = Math.ceil(sqrtOfPrimary);
//   let result = 1;
//   while(counter > 1){
//   let divisibleNumber = null;    
//     if(primaryNumber % counter === 0) {
//       if( primaryNumber % ( primaryNumber/counter ) === 0){
//         divisibleNumber = primaryNumber/counter
//       }
//       //divisible Number is set to the larger number
//       divisibleNumber = divisibleNumber > counter ? divisibleNumber : counter;
//       if(secondaryNumber % divisibleNumber === 0) {
//         result = divisibleNumber;
//         break;
//       } else if (secondaryNumber % counter === 0){
//         result = counter;
//         break;
//       }
//     }
//     counter--;
//   }
//   return result;
// }

// console.log(greatestCommonDivisor(121, 44));

function greatestCommonDivisor(a, b){
  console.log(a, b);
   if(b == 0)
     return a;
   else 
     return greatestCommonDivisor(b, a%b);
}

console.log(greatestCommonDivisor(121, 44));
