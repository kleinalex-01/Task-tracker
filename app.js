const inputField = document.getElementById("task-input");
const inputValue = inputField.value;
const inputIcon = document.getElementById("submit-icon");
const grid = document.getElementById("grid-container");

const addRow = () => {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-item");
    newRow.innerText = inputField.value;
    grid.appendChild(newRow);
};

inputField.addEventListener("keydown",function(event) {
    if (event.key === "Enter" || inputValue.length < 3) {
        addRow();
    }})
