const accentColorHash = '#515076';
const primaryColorHash = '#F7F7FA';
const firstProductCard = document.querySelector('.products__item');
const changeFirstCardColor = document.querySelector('#change-first-card-color-btn');
const allProductCards = document.querySelectorAll('.products__item');
const changeAllCardsColor = document.querySelector('#change-all-cards-color-btn');
const resetAllCardsColor = document.querySelector('#reset-all-cards-color-btn');
const openGoogleButton = document.querySelector('#open-google-btn');
const googleLink = 'https://google.com';
const outputConsoleLogButton = document.querySelector('#output-console-log-btn');
const pageTitle = document.querySelector('.title');
const colorChangeButton = document.querySelector('#change-button-color-btn');

// Покраска первой карточки
changeFirstCardColor.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = accentColorHash;
  firstProductCard.style.color = primaryColorHash;
})

// Покраска всех карточек
changeAllCardsColor.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = accentColorHash;
    card.style.color = primaryColorHash;
  })
});

// Восстановление цвета всех карточек
resetAllCardsColor.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = primaryColorHash;
    card.style.color = accentColorHash;
  })
});

// Переход на гугл поисковик
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
outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Выведение заголовка в консоль
pageTitle.addEventListener('mouseenter', outputTitle)

function outputTitle(event) {
  const textInside = event.target.textContent;

  console.log(textInside);
}

// Кнопка меняющая цвет
colorChangeButton.addEventListener('click', changeColor);

function changeColor() {
  colorChangeButton.classList.toggle('change-self-color-btn-accent');
}