export default function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-js="tabmenu"] li')
  const tabContent = document.querySelectorAll('[data-js="tabcontent"] section')

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('active')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active')
      })
      tabContent[index].classList.add('active', tabContent[index].dataset.anime)
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click',() =>{
        activeTab(index)
      })
    })
  }
}