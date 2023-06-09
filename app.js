// set initial count
let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const btnClass = e.currentTarget.classList;
        if (btnClass.contains("decrease")) {
            count--;
        } else if (btnClass.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});