// // Посчитает и выведет в консоль количество категорий в ul#categories, то есть
// элементов li.item.Получится 'В списке 3 категории.'.

// // Для каждого элемента li.item в списке ul#categories, найдет и выведет в 
// консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// // Например для первой категории получится:

// // Категория: Животные
// // Количество элементов: 4


const categoriesListEl = document.querySelectorAll('.item')
const showQuantityOfCategories = element => `В списке ${element.length} категории.`
console.log(showQuantityOfCategories(categoriesListEl));
const showCategories = element => element.forEach(el =>
    console.log(`Категория: ${el.querySelector(`h2`).textContent}. Количество элементов: ${el.querySelectorAll(`li`).length}.`))
showCategories(categoriesListEl);


