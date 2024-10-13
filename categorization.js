document.addEventListener('DOMContentLoaded', () => {
    const subjectInput = document.getElementById('subject-input');
    const noteInput = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note');
    const noteList = document.getElementById('note-list');

    addNoteButton.addEventListener('click', () => {
        const subjectValue = subjectInput.value.trim();
        const noteValue = noteInput.value.trim();

        if (subjectValue && noteValue) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${subjectValue}:</strong> ${noteValue}`;
            noteList.appendChild(li);

            // Clear the input fields
            subjectInput.value = '';
            noteInput.value = '';
        } else {
            alert('Please enter both subject and note.');
        }
    });
});
