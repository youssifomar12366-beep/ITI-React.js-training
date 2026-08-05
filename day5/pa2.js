

// ==========================================
// Task 1 : Welcome Message
// ==========================================

alert("Welcome to my site");

var userName = prompt("Please enter your name:");

document.write("<h2>Welcome " + userName + "</h2>");
document.write("<hr>");


// ==========================================
// Task 2 : Sum Function
// ==========================================

function sum(num1, num2) {
    return num1 + num2;
}

function calculateSum() {

    var num1 = parseInt(prompt("Enter first number:"));
    var num2 = parseInt(prompt("Enter second number:"));

    var result = sum(num1, num2);

    console.log("The Sum = " + result);
}


// ==========================================
// Task 3 : Temperature Check (Ternary)
// ==========================================

function checkTemperature() {

    var temp = parseInt(prompt("Enter Temperature:"));

    var message = (temp >= 30) ? "HOT" : "Cold";

    console.log("Temperature " + temp + " is: " + message);
}


// ==========================================
// Task 4 : Temperature & Actual Feel
// ==========================================

function checkWeather() {

    var temp = parseInt(prompt("Enter Temperature:"));
    var actualFeel = parseInt(prompt("Enter Actual Feel:"));

    if (temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30) {
        console.log("Normal");
    }
    else if (temp < 25 && actualFeel < 25) {
        console.log("Cold");
    }
    else if (temp > 30 && actualFeel > 30) {
        console.log("Hot");
    }
    else {
        console.log("Ambiguous, can't detect");
    }
}


// ==========================================
// Task 5 : Faculty Check (Switch)
// ==========================================

function checkFaculty() {

    var faculty = prompt("Enter your faculty:");

    switch (faculty.toLowerCase()) {

        case "fci":
            console.log("You're eligible to Programming tracks");
            break;

        case "engineering":
            console.log("You're eligible to Network and Embedded tracks");
            break;

        case "commerce":
            console.log("You're eligible to ERP and Social Media tracks");
            break;

        default:
            console.log("You're eligible to SW Fundamentals track");
    }
}


// ==========================================
// Task 6 : Print Odd Numbers
// ==========================================

function printOddNumbers() {

    var start = Number(prompt("Enter Start Number:"));
    var end = Number(prompt("Enter End Number:"));
    for( var i =start; i<=end ;i++){

         if(i %2!==0){

            console.log(i);
        }


    }
}
printOddNumbers()
// ==========================================
// Task 7 : Math Expression Evaluator
// ==========================================

function evaluateMath() {

    var expression = prompt("Enter Math Expression (Example: 3+5*2):");

    if (/^[0-9+\-*/(). ]+$/.test(expression)) {

        try {

            var result = new Function("return " + expression)();

            console.log("Expression = " + expression);
            console.log("Result = " + result);

        } catch {

            console.log("Invalid Expression!");

        }

    } else {

        console.log("Only numbers and math operators are allowed.");

    }

}


// ==========================================
// Task 8 : Contact Information
// ==========================================

function getContactInfo() {

    var name;

    do {

        name = prompt("Enter your name:");

    } while (!isNaN(name) || name == "");

    var birthYear;

    do {

        birthYear = parseInt(prompt("Enter Birth Year:"));

    } while (isNaN(birthYear) || birthYear >= 2010);

    var age = 2026 - birthYear;

    document.write("<h3>Contact Information</h3>");
    document.write("Name : " + name + "<br>");
    document.write("Birth Year : " + birthYear + "<br>");
    document.write("Age : " + age + "<hr>");

}


// ==========================================
// Task 9 : Debugging
// ==========================================

// ==========================================
// Task 9 : Debugging
// ==========================================

function testDebugger() {

    console.log("Program Started");

    console.warn("This is a Warning");

    var a = 10;
    var b = 20;

    if (a != b) {
        console.error("a is not equal to b");
    }

    console.table({
        FirstNumber: a,
        SecondNumber: b,
        Total: a + b
    });

    debugger;

    console.log("Total = " + (a + b));
}
