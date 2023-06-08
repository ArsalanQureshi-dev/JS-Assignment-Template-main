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

var signalColor = prompt("Enter the color of the traffic signal:");

if (signalColor.toLowerCase() === "red") {
    alert("Stop!");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to Move!");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move Now");
}