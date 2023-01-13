const counter = {
    value: 0,
    incremen(){
        this.value += 1;
    },
    decremen(){
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const elValue = document.querySelector('[id = "value"]')

decrementBtn.addEventListener('click', function(){
    counter.decremen();
    elValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', function(){
    counter.incremen();
    elValue.textContent = counter.value;
});

