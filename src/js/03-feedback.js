import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('.feedback-form [name="email"]'),
  message: document.querySelector('.feedback-form [name="message"]'),
};

// Відстежуй на формі подію input
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(textInput, 500));
form.addEventListener('submit', onFormSubmit);

let STORAGE_KEY = 'feedback-form-state';

//об'єкт для збереження введеної інформації в полях
const formData = {};

function textInput(evt) {
  // змінює  об'єкт введеої інформації
  formData[evt.target.name] = evt.target.value;
  // створює локальне сховище для введених даних
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fromStorageToForm(keys, dataLocalStorage) {
  for (const key of keys) {
    formData[key] = dataLocalStorage[key];
    refs[key].value = dataLocalStorage[key];
  }
}

//анулює введені дані при

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

if (localStorage.getItem(STORAGE_KEY)) {
  const parsedLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const keys = Object.keys(parsedLocalStorage);

  fromStorageToForm(keys, parsedLocalStorage);
}
