let arrR = [];
let pageNumber = document.getElementById('this').innerHTML;
const buttonNext = document.getElementById('+x1');
const buttonLast = document.getElementById('+x2');
const buttonPrev = document.getElementById('-x1');
const buttonFirst = document.getElementById('-x2');

const popupCard = document.querySelector('.popup_card');
const shadowCard = document.querySelector('.shadow_popup');


function cardCreate(param) {
  let cardDiv = document.createElement('div');
  cardDiv.className = 'main_cards__card';
  cardDiv.id = param.id
  cardDiv.innerHTML =
    `<img src="${param.imgSrc}" alt="${param.alt}" class="card_img">
  <div class="card_name">${param.name}</div>
  <div class="card_button">Learn more</div>`
  document.querySelector('.main_cards').appendChild(cardDiv);
  cardDiv.addEventListener('click', popup);
}

let arr1 = [[
  Katrine = {
    id: "1",
    imgSrc: "assets/pets-katrine.png",
    alt: "Katrine",
    name: "Katrine",
    petBreed: "Cat - British Shorthair",
    text: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "9 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Jennifer = {
    id: "2",
    imgSrc: "assets/pets-jennifer.png",
    alt: "Jennifer",
    name: "Jennifer",
    petBreed: "Dog - Labrador",
    text: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Woody = {
    id: "3",
    imgSrc: "assets/pets-woody.png",
    alt: "Woody",
    name: "Woody",
    petBreed: "Dog - Golden Retriever",
    text: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "11 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Sophia = {
    id: "4",
    imgSrc: "assets/pets-sophia.png",
    alt: "Sophia",
    name: "Sophia",
    petBreed: "Dog - Shih tzu",
    text: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "5 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Timmy = {
    id: "5",
    imgSrc: "assets/pets-timmy.png",
    alt: "Timmy",
    name: "Timmy",
    petBreed: "Cat - British Shorthair",
    text: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "8 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Charly = {
    id: "6",
    imgSrc: "assets/pets-charly.png",
    alt: "Charly",
    name: "Charly",
    petBreed: "Dog - Jack Russell Terrier ",
    text: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "9 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Scarlett = {
    id: "7",
    imgSrc: "assets/pets-scarlett.png",
    alt: "Scarlett",
    name: "Scarlett",
    petBreed: "Dog - Jack Russell Terrier",
    text: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  Freddie = {
    id: "8",
    imgSrc: "assets/pets-freddie.png",
    alt: "Freddie",
    name: "Freddie",
    petBreed: "Cat - British Shorthair",
    text: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "4 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
]]


// let arr = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];

let countCards;
if (window.innerWidth > 1279) {
  countCards = 8;
}
if (window.innerWidth <= 1279 && window.innerWidth > 659) {
  countCards = 6;
}
if (window.innerWidth <= 659) {
  countCards = 3;
}
generate();
//Рисующий карточки цикл
function generate() {
  document.querySelector('.main_cards').innerHTML = '';
  for (let i = 0; i < countCards; i++) {
    if (arr1[pageNumber] === undefined) {
      cardCreate(arr1[pageNumber - 1][i])
    } else if (pageNumber > 0) {
      cardCreate(arr1[pageNumber - 1][i])
    }
  }
}

shuffle();
// Функция перемешивания массива
function shuffle() {
  for (let i = 0; i < 5; i++) {
    arrR = [...arr1[0]];
    // arr10 = arr1[pageNumber - 1].sort(() => Math.random() - 0.5);
    for (let i = arrR.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrR[i], arrR[j]] = [arrR[j], arrR[i]];
    }
    arr1.push(arrR);
  }

}

function check() {
  if (pageNumber === 6) {
    buttonNext.classList.add('disabled');
    buttonLast.classList.add('disabled');
  }

  if (pageNumber < 6) {
    buttonNext.classList.remove('disabled');
    buttonLast.classList.remove('disabled');
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
    pageNumber = Number(pageNumber) + 1;
    document.getElementById('this').innerHTML = pageNumber;
    generate();
    check();
  }
}

function forward2() /*переключает на 6ую страницу*/ {
  if (pageNumber < 6) {
    pageNumber = 6;
    document.getElementById('this').innerHTML = 6;
    generate();
    check();
  }
}

function back1() /*переключает на одну страницу назад*/ {
  if (pageNumber > 1) {
    pageNumber = Number(pageNumber) - 1;
    document.getElementById('this').innerHTML = pageNumber;
    generate();
    check();
  }

}
function back2() /*переключает на 1ую страницу*/ {
  if (pageNumber > 1) {
    pageNumber = 1;
    document.getElementById('this').innerHTML = pageNumber;
    generate();
    check();
  }
}


buttonNext.addEventListener('click', forward1);
buttonLast.addEventListener('click', forward2);
buttonPrev.addEventListener('click', back1);
buttonFirst.addEventListener('click', back2);


//попап

function popup() {
  shadowCard.classList.add('_active');
  popupCard.classList.add('_active');
  // console.log(this.id)
  let target = this.id
  let path = arr1[0][this.id - 1];
  // console.log(arr1[0][this.id - 1])
  // console.log(arr1[0][this.id - 1].imgSrc)
  popupCard.innerHTML = `
  <div class="pet_info-wrap">
    <div class="pet_info-exit">
      <img src="assets/exit.svg" alt="exit">
    </div>
    <div class="white_card">
        <img src="${path.imgSrc}" alt="${path.alt}">
        <div class="pet_info">
          <div class="pet_info-name">${path.name}</div>
          <div class="pet_info-breed">${path.petBreed}</div>
          <div class="pet_info-text">${path.text}</div>
          <ul class="pet_info-ul">
            <li><b>Age: </b>${path.age}</li>
            <li><b>Inoculations: </b>${path.inoculations}</li>
            <li><b>Diseases: </b>${path.diseases}</li>
          <li><b>Parasites: </b>${path.parasites}</li>
          </ul>
        </div>
      </div>
    </div>`
  if (popupCard) {
    // console.log('1123123123')
    const popupCloseButton = document.querySelector('.pet_info-exit')
    popupCloseButton.addEventListener('click', cl);
    shadowCard.addEventListener('click', cl);
  }
}
function cl() {
  // console.log('sdfs')
  shadowCard.classList.remove('_active');
  popupCard.classList.remove('_active');
  popupCard.innerHTML = ''
}





