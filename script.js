// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTask);
        var span = document.createElement("span");
        span.textContent = taskInput.value;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        li.classList.add("todo-item");
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

// Function to toggle task completion
function toggleTask(event) {
    var listItem = event.target.parentNode;
    if (event.target.checked) {
        listItem.classList.add("completed");
    } else {
        listItem.classList.remove("completed");
    }
}

// Function to delete a task
function deleteTask(event) {
    var listItem = event.target.parentNode;
    listItem.remove();
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
