document.addEventListener('DOMContentLoaded', () => {
    const priorityTaskInput = document.getElementById('priority-task-input');
    const prioritySelect = document.getElementById('priority-select');
    const addPriorityTaskButton = document.getElementById('add-priority-task');
    const priorityTaskList = document.getElementById('priority-task-list');

    addPriorityTaskButton.addEventListener('click', () => {
        const taskValue = priorityTaskInput.value.trim();
        const priorityValue = prioritySelect.value;

        if (taskValue) {
            const li = document.createElement('li');
            li.textContent = taskValue;
            li.classList.add(priorityValue); // Add class based on priority

            // Set color based on priority
            if (priorityValue === 'high') {
                li.style.backgroundColor = '#ffcccc'; // Light Red
            } else if (priorityValue === 'medium') {
                li.style.backgroundColor = '#ffffcc'; // Light Yellow
            } else {
                li.style.backgroundColor = '#ccffcc'; // Light Green
            }

            // Append to the list
            priorityTaskList.appendChild(li);
            priorityTaskInput.value = ''; // Clear input
        }
    });
});
