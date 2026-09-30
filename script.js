let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>

            <div>
                <button class="edit-btn" onclick="editTask(${index})">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {

    const input = document.getElementById("taskInput");

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);

    saveTasks();

    input.value = "";

    displayTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();
}

function editTask(index) {

    const newTask = prompt("Edit your task:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {

        tasks[index] = newTask.trim();

        saveTasks();

        displayTasks();
    }
}

displayTasks();