// 🚀 PART 1: Variables, Data Types & Conditionals
let userName = prompt("Enter your name:");
let userAge = Number(prompt("Enter your age:"));

if (userAge >= 18) {
  document.getElementById("welcome").textContent =
    `Welcome ${userName}, you are allowed to access this page!`;
} else {
  document.getElementById("welcome").textContent =
    `Sorry ${userName}, you must be 18 or older.`;
}

// 🚀 PART 2: Functions — Reusable Logic
function calculateTotal(price, quantity) {
  return price * quantity;
}

function greetUser(name) {
  alert(`Hello, ${name}! Nice to see you.`);
}

// attach greeting to a button
document.getElementById("greet-btn").addEventListener("click", () => {
  greetUser(userName);
});

// 🚀 PART 3: Loops — Repetition
// Example 1: Loop through an array and add items to DOM
const products = ["Laptop", "Phone", "Headphones"];
const productList = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {
  let li = document.createElement("li");
  li.textContent = `${products[i]} - Total Price: $${calculateTotal(50, i + 1)}`;
  productList.appendChild(li);
}

// Example 2: Countdown using while loop
document.getElementById("countdown-btn").addEventListener("click", () => {
  let count = 5;
  let countdownInterval = setInterval(() => {
    console.log(count);
    if (count === 0) {
      console.log("Countdown complete!");
      clearInterval(countdownInterval);
    }
    count--;
  }, 1000);
});

// 🚀 PART 4: DOM Manipulation
// 1. Change text dynamically already shown above
// 2. Toggle a CSS class on button click
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
});

// 3. Create a new element on the fly
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JavaScript!";
document.body.appendChild(newPara);
