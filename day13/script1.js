// بنمسك شريط الميزانية ومكان عرض الرقم من الـ HTML
var budgetInput = document.getElementById("budget");
var budgetDisplay = document.getElementById("budgetDisplay");

// كل ما المستخدم يحرك الشريط (input event)، بنحدث الرقم المكتوب
budgetInput.addEventListener("input", function() {
    budgetDisplay.textContent = budgetInput.value;
});