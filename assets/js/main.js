const allBoxes = document.querySelectorAll(".box");
const allTasks = document.querySelectorAll(".task");

//working with all tasks
allTasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

//working with the 3 ToDo boxes
allBoxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    const currentTask = document.querySelector(".is-dragging");
    box.append(currentTask);
  });
});

//ToDo input
const form = document.querySelector("#add-form");
const input = document.querySelector("#todo-input");
const toDo = document.querySelector("#to-do");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTask = input.value;

  if (!addTask) {
    return;
  } else {
    const newTask = document.createElement("p");

    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = addTask;

    newTask.addEventListener("dragstart", () => {
      newTask.classList.add("is-dragging");
    });
    newTask.addEventListener("dragend", () => {
      newTask.classList.remove("is-dragging");
    });

    toDo.append(newTask);

    input.value = "";
  }
});
