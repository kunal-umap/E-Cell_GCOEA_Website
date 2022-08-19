const toggle = document.getElementById('toggle');
const nav = document.getElementById('navBar');

toggle.addEventListener('click',() => {
    nav.classList.toggle('active') 
});