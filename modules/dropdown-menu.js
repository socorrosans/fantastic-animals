export default function initDropdownMenu(){
  const btnAbout = document.querySelector('[data-dropdown] a')
  const dropMenu = document.querySelector('.dropdown-menu')

  const userEvents = ['click', 'touchstart']
  userEvents.forEach(userEvent => {
    btnAbout.addEventListener(userEvent, (event)=> {
      event.preventDefault()
      dropMenu.classList.add('active')
    })

  window.addEventListener(userEvent, (event)=>{
      if(event.target !== btnAbout && event.target !== dropMenu)
        dropMenu.classList.remove('active')
    })
  })
}