const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
function start() {
  alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
  let orderName = prompt("Enter the name of the pizza you want to order today");
  if (checkOrderName(orderName)) {
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);
    let orderTotal = totalCost(orderQuantity);
    alert(
      `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
        orderQuantity
      )} minutes.`
    );
  } else {
    alert("we don't have that");
  }
}
function checkOrderName(name) {
  if (name === "Vegetarian Pizza" || name === "Hawaiian Pizza" || name === "Pepperoni Pizza") return true;
  return false;
}
function totalCost(orderQuantity) {
  return orderQuantity + pizzaPrice;
}
function cookingTime(orderQuantity) {
  if (orderQuantity > 5) {
    return 20;
  } else if (orderQuantity > 2) {
    return 15;
  }
  return 10;
}
start();
