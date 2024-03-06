function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Main function to use the helper function
  function main() {
    // Example: Check if 17 is a prime number
    let numberToCheck = 17;
  
    if (isPrime(numberToCheck)) {
      console.log(numberToCheck + " is a prime number.");
    } else {
      console.log(numberToCheck + " is not a prime number.");
    }
  }
  
  // Call the main function to execute the code
  main();
  