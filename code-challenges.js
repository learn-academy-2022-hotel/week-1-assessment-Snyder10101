// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Function Signature
// input: strings √
// output: string indicating which of the two strings has more characters √

// input: "apple", "banana"
// output: "Banana has more characters than apple"

// input: "cherry", "kiwi"
// output: "Cherry has more characters than kiwi"

// Process √
// create a function called bigFruit that takes in a set of strings called fruit1, fruit2 and fruit3, fruit4
// if fruit1 has more characters than fruit2 return fruit1 has more characters than fruit2
// any other condition return fruit2 has more characters than fruit1
// if fruit3 has more characters than fruit4 return fruit3 has more characters than fruit4
// any other condition return fruit4 has more characters than fruit3
// string interpolation for the return statement

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// function
// input: string
// output: determines value is below boiling point, at boiling point, or above boiling point

// input: if the variable is (less then or equal) => 43 
// output: "42 is below boiling point"

// input: if the variable is (greater or equal) <= 350
// output: "350 is above boiling point"

// input: if the variable is (strictly equal) === 212
// output: "212 is at boiling point"
const temp1 = 42 
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"
const temperatures = (degree) => {
    if (degree === 42){
    return "42 is below boiling point"
} else if (degree === 350){
    return "350 is above boiling point"
} else if (degree === 212){
    return "212 is at boiling point"
 }
}
console.log(temperatures(temp1))
// output: 42 is below boiling point
console.log(temperatures(temp2))
// output: 350 is above boiling point
console.log(temperatures(temp3))
// output: 212 is at boiling point

//PROCESS: 
// 1. Create a function "tempertures" this will be my const variable
// 2. Create a string "degree" Making my function reuseable and be able to expand on
// 3. Use ( if , else if , return) to make mutilple inputs and outputs 
// 4. input: if the variable is (less then or equal) => 43 
//    output: "42 is below boiling point"
// 5. input: if the variable is (greater or equal) <= 350
//    output: "350 is above boiling point"
// 6. input: if the variable is (strictly equal) === 212
//    output: "212 is at boiling point"


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// create a variable 
// used an accessor to combine the variables with arrays
// use a length property with the created variable (that has the arrays combo)
// to get expected output

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

let padresRun = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(padresRun.length)
// output: 9
// PROCESS:
// 1. I created my variable "padresRun"
// 2. used an accessor (.concat) to combine the variables with arrays
// 3. ran console.log(padresRun.length) to output 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 
// put [] around "hotel 2022"
// crate a mutator that reverse "Hotel 2022" i will use .reverse
// console.log the variable with the mutator with the expected outcome
// "2202 letoH"

const currentCohort = ["Hotel 2022"]
const HotelCohort = (currentCohort.reverse(currentCohort))
// Expected output: "2202 letoH"
console.log(HotelCohort)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
