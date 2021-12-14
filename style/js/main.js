const btnmenu = document.getElementById('btn_menu');

function toggleMenu(event) {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');   
}

btnmenu.addEventListener('click', toggleMenu);