export default function initAccordion(){
  const accordionList = document.querySelectorAll('[data-js="accordion"] dt')
  accordionList[0].classList.toggle('active')
  accordionList[0].nextElementSibling.classList.toggle('active')
  
  if(accordionList.length){
    accordionList.forEach((dt) => {
      dt.addEventListener('click', () => {
      dt.classList.toggle('active')
      dt.nextElementSibling.classList.toggle('active')
      })
    })
  }
}