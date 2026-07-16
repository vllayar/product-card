// Покраска первой карточки
const firstProductCard = document.querySelector('.products__item');
const changeFirstCardColor = document.querySelector('#change-first-card-color-btn');

changeFirstCardColor.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = '#515076';
  firstProductCard.style.color = 'white';
})

// Покраска всех карточек
const allProductCards = document.querySelectorAll('.products__item');
const changeAllCarsdColor = document.querySelector('#change-all-cards-color-btn');

changeAllCarsdColor.addEventListener('click', () => {
  allProductCards.forEach((background) => background.style.backgroundColor = '#515076')
  allProductCards.forEach((fontColor) => fontColor.style.color = 'white')
})

// Переход на гугл поисковик
const openGoogleButton = document.querySelector('#open-google-btn');
const googleLink = 'https://google.com';

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open(googleLink)
  } else {
    return;
  }
}

// Выведение сообщения в консоль
const outputConsoleLogButton = document.querySelector('#output-console-log-btn');

outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Выведение заголовка в консоль
const pageTitle = document.querySelector('.title');

pageTitle.addEventListener('mouseenter', outputTitle)

function outputTitle(event) {
  const textInside = event.target.textContent;

  console.log(textInside);
}

const title = document.querySelector('.title');

// Кнопка меняющая цвет
const colorChangeButton = document.querySelector('#change-button-color-btn');

colorChangeButton.addEventListener('click', changeColor);

function changeColor() {
  colorChangeButton.classList.toggle('change-self-color-btn-accent');
}