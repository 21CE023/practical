// Function to calculate factorial using recursion
function factorialRecursive(num) {
    // Nested function to perform the factorial calculation
    function calculateFactorial(n) {
      if (n === 0) {
        return 1;
      } else {
        return n * calculateFactorial(n - 1);
      }
    }
  
    // Invoke the nested function to calculate factorial
    return calculateFactorial(num);
  }
  
  // Global variable
  let globalVar = "I am a global variable.";
  
  // Main function
  function main() {
    // Local variable
    let localVar = "I am a local variable.";
  
    // Accessing global variable
    console.log("Accessing global variable:", globalVar);
  
    // Accessing local variable
    console.log("Accessing local variable:", localVar);
  
    // Calculating factorial using recursion
    let num = 5;
    let result = factorialRecursive(num);
    console.log(`Factorial of ${num} is:`, result);
  }
  
  main();
  
  // Attempting to access the local variable outside its scope
  // This will result in an error because 'localVar' is not defined in the global scope.
  // console.log("Trying to access local variable outside its scope:", localVar);  