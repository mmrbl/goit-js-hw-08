const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));

let storageKey = 'feedback-form-state';

populateTextArea();

function onEmailInput(evt) {
  storageKey = 'email';
  const email = evt.currentTarget.value;
  localStorage.setItem(storageKey, email);
  // console.log(email);
}

function onMessageInput(evt) {
  storageKey = 'message';
  const message = evt.currentTarget.value;
  localStorage.setItem(storageKey, message);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}

function populateTextArea() {
  const savedMessage = localStorage.getItem(storageKey);
  if (savedMessage) {
    // console.log(savedMessage);
    refs.email.value = savedMessage;
  }
}
