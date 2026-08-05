
// ==========================================
// 1. DOM Manipulation
// ==========================================
document.getElementById('run-dom-btn').addEventListener('click', function() {
    var div = document.getElementById('dom-div');
    
    // a. إنشاء عنصر صورة جديد
    var imgNode = document.createElement('img');
    
    // b. تحديد مصدر الصورة وأبعادها
    imgNode.setAttribute('src', '3hatsApp Image 2026-07-26 at 8.51.53 PM.jpeg'); 
    imgNode.setAttribute('width', '100');
    
    //  إضافة الصورة داخل الـ div
    div.appendChild(imgNode);
    

    // استخدام setTimeout (100ms) لإعطاء فرصة للمتصفح ليرسم الصورة على الشاشة قبل ظهور الـ Alert


    setTimeout(function() {
        // d. عرض عدد عناصر childNodes داخل الـ div
        alert("Number of child nodes: " + div.childNodes.length);
        
           
        // e. حذف الصورة المضافة
        div.removeChild(imgNode);
    }, 100);
});

// ==========================================
// 2 & 6. 5-Star Rating Control
// ==========================================
var stars = document.querySelectorAll('.star');
var fixedRating = 0; // لحفظ التقييم الذي تم الضغط عليه

stars.forEach((star, index) => {
    // a. When mouse over it, it converts to filled star
    star.addEventListener('mouseover', () => {
        fillStarsUpTo(index + 1);
    });

    // b. When mouse move away, it changes back to empty (or fixed)
    star.addEventListener('mouseout', () => {
        fillStarsUpTo(fixedRating);
    });

    // c & d. Click to fix or reset
    star.addEventListener('click', () => {
        var clickedRating = index + 1;
        // لو ضغطنا على نفس التقييم المثبت، نلغيه (ترجع نجوم فارغة)
        if (fixedRating === clickedRating) {
            fixedRating = 0;
        } else {
            // لو ضغطنا على تقييم جديد، نثبته
            fixedRating = clickedRating;
        }
        fillStarsUpTo(fixedRating);
    });
});

// دالة مساعدة لتعبئة النجوم بناءً على العدد المرر لها
function fillStarsUpTo(count) {
    stars.forEach((s, i) => {
        if (i < count) {
            s.setAttribute('src', 'SMhatsApp Image 2026-07-28 at 1.00.07 PM.jpeg'); // نجمة ممتلئة
        } else {
            s.setAttribute('src', 'SFhatsApp Image 2026-07-28 at 1.00.07 PM.jpeg');  // نجمة فارغة
        }
    });
}


// ==========================================
// 3. Search Textbox Animation (JS Only)
// ==========================================
const searchBox = document.getElementById('search-box');
let animationTimer;
let currentWidth = 100; // العرض الأولي
const maxWidth = 250;
const minWidth = 100;

searchBox.addEventListener('focus', () => {
    clearInterval(animationTimer); // إيقاف أي حركة سابقة
    animationTimer = setInterval(() => {
        if (currentWidth >= maxWidth) {
            clearInterval(animationTimer);
        } else {
            currentWidth += 5; // زيادة تدريجية
            searchBox.style.width = currentWidth + 'px';
        }
    }, 15);
});

searchBox.addEventListener('blur', () => {
    clearInterval(animationTimer);
    animationTimer = setInterval(() => {
        if (currentWidth <= minWidth) {
            clearInterval(animationTimer);
        } else {
            currentWidth -= 5; // نقصان تدريجي
            searchBox.style.width = currentWidth + 'px';
        }
    }, 15);
});


// ==========================================
// 4. Image Slideshow
// ==========================================
const slides = [
    { src:'3hatsApp Image 2026-07-26 at 8.51.53 PM.jpeg', desc: 'Description for Image 1' },
    { src:'WhatsApp Image 2026-07-26 at 3.52.19 PM.jpeg', desc: 'Description for Image 2' },
    { src:'1hatsApp Image 2026-07-26 at 8.51.53 PM.jpeg', desc: 'Description for Image 3' }
];

let slideIndex = 1;
let slideInterval;
const slideImg = document.getElementById('slide-img');
const slideDesc = document.getElementById('slide-desc');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSlide() {
    slideImg.src = slides[slideIndex].src;
    slideDesc.textContent = slides[slideIndex].desc;
}

// a. Start automatically when page loads
function startSlideshow() {
    slideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length; // التنقل الدائري
        updateSlide();
    }, 2000); // تتغير كل ثانيتين
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

startSlideshow();

// b & c. Mouse over/out on image
slideImg.addEventListener('mouseover', () => {
    stopSlideshow();
    slideDesc.classList.remove('hidden'); // إظهار الوصف
});

slideImg.addEventListener('mouseout', () => {
    slideDesc.classList.add('hidden'); // إخفاء الوصف
    startSlideshow();
});

// d. Mouse over/out on buttons
prevBtn.addEventListener('mouseover', stopSlideshow);
prevBtn.addEventListener('mouseout', startSlideshow);
nextBtn.addEventListener('mouseover', stopSlideshow);
nextBtn.addEventListener('mouseout', startSlideshow);

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener('click', () => {

    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlide();
});


// ==========================================
// 5. Drag and Drop
// ==========================================
const dragItem = document.getElementById('drag-item');
const dropZone = document.getElementById('drop-zone');

dragItem.addEventListener('dragstart', (e) => {
    // المتصفح يحفظ مكان الصورة الأصلي تلقائياً
    // لو لم يتم إفلاتها في مكان مسموح، ستعود (Snap back) لمكانها الأصلي بفضل الـ HTML5
});

// السماح بإفلات العنصر عن طريق منع السلوك الافتراضي
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); 
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    // b. Change the div background when the image is dropped over it
    dropZone.style.backgroundColor = 'blue';
    dropZone.textContent = "Dropped!";
    

});


// ==========================================
// 5 Form + Gender Dropdown
// ==========================================
const userNameInput = document.getElementById('user-name');
const userGenderSelect = document.getElementById('user-gender');
const greetingMsg = document.getElementById('greeting-msg');

function updateGreeting() {
    let name = userNameInput.value.trim();
    let gender = userGenderSelect.value;
    
    if (name !== "" && gender !== "") {
        let title = (gender === 'Male') ? 'Mr.' : 'Ms.';
        greetingMsg.textContent = `Your Name: ${title} ${name}`;
    } else {
        greetingMsg.textContent = "";
    }
}

// التحديث يعمل سواء كتب الاسم أولاً أو اختار النوع أولاً
userGenderSelect.addEventListener('change', updateGreeting);
userNameInput.addEventListener('input', updateGreeting);