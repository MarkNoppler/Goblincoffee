const btn = document.getElementById("submit-btn");
let currentSize = 1;

btn.addEventListener("click", () => {
    alert("The goblins know who you are!");
});

btn.addEventListener("click", function onclick() {
    btn.style.backgroundColor = "#c1730E";
    btn.style.color = "#4d693a";
});

btn.addEventListener("mouseover", () => {
    currentSize += 1;
    btn.style.transform = "scale(3)";
});

btn.addEventListener("mouseout", () => {
    currentSize = 1;
    btn.style.transform = "scale(1)";
});



document.getElementById("fname").style.height="50px";
document.getElementById("fname").style.fontSize="22pt";
document.getElementById("fname").style.padding="5px";
document.getElementById("fname").style.margin="20px";

document.getElementById("lname").style.height="50px";
document.getElementById("lname").style.fontSize="22pt";
document.getElementById("lname").style.padding="5px";
document.getElementById("lname").style.margin="20px"

