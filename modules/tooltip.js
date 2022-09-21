export default function initTooltip(){
  const tooltips = document.querySelectorAll("[data-tooltip]")
  function newTooltip(element){
    const tooltipContainer = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipContainer.classList.add('tooltip')
    tooltipContainer.innerText = text
    document.body.appendChild(tooltipContainer)
    return tooltipContainer
  }

  tooltips.forEach(tooltip =>{
    function onMouseOver(){
      const tooltipCreated = newTooltip(tooltip)
      onMouseLeave.tooltipCreated = tooltipCreated
      onMouseLeave.element = this
      onMouseMove.tooltipCreated = tooltipCreated
      onMouseMove.element = this

      this.addEventListener('mouseleave', onMouseLeave)
      this.addEventListener('mousemove', onMouseMove)
    }

    const onMouseMove = {
      handleEvent(event){
        this.tooltipCreated.style.top = event.pageY + 10 + 'px'
        this.tooltipCreated.style.left = event.pageX + 10 + 'px'
      }
    }

    const onMouseLeave = {
      handleEvent(){
        this.tooltipCreated.remove()
        this.element.removeEventListener('mousemove', onMouseMove)
        this.element.removeEventListener('mouseleave', onMouseLeave)
      }
    }

    tooltip.addEventListener('mouseover', onMouseOver)
  })
}