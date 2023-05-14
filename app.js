document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content Loaded Successfully.')
});

const container = document.querySelectorAll('.card');

let text = document.querySelector('.copy-color').innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

container.forEach(element => {
    element.addEventListener('mouseover', () => {
        removeActive();
        element.classList.toggle('active');
        })
});

function removeActive() {
    container.forEach(element => {
        element.classList.remove('active');
    })
}