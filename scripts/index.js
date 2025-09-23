const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  navMenu.classList.toggle('ativo');
});

// Fechar menu e rolar suavemente no mobile
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // evita o jump padrão
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // fecha o menu mobile
    menu.classList.remove('ativo');
    navMenu.classList.remove('ativo');

    // rola suavemente até a seção
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    if(searchBox.classList.contains('active')){
        searchBox.querySelector('.search-input').focus();
    }
});

