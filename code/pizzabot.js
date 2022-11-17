const vegetarian = "Vegetarian Pizza",
      hawaiian = "Hawaiian Pizza",
      pepperoni = "Pepperoni Pizza";
      pizzaPrice = 80;

let orderName = ''
    orderQuantity = '';

const stretchString = `Sam Panopoulos, a Greek-born Canadian, created the first Hawaiian pizza at the Satellite Restaurant in Chatham, Ontario, Canada in 1962. Inspired in part by his experience preparing Chinese dishes which commonly mix sweet and savory flavours, Panopoulos experimented with adding pineapple, ham, bacon, and other toppings. These additions were not initially very popular.

The addition of pineapple to the traditional mix of tomato sauce and cheese, along with either ham or bacon, later became popular locally and eventually became a staple offering of pizzerias on a global scale. The name of this creation is, in fact, actually not directly inspired by the U.S. state of Hawaii at all; Panopoulos chose the name Hawaiian after the brand of canned pineapple they were using at the time.

In Germany, Hawaiian pizza is thought to be a variation of the ham, pineapple and cheese-topped Toast Hawaii, originally introduced by Germany's first TV cook Clemens Wilmenrod in 1955.`;

function greeting(){
  return alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
}

function checkOrderName(orderName){
  if (orderName === vegetarian.toLowerCase() || orderName === hawaiian.toLowerCase() || orderName === pepperoni.toLowerCase() || orderName.split('vegetarian').length === 2 || orderName.split('hawaiian').length === 2 || orderName.split('pepperoni').length === 2){
    return true;
  } else {
    return false;
  }
}

function getOrderName(){
  let checkState = false;
  do {
    orderName = prompt('Enter the name of the pizza you want to order today.').toLowerCase();
    if (checkOrderName(orderName)){
      checkState = true;
    } else {
      checkState = false;
    }
    if(checkState === false && orderName === ''){
      alert(`Please enter which pizza to order, we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);
    } else if (checkState === false) {
      //orderName !== vegetarian || orderName !== hawaiian || orderName !== pepperoni
      alert(`Sorry, we don't have that item on the menu. We have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);
      orderName = '';
    }
  } while (checkState === false)
}

function checkQuantity(amount) {
  if(amount < 1 || amount > 10) {
    alert('Please enter an amount between 1 - 10');
    orderQuantity = 0;
  }
}

function getQuantity(){
  do {
    if (orderName.split(' ').length === 1){
      orderQuantity = prompt(`How many of ${orderName} pizza do you want?`);
      checkQuantity(orderQuantity);
    } else {
      orderQuantity = prompt(`How many of ${orderName} do you want?`);
      checkQuantity(orderQuantity);
    }
  } while (orderQuantity === 0)
}

function cookingTime(orderQuantity) {
  if (orderQuantity < 3) {
    return 'The pizzas will take 10 minutes.';
  } else if (orderQuantity > 2 && orderQuantity < 6) {
    return 'The pizzas will take 15 minutes.';
  } else {
    return 'The pizzas will take 20 minutes.';
  }
}

function totalCost(orderQuantity) {
  const orderTotal = orderQuantity * pizzaPrice;
  if (orderName.split(' ').length === 1){
    if (orderQuantity < 2){
      alert(`Great, I'll get started on your ${orderName} pizza right away, it will cost ${orderTotal} kr. ${cookingTime(orderQuantity)}`);
    } else {
      alert(`Great, I'll get started on your ${orderName} pizzas right away, it will cost ${orderTotal} kr. ${cookingTime(orderQuantity)}`);
    }
  } else {
    if (orderQuantity < 2) {
      alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${cookingTime(orderQuantity)}`);
    } else {
      alert(`Great, I'll get started on your ${orderName}s right away, it will cost ${orderTotal} kr. ${cookingTime(orderQuantity)}`);
    }
  }
}

function countWords(paragraph) {
  return paragraph.split(' ').length;
}

function countPineapple(paragraph) {
  return paragraph.split('pineapple').length - 1;
}

greeting();
getOrderName();
getQuantity();
totalCost(orderQuantity);
alert(`Did you know the first 3 paragraphs on Wikipedia Article about Hawaiian Pizza contains ${countWords(stretchString)} words and contains the word "pineapple" ${countPineapple(stretchString)} times?`);