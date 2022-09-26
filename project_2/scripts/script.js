const menu = document.querySelector(".menu");
const body = document.querySelector('body');
const backdrop = document.querySelector('.backdrop');
const openMenuList = document.querySelector(".bars");
const closeMenu = document.querySelector('.close-menu');
/*open menu list*/
openMenuList.addEventListener("click", function () {
  menu.classList.toggle("opened");
  if(menu.classList.contains('opened')){
    backdrop.classList.add('backdrop-opened');
  }else{
    backdrop.classList.remove('backdrop-opened');
  }
});


backdrop.addEventListener('click',closeMenufunc)
closeMenu.addEventListener('click',closeMenufunc);

/*close menu list */
function closeMenufunc(){
  menu.classList.remove('opened');
  backdrop.classList.remove('backdrop-opened');
}