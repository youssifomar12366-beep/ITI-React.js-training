"use strict";

/*====================================
Assignment 1
Tip Of The Day
====================================*/
// tips.lengthاستخدمت هنا طول المصفوفه علشان لو زوتها في المستقبل  
// Math.floor(Math.random() دي بختار رقم عشوائى من 0:1 وبعدين يحول الكسر لرقم 
var tips = [
    "Always use === instead of ==.",
    "Use const whenever possible.",
    "Keep your code clean.",
    "Validate user input.",
    "Use meaningful variable names.",
    "Avoid duplicate code.",
    "Practice JavaScript every day.",
    "Use comments when needed.",
    "Use array methods when possible.",
    "Debug using console.log()."
];

window.onload = function () {

    var random = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").innerHTML =
        "Tip Of The Day : " + tips[random];

};



/*====================================
Assignment 2
Show Date & Time
====================================*/
//.toLocaleString()استخدمتها هنا علشان تظبط شكل العرض  التاريخ مع لغة الجهاز
function showDateTime() {

    const now = new Date();

    document.getElementById("dateOutput").innerHTML =
        now.toLocaleString();

}


/*====================================
Assignment 3
Email Validation
(String Functions Only)
====================================*/

function checkEmailString() {

    var email = prompt("Enter Your Email");

    if (email == null)
        return;

    email = email.trim();

    var at = email.indexOf("@");

    if (at > 0 && at < email.length - 1) {

        alert("Valid Email");

    }

    else {

        alert("Invalid Email");

    }

}



/*====================================
Assignment 4
Regex Validation
====================================*/

function validatePromptData() {

    var fullNameRegex =
        /^[A-Za-z]{3,}( [A-Za-z]{3,})*$/;

    var emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;


    var fullName;

    do {

        fullName = prompt("Enter Full Name");

        if (fullName == null)
            return;

    }

    while (!fullNameRegex.test(fullName));



    var email;

    do {

        email = prompt("Enter Egyptian Email");

        if (email == null)
            return;

    }

    while (!emailRegex.test(email));


    alert("Data Entered Successfully");

}



/*====================================
Assignment 5
Pattern Attribute
====================================*/

var form = document.getElementById("patternForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Correct Full Name");

});
/*====================================
Assignment 6
Array Methods
====================================*/

function task6() {

    var grades = [60, 100, 10, 15, 85];

    grades.sort(function (a, b) {
        return b - a;
    });

    var highest = grades.find(function (grade) {
        return grade <= 100;
    });

    var failed = grades.filter(function (grade) {
        return grade < 60;
    });

    document.getElementById("task6Output").innerHTML =
        "Sorted Descending : " + grades.join(", ") +
        "<br><br>Highest Grade : " + highest +
        "<br><br>Grades Below 60 : " + failed.join(", ");

}



/*====================================
Assignment 7
Array Of Objects
====================================*/
function task7() {

    var students = [
        { name: "Ahmed", degree: 95 },
        { name: "Ali", degree: 55 },
        { name: "Sara", degree: 88 },
        { name: "Mona", degree: 100 },
        { name: "Omar", degree: 40 }
    ];

    // Find
    var excellent = students.find(function (student) {
        return student.degree >= 90 && student.degree <= 100;
    });

    // Filter
    var failed = students.filter(function (student) {
        return student.degree < 60;
    });

    // Push
    students.push({ name: "Youssef", degree: 75 });

    var text = "<b>After Push:</b><br>";

    for (var i = 0; i < students.length; i++) {
        text += students[i].name + " - " + students[i].degree + "<br>";
    }

    // Pop
    students.pop();

    text += "<br><b>After Pop:</b><br>";

    for (var i = 0; i < students.length; i++) {
        text += students[i].name + " - " + students[i].degree + "<br>";
    }

    // Sort
    students.sort(function (a, b) {

        if (a.name > b.name) {
            return 1;
        }

        if (a.name < b.name) {
            return -1;
        }

        return 0;

    });

    text += "<br><b>After Sort:</b><br>";

    for (var i = 0; i < students.length; i++) {
        text += students[i].name + " - " + students[i].degree + "<br>";
    }

    // Splice
    students.splice(2, 0,
        { name: "Mahmoud", degree: 70 },
        { name: "Nour", degree: 99 });

    students.splice(3, 1);

    text += "<br><b>After Splice:</b><br>";

    for (var i = 0; i < students.length; i++) {
        text += students[i].name + " - " + students[i].degree + "<br>";
    }

    text += "<br>";

    if (excellent) {
        text += "<br>Student Between 90 And 100 : " + excellent.name;
    }

    text += "<br><br>Students Below 60:<br>";

    for (var i = 0; i < failed.length; i++) {
        text += failed[i].name + "<br>";
    }

    document.getElementById("task7Output").innerHTML = text;

}

/*====================================
Assignment 8
Birth Date
====================================*/
function showBirthDate() {

    var birthDate = prompt("Enter Birth Date (DD/MM/YYYY)");

    if (birthDate == null)
        return;

    if (birthDate.length != 10 || birthDate.charAt(2) != "/" ) {

        alert("Wrong Date Format");
        return;
    }

    var day = birthDate.substring(0, 2);
    var month = birthDate.substring(3, 5);
    var year = birthDate.substring(6, 10);

    var date = new Date(year, month - 1, day);

    alert(date.toDateString());

}