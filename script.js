const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);
clearAll.addEventListener("click", clearTasks);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function handleTaskClick(e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
  } else if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
}

function clearTasks() {
  taskList.innerHTML = "";
}
