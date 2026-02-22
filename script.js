let tasks = [];
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });
    taskList.appendChild(li);
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });
    taskInput.value = '';

});