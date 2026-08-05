console.log("----- Task 1: Arrow function with Array.filter() -----");
// Return odd numbers from an array[span_8](start_span)[span_8](end_span)
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = myNumbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);


myNumbers.forEach(num => {
    if (num % 2 === 0) {
        console.log("Even Number:", num);
    }
});


console.log("\n----- Task 3: array.map() -----");

let squares = myNumbers.map(num => num * num);
console.log("Squares:", squares);
 

console.log("\n----- Task 4: Arrow function 'this' Demo -----");

// 1. تعريف متغير عام برة الـ Object (هينزل جوه الـ window)
var name = "youssif";

let testObject = {
    name: "Ahmed",
    
    // (Normal Function)
    normalDemo: function() {
        setTimeout(function() {
        
            console.log("Normal Function 'this.name':", this.name);
        }, 1000);
    },
    
    // (Arrow Function)
    arrowDemo: function() {
        setTimeout(() => {
        
            console.log("Arrow Function 'this.name':", this.name);
        }, 1000);
    }
};

// تشغيل التجربة
testObject.normalDemo();
testObject.arrowDemo();


// Try them with an array[span_12](start_span)[span_12](end_span)
let sampleArray = [10, 20, 30];

for (let index in sampleArray) {
    console.log(index);
}

for (let value of sampleArray) {
    console.log(value);
}



console.log("\n----- Task 7: Try spread operator -----");
// Try spread operator with any array[span_13](start_span)[span_13](end_span)
let arrayOne = [1, 2, 3];
let arrayTwo = [...arrayOne, 4, 5, 6];
console.log("Spread Operator Result:", arrayTwo);


console.log("\n----- Task 8 & 9: Person Class -----");
// Create Person class with name, age, show(), and static whoAmI()[span_14](start_span)[span_14](end_span)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    static whoAmI() {
        console.log("I am a person");
    }
}
let person1 = new Person("youssif", 19);
person1.show();
Person.whoAmI();


console.log("\n----- Task 10 & 11: Student Class -----");
// Create Student class inherits from Person[span_15](start_span)[span_15](end_span)
class Student extends Person {
    constructor(name, age, university, faculty, finalGrade) {
        super(name, age);
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }
    
    // Print data using template literals[span_16](start_span)[span_16](end_span)
    printStudentData() {
        console.log(`${this.name} is a student in faculty of ${this.faculty} in university ${this.university}\nAnd his final grad is ${this.finalGrade}.`);
    }

    // Static method overrides parent[span_17](start_span)[span_17](end_span)
    static whoAmI() {
        console.log("I am a student");
    }
}
let student1 = new Student("Youssif", 20, "Minya", "Computers and Information", "Excellent");
student1.printStudentData();
Student.whoAmI();


console.log("\n----- Task 12: Mixin and Object.assign() -----");
// Create a mixin and add it to Student class[span_18](start_span)[span_18](end_span)
let studentMixin = {
    printName() {
        console.log("Mixin printName:", this.name);
    },
    printAge() {
        console.log("Mixin printAge:", this.age);
    }
};
// We add it to the prototype so all Student instances can access it
Object.assign(Student.prototype, studentMixin);
student1.printName();
student1.printAge();


console.log("\n----- Task 13: Set Operations -----");


let studentsSet = new Set(["youssif","Ali" , "Mona", "Omar"]);
studentsSet.add("Ali");
console.log("Set after trying to add 'Ali' again (It doesn't accept repeats):", studentsSet);

// Print values using spread operator and for...of[span_20](start_span)[span_20](end_span)
console.log("Set using spread operator:", [...studentsSet]);
console.log("Set using for...of:");



console.log("\n----- Task 14: Map and Looping -----");
// Make a Map with student name as key, and object of grades as value[span_21](start_span)[span_21](end_span)
let studentsMap = new Map();

studentsMap.set("Youssif", {
    Grades: [
        {Coursename: "JavaScript", Grade: "Excellent"},
        {Coursename: "Jquery", Grade: "Good"},
        {Coursename: "CSS", Grade: "V.Good"}
    ]
});

studentsMap.set("Mona", {
    Grades: [
        {Coursename: "JavaScript", Grade: "V.Good"},
        {Coursename: "Jquery", Grade: "Excellent"},
        {Coursename: "CSS", Grade: "Good"}
    ]
});

// Loop in the Map and display each student along with his grades[span_22](start_span)[span_22](end_span)
for (let [studentName, studentData] of studentsMap) {
    console.log(`-- Grades for ${studentName} --`);
    studentData.Grades.forEach(course => {
        console.log(`Course: ${course.Coursename} | Grade: ${course.Grade}`);
    });
}


// ----- Task 15: Dropdown list and Display Grades -----
// Fill dropdown list and display data on change[span_23](start_span)[span_23](end_span)
// 1. تحديد العناصر من الـ DOM
const dropdown = document.getElementById("students-dropdown");
const container = document.getElementById("grades-container");

// 2. ملء القائمة بأسماء الطلاب بسطر واحد جوه اللوب
for (let [studentName] of studentsMap) {
    dropdown.innerHTML += `<option value="${studentName}">${studentName}</option>`;
}

// 3. عند اختيار طالب، نجمع درجاته ونعرضها بـ innerHTML مباشرة
dropdown.onchange = function() {
    let selectedStudent = this.value;
    let studentData = studentsMap.get(selectedStudent);

    // بنجمع النص بتاع الـ HTML في متغير بسيط
    let content = `<h3>Grades for ${selectedStudent}</h3>`;
    
    studentData.Grades.forEach(course => {
        content += `<p><strong>${course.Coursename}:</strong> ${course.Grade}</p>`;
    });

    // نعرض النتيجة مرة واحدة جوه الـ container
    container.innerHTML = content;
};