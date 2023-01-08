
const NumberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:  ${NumberOfCategories.length}`);

const categoryAndElements = NumberOfCategories.forEach((elem)=> {
    console.log('Category: ', elem.firstElementChild.textContent);
    console.log('Elements: ', elem.querySelectorAll('li').length);
})