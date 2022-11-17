const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80

//Put your Javscript code here:

const message = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;
alert(message);



function calculateTime(quantity) {
  if (quantity < 3) {
    return 10;
  } else if (quantity < 6) {
    return 15;
  } else {
    return 20;
  }
}

function checkOrderName(orderName) {

    if ( orderName === hawaiian || orderName === vegetarian || orderName === pepperoni ){
        return true;
    } else {
        return false; 
    }
}


function totalCost(orderQuantity){
   
    return pizzaPrice * orderQuantity;

}

function answer(orderName, orderPrice, time) {
    alert(`Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderPrice} kr. The pizzas will take ${time} minutes.` );

}

function orderPizza() {
    let orderName = prompt("Enter the name of the pizza you want to order today.");
   const orderOk = checkOrderName(orderName);
   
   if (orderOk){
    const orderQuantity =prompt(`How many of ${orderName} do you want?`);
    const price = totalCost(orderQuantity);
    const time = calculateTime(orderQuantity);
    answer(orderName, price, time);

   } else {

    alert("Try again");
    orderPizza();
   }

}

orderPizza();






