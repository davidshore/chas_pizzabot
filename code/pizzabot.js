const vegetarian = "Vegetarian Pizza"
const hawaian = "Hawaian Pizza"
const pepperoni = "Pepperoni Pizza"
let orderName = ""
let orderQuantity = 0
let orderTotal = 0


const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaian} and ${pepperoni} `);




orderName = prompt("Enter the name of the pizza you want to order today.");
orderQuantity = prompt (`How many of ${orderName}  do you want.`);


orderTotal = orderQuantity * pizzaPrice;
const message = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
alert(message);