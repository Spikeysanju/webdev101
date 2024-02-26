function addTask() {
    // Get input value
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    // Check if input is not empty
    if (taskText.trim() !== '') {
        // Create a new list item
        var newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Add a delete button to each task
        var deleteButton = document.createElement('button');
        // add a tailwindcss class to the delete button
        deleteButton.className = 'bg-red-500 hover:bg-red-700 text-white font-medium text-md py-2 px-4 rounded';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            removeTask(this);
        };

        // Append the delete button to the task
        newTask.appendChild(deleteButton);

        // Append the task to the task list
        document.getElementById('taskList').appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}

function removeTask(button) {
    // Get the parent task and remove it
    var task = button.parentNode;
    task.parentNode.removeChild(task);
}
