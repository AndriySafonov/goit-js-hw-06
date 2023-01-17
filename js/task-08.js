const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
console.log(email.value);
  if (email.value === '' || password.value === '') {
    alert('please fill in all fields');
  } else {
    console.log(`Login: ${email.value}, Password:${password.value}`);
    event.currentTarget.reset();
  }
}
