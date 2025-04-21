console.log(Math.abs(-5)); // 5
console.log(Math.abs(5));  // 5


console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(4.9)); // 5


console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.2)); // 4


console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4


console.log(Math.max(1, 3, 2));  // 3
console.log(Math.max(-5, -1, -10));  // -1


console.log(Math.min(1, 3, 2));  // 1
console.log(Math.min(-5, -1, -10));  // -10


console.log(Math.random()*10)+ 1; // Random number between 0 and 10



console.log(Math.pow(2, 3));  // 8  (2^3 = 8)
console.log(Math.pow(5, 2));  // 25 (5^2 = 25)


let specificDate = new Date(2025, 3, 22);  // Year, Month (0-based, 3 = April), Day
console.log(specificDate);  // Example: "2025-04-22T00:00:00.000Z"
