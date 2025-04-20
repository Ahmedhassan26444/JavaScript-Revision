//switch statment 
let day = prompt("Enter a number (1-7) to know the day:");
day = Number(day);  // Convert the input to a number
let dayName;
switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}
alert(`The day is: ${dayName}`);

// if else

let marks = 85; 
let grade = 3;
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 80) {
    grade = 'B';
} else if (marks >= 70) {
    grade = 'C';
} else if (marks >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`Your grade is: ${grade}`);

//do while
let counter = 1;
do {
    console.log(`Counter is: ${counter}`);
    counter++;
} while (counter <= 5);