const input = document.querySelector('[id="validation-input"]');

const length = Number(input.dataset.length);


input.addEventListener('blur', (event) =>{
  if(event.currentTarget.value.length === length){
    input.classList.add('valid');
    input.classList.replace('invalid', 'valid');
  } else {
    input.classList.add('invalid');
    input.classList.replace('valid', 'invalid');
    
  }
});


