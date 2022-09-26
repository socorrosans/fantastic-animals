export default function initMenuMobile(){
  const buttonMenu = document.querySelector('[data-menu="button"]')
  const menuMobile = document.querySelector('[data-menu="list"]')
  const linkMenuDrop = document.querySelector('[data-dropdown] a')

  buttonMenu.addEventListener('click', function() {
    menuMobile.classList.toggle('active')
    buttonMenu.classList.toggle('active')
  })

  window.addEventListener('click', function(event){
    if(event.target !== buttonMenu && event.target !== menuMobile && event.target !== linkMenuDrop){
      menuMobile.classList.remove('active')
      buttonMenu.classList.remove('active')
    }
  })
}