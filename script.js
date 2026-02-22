let tasks = [];
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const task = { text: taskText, completed: false };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const li = document.createElement('li');
    li.textContent = task.text;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    taskList.appendChild(li);
    li.addEventListener('click', function () {
        task.completed = !task.completed;
        li.classList.toggle('completed');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    taskInput.value = '';
});

function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
        tasks.forEach(function (task) {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.completed) li.classList.add('completed');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(li);
                tasks = tasks.filter(t => t !== task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });
            li.addEventListener('click', function () {
                task.completed = !task.completed;
                li.classList.toggle('completed');
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });
            taskList.appendChild(li);
        });
    }
}

loadTasks();