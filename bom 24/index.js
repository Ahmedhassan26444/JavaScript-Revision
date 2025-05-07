alert("Hello!"); // same as window.alert("Hello!");
console.log(navigator.userAgent);
console.log(screen.width, screen.height);
console.log(location.href);  // current URL
location.href = "https://example.com"; // redirects
history.back(); // go back
history.forward(); // go forward
console.log(screen.width, screen.height); // Full screen size
setTimeout(() => alert("Waited 2 seconds"), 2000);
setInterval(() => console.log("Every 1 second"), 1000);
