

// Task 1

function loadUsersTask1() {
    let select1 = document.getElementById("usersSelect1");
    let btn1 = document.getElementById("showBtn1");
    let details1 = document.getElementById("userDetails1");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {
            select1.innerHTML = ""; 
            
            for (let i = 0; i < users.length; i++) {
                let option = document.createElement("option");
                option.value = users[i].id;
                option.innerHTML = users[i].name;
                select1.appendChild(option);
            }

            btn1.disabled = false;

            btn1.onclick = function() {
                let selectedId = select1.value;
                let selectedName = select1.options[select1.selectedIndex].text;
                
                let htmlContent = "<p>User ID: " + selectedId + "</p>";
                htmlContent += "<p>User Name: " + selectedName + "</p>";
                htmlContent += "<img src='https://robohash.org/" + selectedId + "' alt='User Image' width='100'>";
                
                details1.innerHTML = htmlContent;
            };
        });
}
loadUsersTask1();

// Task 2

async function loadUsersTask2() {
    let select2 = document.getElementById("usersSelect2");
    let btn2 = document.getElementById("showBtn2");
    let details2 = document.getElementById("userDetails2");

    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    select2.innerHTML = ""; 

    for (let i = 0; i < users.length; i++) {
        let option = document.createElement("option");
        option.value = users[i].id;
        option.innerHTML = users[i].name;
        select2.appendChild(option);
    }

    btn2.disabled = false;

    btn2.onclick = function() {
        let selectedId = select2.value;
        let selectedName = select2.options[select2.selectedIndex].text;
        
        let htmlContent = "<p>User ID: " + selectedId + "</p>";
        htmlContent += "<p>User Name: " + selectedName + "</p>";
        htmlContent += "<img src='https://robohash.org/" + selectedId + "?set=set2' alt='User Image' width='100'>";
        
        details2.innerHTML = htmlContent;
    };
}
loadUsersTask2();

// Task 3

let addPostBtn = document.getElementById("addPostBtn");
let postDetails = document.getElementById("postDetails");

addPostBtn.onclick = function() {
    let newPostObject = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPostObject),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let htmlContent = "<p>Post added successfully!</p>";
        htmlContent += "<p>ID: " + data.id + "</p>";
        htmlContent += "<p>Title: " + data.title + "</p>";
        htmlContent += "<p>Body: " + data.body + "</p>";
        htmlContent += "<p>User ID: " + data.userId + "</p>";
        postDetails.innerHTML = htmlContent;
    });
};

// Task 4

let startSequenceBtn = document.getElementById("startSequenceBtn");
let sequenceOutput = document.getElementById("sequenceOutput");

function waitThreeSeconds() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 3000);
    });
}

startSequenceBtn.onclick = function() {
    sequenceOutput.innerHTML = "<p>Waiting 3 seconds...</p>";

    waitThreeSeconds()
        .then(function() {
            sequenceOutput.innerHTML += "<p>Welcome message</p>";
            sequenceOutput.innerHTML += "<img src='https://robohash.org/student?set=set3' alt='Sequence User Image' width='100'>";
            sequenceOutput.innerHTML += "<p>Waiting another 3 seconds...</p>";
            return waitThreeSeconds();
        })
        .then(function() {
            sequenceOutput.innerHTML += "<p>Thanks message</p>";
            sequenceOutput.innerHTML += "<p>Redirecting to another page now...</p>";
            
            setTimeout(function() {
                window.location.href = "https://www.google.com";
            }, 1000);
        });
};

// Task 5

let proxyDemoBtn = document.getElementById("proxyDemoBtn");
let proxyOutput = document.getElementById("proxyOutput");

proxyDemoBtn.onclick = function() {
    let user = {
        name: "Youssif",
        age: 20
    };

    let userProxy = new Proxy(user, {
        get: function(target, property) {
            if (property in target) {
                return target[property];
            } else {
                return "Property not found in this object";
            }
        },
        set: function(target, property, value) {
            if (property === "age" && value < 0) {
                proxyOutput.innerHTML += "<p>Error: Age cannot be less than 0</p>";
            } else {
                target[property] = value;
            }
            return true;
        }
    });

    proxyOutput.innerHTML = "<p>Original Name: " + userProxy.name + "</p>";
    
    userProxy.age = 21; 
    proxyOutput.innerHTML += "<p>New Age: " + userProxy.age + "</p>";
    
    userProxy.age = -5; 
    
    proxyOutput.innerHTML += "<p>Missing Property (Grade): " + userProxy.grade + "</p>";
};

// Bonus

let bonusDemoBtn = document.getElementById("bonusDemoBtn");
let bonusOutput = document.getElementById("bonusOutput");

bonusDemoBtn.onclick = function() {
    bonusOutput.innerHTML = "";

    // Demo 1: Template Literals
    let studentName = "Youssif";
    let greeting = `Hello ${studentName}, welcome to ES.Next!`;
    bonusOutput.innerHTML += "<p><b>Template Literals:</b> " + greeting + "</p>";

    // Demo 2: Arrow Functions
    let multiply = (a, b) => a * b;
    let result = multiply(5, 4);
    bonusOutput.innerHTML += "<p><b>Arrow Functions:</b> 5 * 4 = " + result + "</p>";

    
    function showMessage(message = "This is a default message") {
        return message;
    }
    bonusOutput.innerHTML += "<p><b>Default Parameters:</b> " + showMessage() + "</p>";
};