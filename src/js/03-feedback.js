import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('.feedback-form [name="email"]'),
  message: document.querySelector('.feedback-form [name="message"]'),
};

// Відстежуй на формі подію input
const form = document.querySelector('.feedback-form');
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд
form.addEventListener('input', throttle(textInput, 500));
form.addEventListener('submit', onFormSubmit);

let STORAGE_KEY = 'feedback-form-state';

//об'єкт для збереження введеної інформації в полях
const formData = {};

//  щоразу записуй у локальне сховище об'єкт з полями
function textInput(evt) {
  // змінює  об'єкт введеої інформації
  formData[evt.target.name] = evt.target.value;
  // створює локальне сховище для введених даних
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// функція яка визначає поля(keys) і введені дані (dataLocalStorage)
function fromStorageToForm(keys, dataLocalStorage) {
  for (const key of keys) {
    formData[key] = dataLocalStorage[key];
    refs[key].value = dataLocalStorage[key];
  }
}

//Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями

function onFormSubmit(evt) {
  evt.preventDefault();
  if (formData.email === undefined || formData.message === undefined) {
    return alert('Напиши хоть шось в кожному полі');
  } else if (formData.email === ' ' || formData.message === ' ') {
    return alert('Напиши хоть шось в кожному полі');
  }
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);

  delete formData.email;
  delete formData.message;
}

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми

if (localStorage.getItem(STORAGE_KEY)) {
  const parsedLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const keys = Object.keys(parsedLocalStorage);

  fromStorageToForm(keys, parsedLocalStorage);
}
