// script.js
const promptInput = document.getElementById('prompt-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    const promptValue = promptInput.value.trim();
    if (promptValue !== '') {
        // Send the prompt to the AI model
        fetch('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: promptValue })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
});

function insertText(elemID, text) {
    var elem = document.getElementById(elemID);
    elem.value += text;
    }