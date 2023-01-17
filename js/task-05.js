const refs = {
  input: document.querySelector('[id="name-input"]'),
  output: document.querySelector('[id="name-output"]'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === "") {
    refs.output.textContent = 'Anonymous';
} else {
  refs.output.textContent = event.currentTarget.value;
}
}

