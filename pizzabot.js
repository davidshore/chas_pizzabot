const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
let cokingTime = 0;
const pizzaPrice = 80;

//Put your Javscript code here:
alert(
  "Hey! Happy to serve your pizza. On our menu we have " + vegetarian,
  +hawaiian,
  +" and" + pepperoni
);
let orderName = prompt("Enter the name of the pizza you want to order today");

const orderQuantity = prompt("How many of " + orderName + " do you want?");

if (checkOrderName(orderName)) {
  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      orderTotal +
      " kr" +
      "The pizzas will take " +
      cokingTime +
      "  minutes"
  );
} else {
  alert(orderName + " is not on the menue!");
}

function checkOrderName(theorderName) {
  if (
    theorderName === vegetarian ||
    theorderName === hawaiian ||
    theorderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

totalCost();

function cookingTime(orderQuantity) {
  if (orderQuantity <= 2 && orderQuantity >= 1) {
    return 10;
  } else if (orderQuantity >= 2 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

cookingTime();
