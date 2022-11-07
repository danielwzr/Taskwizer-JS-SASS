const ulElement = document.querySelector(".task-list");
const newTask = document.querySelector(".input-add");

function updateTasks() {
    const taskList = Array.from(document.getElementsByClassName("task")).map(task => task.innerHTML);
    localStorage.setItem("tasks", taskList);
}

function alertInput() {
    const input = document.querySelector(".input-add");
    input.id = "form-shake";
    setTimeout(()=>{
        input.removeAttribute("id");
    }, 500)
}

function loadTasks() {
    updateTasks();
    JSON.parse(localStorage.getItem('tasks')).map(task => createTaskElement(task));
}

function validateInput(){
        if (newTask.value) {
            createTaskElement(newTask.value);
            updateTasks();
        }
        else {
            alertInput();
        }
}

function addTask() {

}

function removeTask() {

}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.innerText = task;
    li.className = "task"
    ulElement.appendChild(li);
}

// LOADING COMPONENTS
loadTasks();