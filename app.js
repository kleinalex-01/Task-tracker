const inputField = document.querySelector(".task-input");
const inputIcon = document.querySelector(".submit-icon");
const grid = document.querySelector(".grid-container");
const gridItem = document.getElementsByClassName("grid-item");
const switchButton = document.querySelector(".switch-btn");
const sun = document.querySelector(".fa-sun");

const addRow = () => {
    const newRow = document.createElement("div");
    const task = document.createElement("span");
    const newIcon = document.createElement("i");
    const newIcon2 = document.createElement("i");
    newRow.classList.add("grid-item");
    task.innerText = inputField.value;
    newIcon.classList.add("fa-regular", "fa-square");
    newIcon2.classList.add("fa-solid", "fa-trash");
    newRow.appendChild(newIcon);
    newRow.appendChild(newIcon2);
    newRow.appendChild(task);
    grid.appendChild(newRow);

    newIcon.addEventListener("click", function() {
        if(task.style.textDecoration === "line-through") {
            task.style.textDecoration = "none";
            newIcon.classList.remove("fa-square-check");
            newIcon.classList.add("fa-square");
        } else {
            task.style.textDecoration = "line-through";
            newIcon.classList.remove("fa-square");
            newIcon.classList.add("fa-square-check");
        }
    });

    newIcon2.addEventListener("click", function() {
        newRow.remove();
    });

    inputField.value = "";
};
const toggleMode = () => {
    if (document.body.classList.contains("darkmode")) {
        document.body.classList.remove("darkmode");
    } else {
        document.body.classList.add("darkmode");
    }
}
inputField.addEventListener("keydown",function(event) {
    if (event.key === "Enter") {
        let inputValue = inputField.value;
        if (inputValue.length >= 3) {
            addRow();
        } else {
            alert("Please type in a valid activity!")
        };
    };
});
inputIcon.addEventListener("click",function() {
    let inputValue = inputField.value;
        if (inputValue.length >= 3) {
            addRow();
        } else {
            alert("bru")
        };
});
switchButton.addEventListener("click", toggleMode);