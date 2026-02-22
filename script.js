let tasks = [];
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    taskList.appendChild(li);
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });
    taskInput.value = '';

});
function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
        tasks.forEach(function (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(li);
                tasks = tasks.filter(t => t !== taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });
            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });
            taskList.appendChild(li);
        });
    }
}

loadTasks();