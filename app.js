document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput"); // Corrected ID
    const addTaskButton = document.getElementById("addTaskButton"); // Corrected ID
    const taskList = document.getElementById("taskList"); // Corrected ID

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
        listItem.textContent = task;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
});