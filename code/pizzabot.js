const vegetarian = "vegetarian pizza"
const hawaiian = "hawaiian pizza"
const pepperoni = "pepperoni pizza"
let orderName = ""
let orderQuantity = 0;
let orderTotal = 0;

const pizzaPrice = 80

const pizzas = [vegetarian, hawaiian, pepperoni];
//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${pizzas}`);
orderName = prompt("Enter the name of the pizza you want to order today.");

function checkOrderName(orderName){
    if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni)
        {
            return true;
        } else {
            alert(`We only have ${pizzas} to serve here, please choose one of them`);
        }

}
checkOrderName(orderName);

orderQuantity = prompt(`How many of ${orderName} do you want?`);

let cookTime = 0;
function cookingTime(){
 if (orderQuantity <=2){
     cookTime = 10
 }
 else if(orderQuantity > 3 && orderQuantity <= 5){
    cookTime = 15
 }
 else if(orderQuantity >= 6){
    cookTime = 20
 }
}

function totalCost (orderQuantity){
    const orderTotal = pizzaPrice * orderQuantity;
    alert(`Great I´ll get started on you ${orderName} right away. It will cost ${orderTotal} kr. Your order will take ${cookTime} minutes.`)

}
cookingTime(orderQuantity)
totalCost(orderQuantity)

