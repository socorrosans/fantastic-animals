export default function initFetchAnimals(){
  fetchAnimals('./animals.json')
}

async function fetchAnimals(url) {
  try {
    const animalsResponse = await fetch(url)
    const animalsJSON = await animalsResponse.json()
    const numbersAnimals = document.querySelectorAll('[data-number]');
    const specieAnimals = document.querySelectorAll('.numbers-grid h3');
    
    specieAnimals.forEach((specieAnimal, index) => specieAnimal.innerText = animalsJSON[index].specie)
    numbersAnimals.forEach((numberAnimal, index) => numberAnimal.innerText = animalsJSON[index].number)
  } catch (err){
    console.log(err)
  }
}