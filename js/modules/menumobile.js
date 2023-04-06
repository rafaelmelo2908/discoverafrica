
export default function initMenuMobile(){

const menuButton = document.querySelector('.button');
const menuList = document.querySelector('#menu');

function openMenu(event) {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
    
}

menuButton.addEventListener('click', openMenu);



}
