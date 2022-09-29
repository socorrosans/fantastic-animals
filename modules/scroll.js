export function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('[data-js="menu"] a[href^="#"]')
  function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // Outra forma: método do window: scrollTo
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }
  linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection)
  })
}

export function initAnimeScroll(){
  const sections = document.querySelectorAll('[data-js="scroll"]')
  if(sections.length){
    const windowHalf = window.innerHeight * 0.6
    
    function animeScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowHalf) < 0
        if(isSectionVisible){
          section.classList.add('active')
        } else if(section.classList.contains('active')){
          section.classList.remove('active')
        }
      })
    }
    animeScroll()
    window.addEventListener('scroll', initAnimeScroll)
  } 
}