// Function to calculate the sum of two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Main program
function main() {
    // Declare and initialize variables of different data types
    let name = "Jyot Delvadiya";  // string variable
    let age = 30;           // number (integer) variable
    let height = 1.75;      // number (float) variable
    let isStudent = true;   // boolean variable

    // Display the values of the variables
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Height:", height);
    console.log("Is Student:", isStudent);

    // Get two numbers from the user and calculate their sum using the function
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let result = addNumbers(num1, num2);
    console.log("Sum of the two numbers:", result);
}

main();