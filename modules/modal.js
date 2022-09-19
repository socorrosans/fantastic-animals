export default function initModal(){
  const btLogin = document.querySelector('[data-modal="open"]')
  const modal = document.querySelector('[data-modal="container"]')
  const btCloseModal = document.querySelector('[data-modal="close"]')

  if (btLogin && modal && btCloseModal) {
    btLogin.addEventListener('click', (event)=>{
      event.preventDefault()
      modal.classList.add('active')
    })
  
    btCloseModal.addEventListener('click', () => {
      modal.classList.remove('active')
    })
  
    modal.addEventListener('click', (event) => {
      if(event.target === modal)
        modal.classList.remove('active')
    })
  }
}