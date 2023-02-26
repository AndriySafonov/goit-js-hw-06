
const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories.length}`);
const category = numberOfCategories.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});

