
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoWrapper = document.querySelector("#tasks");
  const newTask = document.querySelector("#new-task-description");
  const createTaskBtn = document.querySelector('input[type="submit"]');
  const form = document.querySelector("#create-task-form");

  const isValidInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };

  const addNewTask = (e) => {
    e.preventDefault();
    getNewTask();
  };

  const getNewTask = () => {
    const task = newTask.value;
    if (isValidInput(task)) {
      createNewTask(task);
    }
  };

  const createNewTask = (taskContent) => {
    const task = document.createElement("li");
    task.textContent = taskContent;
    todoWrapper.appendChild(task);
    form.reset();
  };

  form.addEventListener("submit", addNewTask);
});