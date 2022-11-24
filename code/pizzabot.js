const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

//Put your Javscript code here:


alert(`Hey! Happy to serve your pizza. 
On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt(`Enter the name of the pizza you want to order today.`
);

 function checkOrderName(theOrderName) {
    if(
        theOrderName === vegetarian ||
        theOrderName === hawaiian || 
        theOrderName=== pepperoni
        ) {
            return true;
    } else {
        false;

    }
    
 }

const pizzaOnTheMenu = checkOrderName(orderName);


const orderQuantity = prompt(`How many of ${orderName} do you want?`);


const orderTotal = orderQuantity * pizzaPrice ; 

let cookingTime;
if (orderQuantity <= 2){
    cookingTime = 10;
} else if (orderQuantity <= 5){
    cookingTime = 15;
} else {
    cookingTime = 20;
}

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr , the pizzas will take ${cookingTime} minutes.`);

