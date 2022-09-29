export default function initAnimeNumbers(){

  function animeNumbers(){
    const numbers = document.querySelectorAll('[data-number]')
  
    numbers.forEach(number => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100)
      let start = 0;
  
      const timer = setInterval(()=> {
        start += increment
        number.innerText = start
  
        if (start > total) {
          clearInterval(timer)
          number.innerText = total
        }
      }, 25 * Math.random())
    })
  }

  function handleMutation(mutation){
    if(mutation[0].target.classList.contains('active')) {
      observer.disconnect()
      animeNumbers()
    }
  }
  const observer = new MutationObserver(handleMutation)
  const observeTarget = document.querySelector('.numbers')
  observer.observe(observeTarget, {attributes: true})
}


