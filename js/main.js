const menuBtn = document.querySelector('.menu_btn');
const hamburger=document.querySelector('.menu_btn_burger');
const nav=document.querySelector('.nav');
const menuNav=document.querySelector('.menu-nav');
const navitems=document.querySelectorAll('.menu-nav-item')

let showMenu=false;
 menuBtn.addEventListener('click',togglemenu);

 function togglemenu(){
     if(!showMenu){
         hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navitems.forEach(element => element.classList.add('open'));

         showMenu=true;
     }
     else{
         hamburger.classList.remove('open');
         nav.classList.remove('open');
         menuNav.classList.remove('open'); 
         navitems.forEach(element => element.classList.remove('open'));

         showMenu=false;
     }
 }