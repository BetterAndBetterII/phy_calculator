
const showPopupButton = document.getElementById('showPopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopupButton = document.getElementById('closePopup');

showPopupButton.addEventListener('click', () => {
    fetch('./helping.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(markdownContent => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
            document.getElementById('content').innerHTML = marked(markdownContent);
        })
        .catch(error => console.error('Error loading the markdown file:', error));
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});
