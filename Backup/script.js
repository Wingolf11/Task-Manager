const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = { id: Date.now(), text: taskText, completed: false };
    tasks.push(task);
    renderTasks();
    saveTasks();
    taskInput.value = '';
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  saveTasks();
}
