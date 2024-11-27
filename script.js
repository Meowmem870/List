document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Load saved tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTask(task));

    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task !== "") {
            addTask(task);
            saveTask(task);
            taskInput.value = "";
        }
    });

    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
            deleteTask(task);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function deleteTask(task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
});
