var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul1')

menuIcon.addEventListener('click', ()=>{

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
    }else{
            ul.classList.add('ativo');
        }
});