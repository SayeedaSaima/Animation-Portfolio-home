const toggleicon = document.querySelector(".toggle-icon");

toggleicon.addEventListener('click', () => {
     toggleicon.classList.toggle('bx-sun');
     document.body.classList.toggle("dark-mode");
});