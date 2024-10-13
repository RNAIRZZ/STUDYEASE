document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');
    const documentList = document.getElementById('document-list');

    // Handle document uploads
    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];

        if (file) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${URL.createObjectURL(file)}" target="_blank">${file.name}</a>`;
            documentList.appendChild(listItem);
            fileInput.value = ''; // Clear the input
        } else {
            alert('Please select a file to upload.');
        }
    });
});
