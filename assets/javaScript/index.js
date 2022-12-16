var valueText;

var inputText = document.querySelector('input[type="text"]');

let timeout;
document.addEventListener("keyup", (e) => {
    timeout = 2000;
    setInterval(() => {
        timeout -= 1000;
        if (timeout === 0) {
            console.log(e.target.value);
        }
    }, 1000);
});
