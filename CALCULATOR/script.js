let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } 
    else {
    display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function backspace() {
    if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
    } else {
    display.innerText = "0";
    }
}

function calculate() {
    try {
    display.innerText = eval(display.innerText);
    } catch {
        alert('Error');
        display.innerText = "0";
    }
}