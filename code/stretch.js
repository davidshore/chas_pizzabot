const pizzaPrice = 80,
      pizzaDiv = document.querySelector('.pizza-type'),
      amountDiv = document.querySelector('.amount'),
      orderBtn = document.querySelector('.order'),
      orderContainer = document.querySelector('.order-container'),
      orderMessage = document.querySelector('.order-message');

let orderName = '',
    orderAmount = 0,
    orderTotal = 0,
    cookingTime = 0;

const stretchString = `Sam Panopoulos, a Greek-born Canadian, created the first Hawaiian pizza at the Satellite Restaurant in Chatham, Ontario, Canada in 1962. Inspired in part by his experience preparing Chinese dishes which commonly mix sweet and savory flavours, Panopoulos experimented with adding pineapple, ham, bacon, and other toppings. These additions were not initially very popular.

The addition of pineapple to the traditional mix of tomato sauce and cheese, along with either ham or bacon, later became popular locally and eventually became a staple offering of pizzerias on a global scale. The name of this creation is, in fact, actually not directly inspired by the U.S. state of Hawaii at all; Panopoulos chose the name Hawaiian after the brand of canned pineapple they were using at the time.

In Germany, Hawaiian pizza is thought to be a variation of the ham, pineapple and cheese-topped Toast Hawaii, originally introduced by Germany's first TV cook Clemens Wilmenrod in 1955.`;

function countWords(paragraph) {
  return paragraph.split(' ').length;
}

function countPineapple(paragraph) {
  return paragraph.split('pineapple').length - 1;
}

async function getPizzas() {
  const response = await fetch('pizzas.json');

  if(response.ok){
    const data = await response.json();
    return data;
  } else {
    const h1 = document.querySelectorAll('h1');
    h1.forEach(head => {
      head.classList.add('hide');
    })
    orderBtn.classList.add('hide');
    pizzaDiv.innerHTML = '<h1>Something Went Wrong</h1>';
  }
};

function createPizzaCards(pizzas){
  for(let i = 0; i < Object.keys(pizzas).length; i++){
    pizzaDiv.innerHTML += `
      <div class="pizza" id="${pizzas[i].pizza.toLowerCase()}">
        <h2>${pizzas[i].pizza}<br/>80:-</h2>
        <p class="description">${pizzas[i].description}</p>
      </div>
    `;
    const pizzaId = document.querySelector(`#${pizzas[i].pizza.toLowerCase()}`);
  
    pizzaId.style.background = `url('../img/${pizzas[i].imgSrc}') no-repeat center center/cover`;
  }
}

function createBtns() {
  for (let i = 0; i < 10; i++) {
    amountDiv.innerHTML += `
    <button class="btn" id="${i + 1}">${i + 1}</button>
    `;
  }
}

function addEventListeners() {
  const pizzaCards = document.querySelectorAll('.pizza'),
        btns = document.querySelectorAll('.btn');

  pizzaCards.forEach(card => {
    card.addEventListener('click', () => {
      pizzaCards.forEach(sibling => {
        sibling.style.opacity = '0.4';
        sibling.style.boxShadow = '#333 3px 3px 5px';
      })
      card.style.opacity = '1';
      card.style.boxShadow = '#333 3px 3px 5px';

      orderName = card.getAttribute('id');
    })
  })

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(sibling => {
        sibling.style.opacity = '0.4';
        sibling.style.boxShadow = '#333 3px 3px 5px';
      })
      btn.style.opacity = '1';
      btn.style.boxShadow = '#333 3px 3px 5px';
      orderAmount = btn.getAttribute('id');
    })
  })
}

function toggle() {
  orderContainer.classList.toggle('hide');
  orderMessage.classList.toggle('hide');
}

function takeOrder() {
  orderBtn.addEventListener('click', () => {
      if(orderName === '' || orderAmount === 0){
        if(orderName === '') {
          const pizzas = document.querySelectorAll('.pizza');
          pizzas.forEach(pizza => {
            pizza.style.boxShadow = 'red 5px 5px 10px';
          })
        }
        if(orderAmount === 0) {
          const amountBtn = document.querySelectorAll('.btn');
          amountBtn.forEach(btn => {
            btn.style.boxShadow = 'red 5px 5px 10px';
          })
        }
      } else {
        if(orderAmount < 3) {
          cookingTime = 10;
        } else if (orderAmount >= 3 && orderAmount < 6){
          cookingTime = 15;
        } else {
          cookingTime = 20;
        }
        if(orderAmount > 1) {
          orderMessage.innerHTML = `
            <p>
              Great! <br/>
              I'll get started on your ${orderName} pizzas right away. <br/> 
              It will cost ${orderAmount * pizzaPrice}SEK
            </p>
            <p>The pizzas will take ${cookingTime} minutes.</p>
            <p class="stretch-text">Did you know the first 3 paragraphs on Wikipedia Article about Hawaiian Pizza contains ${countWords(stretchString)} words and contains the word "pineapple" ${countPineapple(stretchString)} times?</p>
          `;
        } else {
          orderMessage.innerHTML = `
            <p>
              Great! <br/>
              I'll get started on your ${orderName} pizza right away. <br/> 
              It will cost ${orderAmount * pizzaPrice}SEK
            </p>
            <p>The pizza will take ${cookingTime} minutes.</p>
            <p class="stretch-text">Did you know the first 3 paragraphs on Wikipedia Article about Hawaiian Pizza contains ${countWords(stretchString)} words and contains the word "pineapple" ${countPineapple(stretchString)} times?</p>
          `;
        }
        toggle();
      }
  })
}

getPizzas().then(o => {
  orderContainer.classList.toggle('hide');
  createPizzaCards(o);
  createBtns();
  addEventListeners();
  takeOrder();
})