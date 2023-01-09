const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsConteiner = document.querySelector('ul#ingredients');

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
 
  return itemEl;
});
ingredientsConteiner.append(...elements);
// const ingredientsConteiner = document.querySelector('ul#ingredients')
// const elements = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const element = ingredients[i];
//   const itemEl = document.createElement("li");
//   itemEl.classList.add('item');
//   itemEl.textContent = element;
//   elements.push(itemEl);

// }
// console.log(elements);
// ingredientsConteiner.append(...elements);
