// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// var cityName = prompt("Enter the name of your city:");
// if (cityName.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights!");
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// }
// else {
//     (gender.toLowerCase() === "female")
//     alert("Good Morning Ma'am.");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var signalColor = prompt("Enter the color of the traffic signal:");

// if (signalColor.toLowerCase() === "red") {
//     alert("Stop!");
// }
// else if (signalColor.toLowerCase() === "yellow") {
//     alert("Ready to move!");
// }
// else if (signalColor.toLowerCase() === "green") {
//     alert("Move now");
// }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):");
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else {
//     alert("You have enough fuel in your car");
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }



// // a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// // b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// // c.
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e.
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

//     var subject1 = +prompt("Enter marks obtained in Subject 1:");
//     var subject2 = +prompt("Enter marks obtained in Subject 2:");
//     var subject3 = +prompt("Enter marks obtained in Subject 3:");
//     var totalMarks = 100;
//     var totalObtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
//     var grade;

//     if (percentage >= 80) {
//         grade = "A1<br> Remarks : Excellent";
//     }
//     else if (percentage >= 70) {
//         grade = "A<br> Remarks : Good";
//     }
//     else if (percentage >= 60) {
//         grade = "B<br> Remarks : You Need to Improve";
//     }
//     else {
//         grade = "Fail<br> Remarks : Sorry";
//     }

//     document.write("<h1>Marks Sheet</h1><br>")
//     document.write("Total Marks : " + (totalMarks * 3) + "<br>");
//     document.write("Marks Obtained : " + totalObtainedMarks + "<br>");
//     document.write("Percentage : " + percentage.toFixed(0) + "%<br>");
//     document.write("Grade: " + grade);


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = +prompt("Guess the secret number (between 1 and 10) :");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// }
// else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Wrong guess! The secret number was " + secretNumber);
// }


// 8. Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.

// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// }
// else {
//     alert(number + " is not divisible by 3.");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// }
// else {
//     alert(number + " is an odd number.");
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = +prompt("Enter the temperature:");

// if (temperature > 40) {
//     alert("It is too hot outside.");
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// }
// else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }
// else {
//     alert("The temperature is below 10. Stay warm!");
// }
