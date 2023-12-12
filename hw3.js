// Firstly, let's get this out of the way, FizzBuzz is a task where the programmer is asked
// to print numbers from 1 to 100, but here’s the catch, multiple of three should print 'Fizz'
// and similarly print 'Buzz' for multiples of 5 and lastly print 'FizzBuzz' for multiples of three and five.

function fizzBuzzFunction(num) {
  for (let i = num; i > 0; i--) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzzFunction(100);
