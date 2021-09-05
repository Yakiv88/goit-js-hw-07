const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingradientsList = document.querySelector('#ingredients');
const element = ingredients.map(element => {
    const ingradientsListEl = document.createElement('li')
  ingradientsListEl.textContent = element
  
    console.log(ingradientsListEl)
    return ingradientsListEl 

}) 
ingradientsList.append(...element)  