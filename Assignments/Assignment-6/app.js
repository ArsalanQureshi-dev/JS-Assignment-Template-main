// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// document.write("Results : <br>");

// var num1 = +prompt("Enter Your Number");
// document.write("The Value of a is: " + num1, "</br>", '-----------------------', "</br>", "<br>");

// var num2 = ++num1;
// document.write("The Value of ++a is: " + num2, "<br>", "Now the value of a is: ", num2, "<br>", "<br>");

// var num3 = num2;
// var num4 = ++num2;
// document.write("The Value of a++ is: " + num3, "<br>", "Now the value of a is: ", num4, "<br>", "<br>");

// var num5 = --num4;
// document.write("The Value of --a is: " + num4, "<br>", 'Now the value of a is: ', num5, "<br>", "<br>");

// var num6 = --num5;
// document.write("The Value of a-- is: " + num4, "<br>", 'Now the value of a is: ', num6, "<br>", "<br>");



// 3. Write a program that takes input a name from user &
// greet the user.

// var userName = prompt("Enter Your Name");
// alert("Welcome " + userName);


// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// var table = +prompt("Please enter a which tables number")
// document.write("<h2>Multiplication Table   " + table + " </h2></br>");
// for (i = 1; i <= 10; i++) {
//     document.write(table + ' x ', i, ' = ', table * i + '</br>')
// }


// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarksSubject1 = +prompt("Enter the obtained marks for " + subject1 + ":");
var obtainedMarksSubject2 = +prompt("Enter the obtained marks for " + subject2 + ":");
var obtainedMarksSubject3 = +prompt("Enter the obtained marks for " + subject3 + ":");
var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
var percentage1 = (obtainedMarksSubject1 / totalMarks) * 100;
var percentage2 = (obtainedMarksSubject2 / totalMarks) * 100;
var percentage3 = (obtainedMarksSubject3 / totalMarks) * 100;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
var table = '<table>' +
    '<tr>' +
    '<th>Subject</th>' +
    '<th>Total Marks</th>' +
    '<th>Obtained Marks</th>' +
    '<th>Percentage</th>' +
    '</tr>' +
    '<tr>' +
    '<td>' + subject1 + '</td>' +
    '<td>' + totalMarks + '</td>' +
    '<td>' + obtainedMarksSubject1 + '</td>' +
    '<td>' + percentage1 + '%' + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' + subject2 + '</td>' +
    '<td>' + totalMarks + '</td>' +
    '<td>' + obtainedMarksSubject2 + '</td>' +
    '<td>' + percentage2 + '%' + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' + subject3 + '</td>' +
    '<td>' + totalMarks + '</td>' +
    '<td>' + obtainedMarksSubject3 + '</td>' +
    '<td>' + percentage3 + '%' + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="1"></td>' +
    '<td colspan="1"><strong>' + (totalMarks * 3) + '</strong></td>' +
    '<td colspan="1"><strong>' + totalObtainedMarks + '</strong></td>' +
    '<td colspan="1"><strong>' + totalPercentage.toFixed(0) + '%' + '</strong></td>' +
    '</tr>' +
    '</table>';
document.write(table);