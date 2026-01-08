// Question 1: Variable Declarations and Initialization
let productName = "Laptop";
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);

// Question 2: Mathematical Operations
console.log("Remainder of 27 / 4:", 27 % 4);
console.log("Square of 12:", 12 ** 2);
let num = 8;
num++;
console.log("Incremented 8:", num);
let dec = 15;
dec -= 2;
console.log("15 after decrement by 2:", dec);

// Question 3: String Concatenation and Case Conversion
let firstName = "alex";
let lastName = "SMITH";
let fullName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + " " +
               lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
console.log("Full Name:", fullName);
console.log("Full Name Length:", fullName.length);

// Question 4: if-else Conditional Logic
let temperature = 25;
if (temperature > 30) {
    console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
} else {
    console.log("Cold day");
}

// Question 5: Comparison Operators
console.log(15 === "15"); // false
console.log(20 > 15 && 20 < 25); // true
console.log(10 !== 10 || 5 > 3); // true

// Question 6: Array Manipulation - Basics
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log("Colors Array:", colors);
console.log("Colors Length:", colors.length);

// Question 7: Array Manipulation - splice()
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1); // remove cherry
fruits.splice(2, 1, "dragonfruit"); // replace date
let middleFruits = fruits.slice(1, 4); // middle 3 elements
console.log("Updated Fruits:", fruits);
console.log("Middle 3 Fruits:", middleFruits);

// Question 8: for Loop - Number Sequence
let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 9) break;
    console.log(i);
    sum += i;
}
console.log("Sum:", sum);

// Question 9: Nested for Loop - Pattern
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Question 10: String Methods - Search and Extract
let text = "The quick brown fox jumps over the lazy dog";
console.log("Position of 'fox':", text.indexOf("fox"));
console.log("Extract 'brown fox':", text.slice(10, 19));
console.log("Contains 'dog'?", text.includes("dog"));
console.log("Character at position 10:", text.charAt(10));

// Question 11: String Replacement
let sentence = "I love JavaScript and JavaScript is awesome";
console.log(sentence.replace("JavaScript", "coding"));
console.log(sentence.replace(/JavaScript/g, "JS"));
console.log(sentence.replace("awesome", "AWESOME"));

// Question 12: Number Rounding and Formatting
let numValue = 123.456789;
console.log("Rounded to 2 decimals:", numValue.toFixed(2));
console.log("Rounded to nearest integer:", Math.round(numValue));
console.log("Floor value:", Math.floor(numValue));
console.log("Ceiling value:", Math.ceil(numValue));
console.log("Exactly 4 decimals:", numValue.toFixed(4));

// Question 13: Random Number Generation
console.log("Random integer 1-100:", Math.floor(Math.random() * 100) + 1);
console.log("Random decimal 0-1 (3 decimals):", Math.random().toFixed(3));
console.log("Random number 50-75:", Math.floor(Math.random() * (75 - 50 + 1)) + 50);

// Question 14: Type Conversion
console.log(Number("123"));
console.log(parseFloat("45.67"));
console.log(String(789));
console.log(Boolean("true"));

// Question 15: Date and Time Operations
let now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());
console.log("Day:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Formatted YYYY-MM-DD:", `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);
let specificDate = new Date("December 25, 2024");
console.log("Specific Date:", specificDate);

// Question 16: Function - Basic Calculator
function calculate(a, b, operator) {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return b === 0 ? "Error: Division by zero" : a / b;
    return "Invalid operator";
}
console.log(calculate(10, 2, "+"));

// Question 17: Function - Local vs Global Variables
let globalCounter = 0;
function incrementCounter() {
    let globalCounter = 0;
    globalCounter++;
    window.globalCounter++;
    console.log("Local Counter:", globalCounter);
    console.log("Global Counter:", window.globalCounter);
}
incrementCounter();
incrementCounter();

// Question 18: switch Statement - Day of Week
function getDayName(num) {
    switch(num) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}
console.log(getDayName(3));

// Question 19: while Loop - Countdown & Factorial
let count = 10;
while(count >= 1) {
    console.log(count);
    count--;
}
console.log("Blast off!");
let factorial = 1, n = 5;
while(n > 1) {
    factorial *= n;
    n--;
}
console.log("Factorial of 5:", factorial);

// Question 20: do...while Loop - Password Simulation
let enteredPassword = "";
let attempts = 0;
do {
    attempts++;
    // simulation: let's assume correct password on attempt 3
    enteredPassword = attempts === 3 ? "secret123" : "";
    console.log("Attempt", attempts);
} while(enteredPassword !== "secret123" && attempts < 5);
console.log(enteredPassword === "secret123" ? "Password accepted" : "Max attempts reached");

// Question 21: Array Methods with for Loop
let numbers = [12, 45, 78, 23, 56, 89, 34];
let max = numbers[0], sumNumbers = 0, greater50 = [], reversed = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max) max = numbers[i];
    sumNumbers += numbers[i];
    if(numbers[i] > 50) greater50.push(numbers[i]);
}
for(let i = numbers.length-1; i >=0; i--) reversed.push(numbers[i]);
console.log("Max:", max);
console.log("Average:", sumNumbers/numbers.length);
console.log("Numbers > 50:", greater50);
console.log("Reversed array:", reversed);

// Question 22: Event Handling Simulation
function handleClick() {
    let username = document.getElementById("username").value;
    let greeting = document.getElementById("greeting");
    if(username.trim() === "") {
        alert("Username cannot be empty!");
    } else {
        greeting.textContent = `Welcome, ${username}!`;
        document.getElementById("username").value = "";
    }
}

// Question 23: Form Validation Function
function validateForm(email, password) {
    if(!email.includes("@")) {
        console.log("Error: Email must contain @");
        return false;
    }
    if(password.length < 8) {
        console.log("Error: Password must be at least 8 characters");
        return false;
    }
    return true;
}
console.log(validateForm("test@example.com", "mypassword"));

// Question 24: Temperature Converter
function convertTemperature(temp, unit) {
    if(unit === "C") return ((temp * 9/5) + 32).toFixed(1);
    if(unit === "F") return ((temp - 32) * 5/9).toFixed(1);
    return "Invalid unit";
}
console.log(convertTemperature(100, "C"));
console.log(convertTemperature(212, "F"));

// Question 25: Shopping Cart Array Operations
let cart = [];
function addItem(name, price) {
    cart.push({name, price});
}
function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
}
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}
function applyDiscount(percent) {
    let total = calculateTotal();
    return total - (total * percent / 100);
}
function listItems() {
    return cart.map(item => item.name);
}

// Example usage
addItem("Laptop", 1000);
addItem("Mouse", 50);
console.log("Cart Items:", listItems());
console.log("Total Price:", calculateTotal());
console.log("Price after 10% discount:", applyDiscount(10));
removeItem("Mouse");
console.log("Cart Items after removal:", listItems());