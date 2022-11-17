const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

function takeOrder() {

    const orderName = prompt('Enter the name of the pizza you want to order today.');
    return orderName;

}

function checkOrderName(orderName) {

    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true;
    } else {
        return false;
    }


}

function howMany(orderName) {

    const orderQuantity = prompt(`How many ${orderName} do you want?`);
    return orderQuantity;

}

function totalCost(quantity) {

    return quantity * pizzaPrice;

}

function determineTime(quantity) {

    if (quantity < 3) {

        return 10;

    } else if (quantity < 6) {

        return 15;

    } else {

        return 20;

    }

}

function sendAnswer(orderName, orderTotal, time) {

    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`)

}

function orderPizzas() {

    alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
    const orderName = takeOrder();
    const isOrderCorrect = checkOrderName(orderName);

    if (isOrderCorrect) {

        const quantity = howMany(orderName);
        const cost = totalCost(quantity);
        const time = determineTime(quantity)
        sendAnswer(orderName, cost, time);

    } else {

        alert('We don´t have that Pizza on the menu. Maybe you misspelled?');
        orderPizzas();

    }

}

orderPizzas();

