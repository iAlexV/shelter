let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let pageNumber = document.getElementById('this').innerHTML;
const buttonNext = document.getElementById('+x1');
const buttonLast = document.getElementById('+x2');
const buttonPrev = document.getElementById('-x1');
const buttonFirst = document.getElementById('-x2');


function cardCreate(id) {
  let cardDiv = document.createElement('div');
  cardDiv.className = 'main_cards__card';
  cardDiv.innerHTML =
    `<img src="assets/pets-${id}.png" alt="${id}" class="card_img">
  <div class="card_name">${id}</div>
  <div class="card_button">Learn more</div>`
  document.querySelector('.main_cards').appendChild(cardDiv);
}

let arr1 = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];
let countCards;
if (window.innerWidth > 1299) {
  countCards = 8;
}
if (window.innerWidth < 1299 && window.innerWidth > 679) {
  countCards = 6;
}
if (window.innerWidth < 679) {
  countCards = 3;
}
generate();
//Рисующий карточки цикл
function generate() {
  document.querySelector('.main_cards').innerHTML = '';
  for (let i = 0; i < countCards; i++) {
    cardCreate(arr1[i])
  }

}


// Функция перемешивания массива
function shuffle() {
  arr1.sort(() => Math.random() - 0.5);
}

function check() {
  if (pageNumber === 6) {
    buttonNext.classList.add('disabled');
    buttonLast.classList.add('disabled');
  }

  if (pageNumber < 6) {
    buttonNext.classList.remove('disabled')
    buttonLast.classList.remove('disabled')
  }

  if (pageNumber > 1) {
    buttonPrev.classList.remove('disabled')
    buttonFirst.classList.remove('disabled')
  }

  if (pageNumber === 1) {
    buttonPrev.classList.add('disabled')
    buttonFirst.classList.add('disabled')
  }

}

function forward1() /*переключает на одну страницу вперед*/ {
  if (pageNumber < 6) {
    shuffle();
    generate();
    pageNumber = Number(pageNumber) + 1;
    document.getElementById('this').innerHTML = pageNumber;
    check();
  }
}

function forward2() /*переключает на 6ую страницу*/ {
  if (pageNumber < 6) {
    shuffle();
    generate();
    pageNumber = 6;
    document.getElementById('this').innerHTML = 6;
    check();
  }
}

function back1() /*переключает на одну страницу назад*/ {
  if (pageNumber > 1) {
    shuffle();
    generate();
    pageNumber = Number(pageNumber) - 1;
    document.getElementById('this').innerHTML = pageNumber;
    check();
  }

}
function back2() /*переключает на 1ую страницу*/ {
  if (pageNumber > 1) {
    shuffle();
    generate();
    pageNumber = 1;
    document.getElementById('this').innerHTML = pageNumber;
    check();
  }
}


buttonNext.addEventListener('click', forward1);
buttonLast.addEventListener('click', forward2);
buttonPrev.addEventListener('click', back1);
buttonFirst.addEventListener('click', back2);