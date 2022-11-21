const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
const x = vegetarian;
const y = hawaiian;
const z = pepperoni;

const checkOrderName = (orderName) => {
  if (orderName === x || orderName === y || orderName === z) {
    return true;
  } else {
    return false;
  }
};

const orderTotal = (orderQuantity) => {
  return orderQuantity * pizzaPrice;
};

const cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    return 10;
  } else if (orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};

alert(
  "Hey! Happy to serve your pizza. On our menu we have " + x + ", " + y + " and " + z
);

const orderName = prompt("Enter the name of the pizza you want to order today.");

const order = checkOrderName(orderName);

if (order) {
  const orderQuantity = prompt("How many of " + orderName + " do you want?");
  const time = cookingTime(orderQuantity);
  alert("The pizzas will take " + time + " minutes.");
  const total = orderTotal(orderQuantity);
  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      total +
      " kr."
  );
} else {
  alert(orderName + " is not available on the menu.");
}
