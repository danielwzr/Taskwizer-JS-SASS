const ulElement = document.querySelector(".task-list");
const newTask = document.querySelector(".input-add");
var taskId = 0;

// CHECA SE ALGO FOI DIGITADO NO INPUT
function validateInput() {
  if (newTask.value) {
    createTaskElement(newTask.value);
  } else {
    alertInput();
  }
}

// CRIA ALERTA E BALANÇA O INPUT
function alertInput() {
  const input = document.querySelector(".input-add");
  input.id = "form-shake";
  setTimeout(() => {
    input.removeAttribute("id");
  }, 500);
}

// CRIA UM LI e ENCAIXA NA UL
function createTaskElement(task) {
  taskId++;
  const li = document.createElement("li");
  li.innerHTML = `<a href="#" onclick="removeTask(event)" name="${taskId}">${task}</a>`;
  li.id = taskId;
  li.className = "task";
  ulElement.appendChild(li);
  updateStorageTasks();
}

function updateStorageTasks() {
  const taskList = Array.from(document.getElementsByClassName("task")).map(
    (task) => task.innerText
  );
  localStorage.setItem("tasks", taskList);
  newTask.value = "";
}

function firstLoadTasks() {
  localStorage.getItem("tasks")
    ? localStorage
        .getItem("tasks")
        .split(",")
        .map((task) => {
          createTaskElement(task);
        })
    : console.log("Storage vazio");
}
/*

function removeTask(event) {
  var taskParaRemover = document.getElementById(event.target.name);
  taskParaRemover.remove();
}
*/
// LOADING COMPONENTS
firstLoadTasks();
