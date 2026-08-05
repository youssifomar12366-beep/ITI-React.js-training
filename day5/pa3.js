// 1. طلب عدد العناصر وتحديد حجم المصفوفة

var number = parseInt(prompt("enter number of elements"));


var elements = new Array(number).fill("");


for (var i in elements) {
    
    elements[i] = prompt("Enter the value of item number" + (parseInt(i) + 1));
}


for (var i in elements) {
    document.write(elements[i] + "<br>");
}







var number = parseInt(prompt("enter number of elements"));
var elements = [number];


for (var i = 0; i < number; i++) {
    elements[i] = prompt("Enter the value of item number " + (i + 1));
}


for (var item of elements) {
    document.write(item + "<br>");
}

var number = parseInt(prompt("enter number of elements"));

// إنشاء وملء المصفوفة مباشرة بدون فور عادية
var elements = Array.from({ length: number }, function(v, i) {
    return prompt("Enter the value of item number" + (i + 1));
});

// عرض القيم باستخدام for...of
for (var item of elements) {
    document.write(item + "<br>");
}