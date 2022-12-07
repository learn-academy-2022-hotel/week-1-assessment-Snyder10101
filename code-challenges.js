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
// Function
const bigFruit = (value1, value2) => {
    if(value1.length > value2.length){
      return `${value1} has more characters than ${value2}`
    } else if(value1.length === value2.length) {
      return `${value1} has the same amount of characters as ${value2}`
    } else {
      return `${value2} has more characters than ${value1}`
    }
  }
  
  // console.log(bigFruit(fruit1, fruit2))
  // output: banana has more characters than apple

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
// 1. im going to turn my string into an array by use .split and give it its own variable
// 2. now that the string is converted into an array i will give the elements a variable
// 3. split the vaiables once again using same method as step one 
// 4. give the new splits new varables 
// 5. take my new varibales and use (.join) to turn my array into a string

const currentCohort = "Hotel 2022"
console.log(currentCohort.split())
let hotelCohort = (currentCohort.split())
console.log(hotelCohort)
let hotel1 ="2022"
let hotel3 ="hotel"
console.log(hotel1.split())
let hotel2 = (hotel1.split())
console.log(hotel2)
let hotel4 = (hotel3.split())
let hotel5 = (hotel2.join(""))
console.log(hotel5)
let hotel6 = (hotel4.join(""))
console.log(hotel5, hotel6)
// output: 2202 letoh
// Expected output: "2202 letoH"
// Process : make my array into a sting give my string variables
// maniuplate the sting by useing methods split and join

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// 1. make a variable by taking array (myNumbers) and index (givenValue1) = var (lastGivenValue1)
// 2. i will use method lastIndexOf. to give me last index of the given value

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1))
let lastGivenValue1 = ((myNumbers.lastIndexOf(givenValue1)))
console.log(lastGivenValue1)
// output: 7
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))
let lastGivenValue2 = (myNumbers.lastIndexOf(givenValue2))
// output 8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// 1. crate a variable using (let) and make an array with the new variable
// 2. i need use function of decending order of numbers so i will use the method (.sort)
// 3. in order to make my function work i need to make two arguments (a, b)
// 4. I need to do a comparison and by an arrow function of the two arguments 
// 5. the arguments will be palced (b - a) to put the arrray into decending largest to smallest
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
let tempHighToLow1 = [ 82, 80, 79, 77, 76, 73, 72]
/// descending order///
tempHighToLow1.sort((a, b) => b - a)
console.log(tempHighToLow1)
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
let tempHighToLow2 = [ 59, 68, 62, 59, 66, 67, 66]
// descending order///
tempHighToLow2.sort((a, b) => b - a)
console.log(tempHighToLow2)