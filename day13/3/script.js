// الإمساك بعنصر الكانفاس وسياق الرسم
var canvas = document.getElementById("faceCanvas");
var ctx = canvas.getContext("2d");

//  رسم الوجه
function drawFace(isHappy, scale) {
    // 1. مسح الكانفاس بالكامل قبل الرسم الجديد
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. حفظ حالة الرسم الحالية
    ctx.save();

    // 3.  نقل مركز الكانفاس وتطبيق التكبير (Scaling)
    ctx.translate(canvas.width / 2, canvas.height / 2);
  // كبير العرض   
    ctx.scale(scale, 1); 

    // 4.  دائرة الوجه الخارجية
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2);
    ctx.fillStyle = "#ffeb3b";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#333";
    ctx.stroke();

    // 5.  العين اليسرى
    ctx.beginPath();
    ctx.arc(-35, -30, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#333";
    ctx.fill();

    // 6.  العين اليمنى
    ctx.beginPath();
    ctx.arc(35, -30, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#333";
    ctx.fill();

    // 7.الفم 
    ctx.beginPath();
    if (isHappy) {
        // قوس الابتسامة 
        ctx.arc(0, 20, 50, 0, Math.PI);
    } else {
        // قوس الحزن 
        ctx.arc(0, 60, 40, Math.PI, 0);
    }
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#333";
    ctx.stroke();

    // استعادة حالة الكانفاس الأصلية
    ctx.restore();
}

// رسم الوجه الحزين بالحجم الطبيعي عند تحميل الصفحة
drawFace(false, 1);

// عند الضغط بالماوس (MouseDown)
canvas.addEventListener("mousedown", function() {
    drawFace(true, 1.3); // وجه سعيد وتكبير العرض
});

// عند ترك الماوس (MouseUp)
canvas.addEventListener("mouseup", function() {
    drawFace(false, 1); // العودة والحجم الطبيعي
});