
let remainingSeconds = 5;
const countDown = document.getElementById("countdown");
if (countDown)
    countDown.innerHTML = remainingSeconds;

const intervalId = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds === 0) {
// Redirecting to Home Page 🤦  🙂 //
        window.location.href = "https://KoshikKumar17.github.io";
        window.clearInterval(intervalId);
    } else if (countDown) {
        countDown.innerHTML = remainingSeconds;
    }
}, 1000);
// DONE ✅ FINALLY !! 
