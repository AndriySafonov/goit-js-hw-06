
const NumberOfCategories = document.querySelectorAll(".item");
console.log(item.value);
NumberOfCategories.value.style.listStyle = none;
console.log(`Number of categories:  ${NumberOfCategories.length}`);

const categoryAndElements = NumberOfCategories.forEach((elem)=> {
    console.log('Category: ', elem.firstElementChild.textContent);
    console.log('Elements: ', elem.querySelectorAll('li').length);
})

