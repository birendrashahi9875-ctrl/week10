// Ask user's name
let name = prompt("Enter your name:");

// Get current hour
let hour = new Date().getHours();

// Time-based greeting
if (hour < 12) {
    console.log("Good morning, " + name + "!");
} else if (hour < 18) {
    console.log("Good afternoon, " + name + "!");
} else {
    console.log("Good evening, " + name + "!");
}


// ===== Part 2: Age and Days Lived =====

// Ask birth year
let birthYear = prompt("Enter your birth year:");

// Convert to number
birthYear = Number(birthYear);

// Current year (you can also use new Date().getFullYear())
let currentYear = new Date().getFullYear();

// Calculate age
let age = currentYear - birthYear;

// Calculate days lived
let daysLived = age * 365;

// Print result
console.log("You are " + age + " years old.");
console.log("You have lived approximately " + daysLived + " days!");


// Age verification
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}