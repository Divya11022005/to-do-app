document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    function addTask(task) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";
        listItem.textContent = task;

        const removeButton = document.createElement("button");
        removeButton.className = "remove-task";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
});