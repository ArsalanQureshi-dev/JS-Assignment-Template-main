// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num1 = +prompt("Enter the first number :");
// var num2 = +prompt("Enter the second number :");

// var total = (num1 + num2);
// document.write("<h1>Sum of  " + num1 + " and " + num2 + " is " + total + "</h1>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var number1 = +prompt("Enter the first number:");
// var number2 = +prompt("Enter the second number:");

// // Addition
// var sum = number1 + number2;

// // Subtraction
// var difference = number1 - number2;

// // Multiplication
// var product = number1 * number2;

// // Division
// var quotient = number1 / number2;

// // Modulus
// var remainder = number1 % number2;

// document.write("<h3> Addition: " + number1 + " + " + number2 + " = " + sum + "</h3><br>");
// document.write("<h3> Subtraction: " + number1 + " - " + number2 + " = " + difference + "</h3><br>");
// document.write("<h3> Multiplication: " + number1 + " * " + number2 + " = " + product + "</h3> <br>");
// document.write("<h3> Division: " + number1 + " / " + number2 + " = " + quotient + "</h3> <br>");
// document.write("<h3> Modulus: " + number1 + " % " + number2 + " = " + remainder + "</h3> <br>");


// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value Page 2 of 9 after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// // a: Declare a variable
// var myVariable;

// // b: Display the value after variable declaration
// document.write("<h3> Value after variable declaration is: " + myVariable + "</h3> <br>");

// // c: Initialize the variable with some number
// myVariable = 5;

// // d: Display the initial value
// document.write("<h3> Initial value: " + myVariable + "</h3> <br>");

// // e: Increment the variable
// myVariable++;

// // f: Display the value after increment
// document.write("<h3> Value after increment is: " + myVariable + "</h3> <br>");

// // g: Add 7 to the variable
// myVariable += 7;

// // h: Display the value after addition
// document.write("<h3> Value after addition is: " + myVariable + "</h3> <br>");

// // i: Decrement the variable
// myVariable--;

// // j: Display the value after decrement
// document.write("<h3>Value after decrement is: " + myVariable + "</h3> <br>");

// // k: Show the remainder after dividing the variable's value by 3
// var remainder = myVariable % 3;

// l: Display the remainder
// document.write("<h3> The remainder is: " + remainder + "</h3>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

// var ticketPrice = (600);
// var buying = +prompt("how much ticket");
// var sum = (ticketPrice * buying);

// document.write("<h4> Total cost to buy " + buying + " ticket to a movie is " + sum + "PKR</h4>");


// 5. Write a script to display multiplication table of any number in your browser. E.g

// var table = +prompt("which tables")
// document.write("<h2>Table of  " + table + " </h2></br>");
// for (i = 1; i <= 10; i++) {
//     document.write(table + ' X ', i, ' = ', table * i + '</br>')
// }


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Celsius to Fahrenheit conversion
// var celsiusTemperature = +prompt("Celsius temperature to convert");
// var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;

// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");


// // Fahrenheit to Celsius conversion
// var fahrenheitTemperature1 = +prompt("Fahrenheit temperature to convert");
// var celsiusTemperature1 = (fahrenheitTemperature1 - 32) * 5 / 9;

// document.write(fahrenheitTemperature1 + "°F is " + celsiusTemperature1 + "°C");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var priceItem1 = 650;
// var priceItem2 = 100;
// var qtyItem1 = 3;
// var qtyItem2 = 7;
// var shippingCharges = 100;

// var totalItem = priceItem1 * qtyItem1 + priceItem2 * qtyItem2 + shippingCharges;

// document.write("<h1>Shopping Cart</h1>");

// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantiy of item 1 is " + qtyItem1 + "<br>");
// document.write("Price of item 2 is " + priceItem2 + "<br>");
// document.write("Quantiy of item 2 is " + qtyItem2 + "<br>");
// document.write("ShippingCharges " + shippingCharges + "<br> <br>");
// document.write("Total cost of your order is " + totalItem);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
// your browser

// var totalMarks = +prompt("Total marks for the exam");
// var marksObtained = +prompt("Marks obtained by the student");
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total Marks : " + totalMarks + "<br>Marks Obtained : " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(13) + "%</p>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usDollar = 10;
// var riyal = 25;
// var totalCurrency = (usDollar * 104.8) + (riyal * 28);

// document.write("Total Currency in PKR : " + totalCurrency);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var number = 10;
// var total = ((number + 5) * 10 / 2);

// alert("Result: " + total);


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// var currentYear = +prompt("Current Year");
// var birthYear = +prompt("Birth Year");

// document.write("<h1>Age Calculator</h1><br><br>")
// document.write("Current Year : " + currentYear + "<br>");
// document.write("Birth Year : " + birthYear + "<br>");
// document.write("Your Age is : " + (currentYear - birthYear))


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = +prompt("Value of Radius");
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);

// document.write("<h1>The Geometrizer</h1> <br>");
// document.write("Radius of a circle " + radius + "<br>");
// document.write("The circumference is " + circumference.toFixed(14) + "<br>");
// document.write("The area is " + area.toFixed(1));


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


var favoriteSnack = "Chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var snackPerDay = 3;
var remainingAge = maximumAge - currentAge;
document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("Favorite Snack : " + favoriteSnack + "<br>" + "Current Age : " + currentAge + "<br>" + "Estimated Maximum Age : " + maximumAge + "<br>" + "Amount of Snack per day : " + snackPerDay + "<br>" + "You will need " + (remainingAge * snackPerDay) + " chocolate chip to last you until the ripe old age of " + maximumAge);
