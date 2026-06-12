const display = document.getElementById("display");
const expression = document.getElementById("expression");

let currentInput = "0";
let calculation = "";

function updateDisplay() {
    display.value = currentInput;
    expression.textContent = calculation;
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        const num = button.dataset.num;

        if (currentInput === "0") {
            currentInput = num;
        } else {
            currentInput += num;
        }

        updateDisplay();
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        const op = button.dataset.op;

        calculation += currentInput + " " + op + " ";
        expression.textContent = calculation;

        currentInput = "0";
        updateDisplay();
    });
});

document.getElementById("decimal").addEventListener("click", () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
});

document.getElementById("clearAll").addEventListener("click", () => {
    currentInput = "0";
    calculation = "";
    updateDisplay();
});

document.getElementById("delete").addEventListener("click", () => {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
});

document.getElementById("percent").addEventListener("click", () => {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        const fullExpression = calculation + currentInput;
        const result = eval(fullExpression);
        expression.textContent = fullExpression + " =";
        currentInput = result.toString();
        calculation = "";
        updateDisplay();
    } catch {
        display.value = "Error";
        currentInput = "0";
        calculation = "";
    }
});

updateDisplay();