

/*==========================
Assignment 9
==========================*/
var txtKey = document.getElementById("txtKey");
txtKey.addEventListener("keydown", function (event) {
    alert("Key Code = " + event.keyCode);
});

var mouseBtn = document.getElementById("mouseBtn");
mouseBtn.addEventListener("mousedown", function (event) {
    if (event.button == 0) {
        alert("Left Mouse Button");
    } else if (event.button == 1) {
        alert("Middle Mouse Button");
    } else if (event.button == 2) {
        alert("Right Mouse Button");
    }
});

/*==========================
Assignment 10
==========================*/
var startClock = document.getElementById("startClock");
var clock = document.getElementById("clock");
var timer;

startClock.addEventListener("click", function () {
    alert("Clock Started");
    timer = setInterval(function () {
        var now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
});

document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key.toLowerCase() == "w") {
        clearInterval(timer);
        alert("Clock Stopped");
    }
});

/*==========================
Assignment 11
==========================*/
var counter = 0;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

function imageClick() {
    counter++;
}

function showScore() {
    alert("Score = " + counter);
}

img1.onclick = imageClick;
img2.onclick = imageClick;
img3.onclick = imageClick;

img1.addEventListener("click", showScore);
img2.addEventListener("click", showScore);
img3.addEventListener("click", showScore);

setTimeout(function () {
    img1.removeEventListener("click", showScore);
    img2.removeEventListener("click", showScore);
    img3.removeEventListener("click", showScore);

    img1.addEventListener("click", function () {
        alert("Game Over");
    });
    img2.addEventListener("click", function () {
        alert("Game Over");
    });
    img3.addEventListener("click", function () {
        alert("Game Over");
    });
}, 3000);

/*==========================
Assignment 13
==========================*/
var adWindow; 
var openAdBtn = document.getElementById('openAd');
var closeAdBtn = document.getElementById('closeAd');

openAdBtn.addEventListener('click', function (e) {
    
    
    setTimeout(function () {
        adWindow = window.open("", "AdWindow", "width=400,height=400");
        if (adWindow) {
            var longText = "<p>This is a long advertising paragraph trying to sell you something awesome!</p>".repeat(15);
            adWindow.document.write(longText);
        }
    }, 3000);
});

closeAdBtn.addEventListener('click', function (e) {
;
    if (adWindow) {
        adWindow.close(); 
    }
});
/*==========================
Assignment 14
==========================*/
const viewTermsBtn = document.getElementById('viewTerms');

viewTermsBtn.addEventListener('click', function () {
    window.open('terms.html', '_blank');
});

/*==========================
Assignment 15
==========================
بتمنعه انه يكتب preventDefault()  بنكشف علي كود الزرار اللي دوست عليه ولما بنلاقيه محظور */
const firstNameInput = document.getElementById('firstName');

firstNameInput.addEventListener('keydown', function (e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        e.preventDefault(); 
    }
});