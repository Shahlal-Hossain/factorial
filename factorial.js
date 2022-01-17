


function calculatorFactorial(numbers){
  factorial = 1;
  for (let i = 1; i <=numbers; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(calculatorFactorial(17))
console.log(calculatorFactorial(100))
console.log(calculatorFactorial(50))
console.log(calculatorFactorial(10))

//======================///
function calculateFactorial(num) {
   if (num === 0 || num === 1) {
     return 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
}

let factorial_7 = calculateFactorial(10);
console.log(factorial_7);


// =====arrayFactorial====//
function arrayFactorial(){
  let evenNumbers = []
  let oddNumbers = []
  for(let i = 1; i<=100; i++){
    if(i % 2 == 0){
      evenNumbers.push(i)

      return evenNumbers;
    }
    else if(i % 2 == 1){
      oddNumbers.push(i)

      return oddNumbers;
    }
  }
}
console.log(arrayFactorial())


//==== copy (usar number- website) ====//

function colFactorial(){
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
}
colFactorial()



