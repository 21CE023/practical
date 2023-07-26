// Create an array of numbers
let numbersArray = [1, 2, 3, 4, 5];

// Find the length of the array
let arrayLength = numbersArray.length;
console.log("Length of the array:", arrayLength);

// Access and display specific elements using indexing
console.log("Element at index 0:", numbersArray[0]);
console.log("Element at index 2:", numbersArray[2]);

// Use array methods to modify the array
numbersArray.push(6);       // Add an element at the end
numbersArray.pop();         // Remove the last element
numbersArray.shift();       // Remove the first element
numbersArray.unshift(0);    // Add an element at the beginning
let joinedArray = numbersArray.join(", "); // Convert the array to a string with elements separated by ","
console.log("Modified array:", joinedArray);

delete numbersArray[1]; // Delete element at index 1 (Note: It will leave a hole in the array)

let newArray = [7, 8, 9];
let concatenatedArray = numbersArray.concat(newArray); // Concatenate two arrays
console.log("Concatenated array:", concatenatedArray);

let flattenedArray = [[1, 2], [3, 4], [5, 6]].flat(); // Flatten a nested array
console.log("Flattened array:", flattenedArray);

numbersArray.splice(1, 1, 10, 11); // Remove 1 element at index 1 and add 10, 11 at the same position
console.log("Array after splice:", numbersArray);

let slicedArray = numbersArray.slice(1, 4); // Create a new array by slicing elements from index 1 to 3 (4-1)
console.log("Sliced array:", slicedArray);

// Create an object representing a person
let person = {
    name: "Jyot Delvadiya",
    age: 19,
    gender: "Male"
};

// Function to display person's details
function displayPersonDetails(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Gender:", person.gender);
}

// Display person's details
displayPersonDetails(person);