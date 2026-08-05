"use strict";

// ==========================================================================
// TASK 1 & TASK 2: REGISTRATION FORM VALIDATION & SUBMISSION
// ==========================================================================

// --- 1. DOM Elements ---
const form = document.getElementById("registrationForm");
const fullNameInput = document.getElementById("fullName");
const nameError = document.getElementById("nameError");

const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeatPassword");
const passwordError = document.getElementById("passwordError");
const submitErrorMessage = document.getElementById("submitErrorMessage");

// --- 2. Task 1: Full Name Events & Validation ---

// Focus Event: إظهار البوردر الأزرق
fullNameInput.addEventListener("focus", function () {
    fullNameInput.style.border = "solid 1px blue";
});

// Blur Event: إزالة البوردر وتطبيق التحقق
fullNameInput.addEventListener("blur", function () {
    fullNameInput.style.border = "";
    validateFullName();
});

function validateFullName() {
    const nameValue = fullNameInput.value.trim();
    let isValid = false;

    // الشرط: غير فارغ وأكبر من 5 حروف
    if (nameValue !== "" && nameValue.length > 5) {
        isValid = true;
    }

    if (!isValid) {
        nameError.style.display = "inline";
        fullNameInput.style.backgroundColor = "gray";

        setTimeout(() => {
            fullNameInput.focus();
            fullNameInput.select();
        }, 10);
    } else {
        nameError.style.display = "none";
        fullNameInput.style.backgroundColor = "white";
    }

    return isValid;
}

// --- 3. Task 1: Password Validation ---

repeatPasswordInput.addEventListener("blur", validatePasswords);

function validatePasswords() {
    const pass = passwordInput.value;
    const repeat = repeatPasswordInput.value;
    let isValid = false;

    // الشرط: الخانتين غير فارغتين ومطابقتين
    if (pass !== "" && repeat !== "" && pass === repeat) {
        isValid = true;
    }

    if (!isValid) {
        passwordError.style.display = "inline";
        repeatPasswordInput.style.backgroundColor = "gray";
    } else {
        passwordError.style.display = "none";
        repeatPasswordInput.style.backgroundColor = "white";
    }

    return isValid;
}

// --- 4. Task 2: Prevent Submission on Error ---

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateFullName();
    const isPasswordValid = validatePasswords();

    if (isNameValid && isPasswordValid) {
        submitErrorMessage.style.display = "none";
        form.submit();
    } else {
        submitErrorMessage.textContent = "Plz correct the validation errors first.";
        submitErrorMessage.style.display = "block";
    }
});


// ==========================================================================
// TASK 3: AUTOMATIC SLIDESHOW (USING ARRAY)
// ==========================================================================

const slideshowImage = document.getElementById("slideshowImage");
const playBtn = document.getElementById("playBtn");
const slideshowContainer = document.getElementById("slideshowContainer");

// مصفوفة الصور
const galleryImages = [
    "WhatsA1 Image 2026-07-26 at 8.51.53 PM.jpeg",
    "TThatsApp Image 2026-07-26 at 3.52.19 PM.jpeg",
    "WhatsA1 Image 2026-07-26 at 8.51.53 PM.jpeg",
    "TThatsApp Image 2026-07-26 at 3.52.19 PM.jpeg",
    "WhatsA1 Image 2026-07-26 at 8.51.53 PM.jpeg"
];

let currentIndex = 0;
let slideshowInterval = null;

function changeImage() {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    slideshowImage.src = galleryImages[currentIndex];
}

function startSlideshow() {
    // منع تكرار التايمر
    if (!slideshowInterval) {
        slideshowInterval = setInterval(changeImage, 1000);
    }
}

playBtn.addEventListener("click", startSlideshow);
