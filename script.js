var count = 1;
let button = document.querySelectorAll(".autoBtn");
console.log(button);

setInterval(function () {
    document.getElementById('radio' + count).checked = true;
    count++;

    if (count > 5) {
        count = 1;
    }
}, 5000);
