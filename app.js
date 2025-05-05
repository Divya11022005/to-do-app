document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Load tasks from local storage
    loadTasks();

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            saveTask(taskText);
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
            removeTask(task);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function removeTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTask(task));
    }
});