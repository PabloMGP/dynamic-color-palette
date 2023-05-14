document.addEventListener('DOMContentLoaded', () => {
});

const card = document.querySelectorAll('.card');

card.forEach(element => {
    element.addEventListener('mouseover', () => {
        removeActive();
        element.classList.toggle('active');
    })
});

function removeActive() {
    card.forEach(element => {
        element.classList.remove('active');
    })
} 

function copyContent(event, selector) {
    const targetElement = event.target.closest('.card').querySelector(selector);
    const text = targetElement.innerHTML;
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Content copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
}