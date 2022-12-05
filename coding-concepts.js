// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: ["indigo", "tangerine", "magenta", "lilac", "daffodil" ]
// this should push "indigo" to the front of the array
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10, it will take the full length of "LEARN 2022" and put it a value
// b) Verify and explain: 10, returned a length property of the string

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: it will return the length property of the string [o] by referencing a single letter from the string
// b) Verify and explain: output "o" by returning the length property and refernecing the charater in the property outcome was returned

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: error index is not an function
// b) Verify and explain: output "ruby" arrray are zero index in this case the value is 1(length property) referencing "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: this code will give an error because this built in method .toUpperCase is not a function
// b) Verify and explain: output (TypeError: weekendDays.toUpperCase is not a function) we would have to turn this array into a sting and give it a variable to use this built in method

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: console.log will return the legth property
// b) Verify and explain: output "number" im predicting (typeof) is asking for the function instead of a value returning the function number
