var warningTimeoutID = undefined;
var logoutTimeoutID = undefined;
const events = ["click", "mousemove", "mousedown", "keydown"];
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === "/home.html") {
        warningTimeoutID = setTimeout(callTimeoutFunc, 120000);
        events.forEach((event) => {
            window.addEventListener(event, eventHandler);
        });
    } else {
        const submit = document.querySelector("input[type=submit]");
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "home.html";
            clearTimeout(warningTimeoutID);
            clearTimeout(logoutTimeoutID);
            events.forEach((event) => {
                window.removeEventListener(event, eventHandler);
            });
        });
    }
});

function callTimeoutFunc() {
    const div = document.createElement("div"); 
    div.className = "warning";
    div.textContent =
        "Anda sudah tidak aktif untuk beberapa waktu dan akan logout otomatis 1 menit dari sekarang!";
    body.prepend(div);
    logoutTimeoutID = setTimeout(() => {
        window.location.href = "index.html";
    }, 60000);
}

function eventHandler() {
    if (logoutTimeoutID) {
        clearTimeout(logoutTimeoutID);
        if (body.children[0].classList.contains("warning"))
            body.removeChild(body.firstElementChild);
    }
    clearTimeout(warningTimeoutID);
    warningTimeoutID = setTimeout(callTimeoutFunc, 120000);
}