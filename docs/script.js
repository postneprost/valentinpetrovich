let page = document.querySelector('body');
let themeButton = document.querySelector('button');

themeButton.onclick = function() {
    page.classList.toggle('sea-theme');
    page.classList.toggle('blood-theme');
};
