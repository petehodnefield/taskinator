var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
console.log("#tasks-to-do");

var makeNewItem = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = prompt("What is your task?");
    tasksToDoEl.appendChild(taskItemEl);
}

buttonEl.addEventListener("click", makeNewItem) ;