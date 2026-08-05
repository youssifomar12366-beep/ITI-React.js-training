var organs = document.querySelectorAll(".organ");
var tooltip = document.getElementById("tooltip");

organs.forEach(function(organ) {
    
    organ.addEventListener("mouseover", function() {
        organ.setAttribute("data-original-color", organ.getAttribute("fill"));
        organ.setAttribute("fill", "#ff9800");

        var organName = organ.getAttribute("data-organ");
        tooltip.textContent = organName;
        tooltip.style.display = "block";
    });

    organ.addEventListener("mousemove", function(e) {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    organ.addEventListener("mouseout", function() {
        var originalColor = organ.getAttribute("data-original-color");
        organ.setAttribute("fill", originalColor);
        tooltip.style.display = "none";
    });
});