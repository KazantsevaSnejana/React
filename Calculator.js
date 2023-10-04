let inputField = document.getElementById("inputField");
let historyDiv = document.getElementById("history");
let inputExpression = "";

function appendToInput(value) {
    inputExpression += value;
    inputField.value = inputExpression;
}

function clearInput() {
    inputExpression = "";
    inputField.value = "";
}

function createHistoryEntry(expression, result) {
    const entry = document.createElement("div");
    entry.appendChild(document.createTextNode(expression + " = " + result));
    historyDiv.appendChild(entry);
}

function calculateResult() {
    try {
        const result = eval(inputExpression);
        if (isNaN(result)) {
            throw new Error("Некорректное выражение");
        }
        createHistoryEntry(inputExpression, result);
        clearInput();
    } catch (error) {
        alert("Ошибка: " + error.message);
        clearInput();
    }
}