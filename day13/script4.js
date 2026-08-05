// ننتظر حتى تحميل عناصر الصفحة بالكامل لضمان عدم حدوث أخطاء
document.addEventListener("DOMContentLoaded", function() {
    
    var destinationInput = document.getElementById("destinationInput");
    var saveBtn = document.getElementById("saveBtn");
    var savedTripDisplay = document.getElementById("savedTripDisplay");

    // 1. عند فتح الصفحة: استرجاع القيمة المحفوظة سابقاً من localStorage
    var lastSavedTrip = localStorage.getItem("savedTrip");
    if (lastSavedTrip) {
        savedTripDisplay.textContent = "Last Saved Trip: " + lastSavedTrip;
    }

    // 2. استرجاع القيمة المؤقتة من sessionStorage
    var sessionValue = sessionStorage.getItem("currentSelection");
    if (sessionValue) {
        destinationInput.value = sessionValue;
    }

    // 3. حفظ المدخلات مؤقتاً أثناء الكتابة في sessionStorage
    destinationInput.addEventListener("input", function() {
        sessionStorage.setItem("currentSelection", destinationInput.value);
    });

    // 4. عند الضغط على زر الحفظ الدائم في localStorage
    saveBtn.addEventListener("click", function() {
        var tripValue = destinationInput.value.trim();
        
        // إذا كانت الخانة فارغة
        if (tripValue === "") {
            alert("Please type a destination first!");
            return;
        }

        // حفظ النص في LocalStorage
        localStorage.setItem("savedTrip", tripValue);
        
        // تحديث النص في الصفحة فوراً
        savedTripDisplay.textContent = "Last Saved Trip: " + tripValue;
        
        // إظهار رسالة تأكيد
        alert("Trip saved successfully to LocalStorage!");
    });

});