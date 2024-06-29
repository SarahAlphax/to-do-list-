document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    document.getElementById('taskInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}
