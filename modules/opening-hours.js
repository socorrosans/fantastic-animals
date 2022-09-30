export default function initOpeningHours(){
  const operation = document.querySelector('[data-week]')
  const daysWeek = operation.dataset.week.split(',').map(Number)
  const hourDay = operation.dataset.hour.split(',').map(Number)
  const date = new Date()
  const currentDay = date.getDay()
  const currentHour = date.getHours()
  const openingWeek = daysWeek.indexOf(currentDay) !== -1
  const openingHour = currentHour >= hourDay[0] && currentHour < hourDay[1]

  if (openingHour && openingWeek)
    operation.classList.add('open')
}