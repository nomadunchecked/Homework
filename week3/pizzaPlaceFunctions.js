/* eslint-disable prettier/prettier */
let toppings = ["chicken", "bacon", "tomato", "pepperoni", "olives", "ranch"];

function listToppings(pizzaToppings) {
  let lastItem = pizzaToppings.length - 1;

  pizzaToppings[lastItem] = `and ${pizzaToppings[lastItem]}`;

  return pizzaToppings;
}

function greetCustomer(pizzaToppings) {
  let topping;
  let theToppings = [];

  for (topping of pizzaToppings) {
    theToppings.push(topping);
  }
  listToppings(theToppings);

  let greeting = "Welcome to Romeo's Pizza, our toppings are:";

  for (topping of theToppings) {
    if (!(topping == theToppings[theToppings.length - 1])) {
      greeting += ` ${topping},`;
    } else {
      greeting += ` ${topping}.`;
    }
  }
  console.log(greeting);
}

function getPizzaOrder(size, crust, ...pizzaToppings) {
  let orderArray = [size, crust];

  if (pizzaToppings.length !== 0) {
    let toppingsArray = [];
    let topping;
    let last = pizzaToppings.length - 1;
    listToppings(pizzaToppings);

    for (topping of pizzaToppings) {
      if (topping !== pizzaToppings[last]) {
        toppingsArray += `${topping}, `;
      } else {
        toppingsArray += `${topping}`;
      }
    }

    orderArray.push(toppingsArray);

    console.log(
      `One ${size}, ${crust} crust pizza with ${toppingsArray} coming up!`
    );
  } else {
    console.log(`One ${size}, ${crust} crust cheese pizza coming up!`);
  }
  return orderArray;
}

function preparePizza(orderArray) {
  let orderObject = {
    size: orderArray[0],
    crust: orderArray[1],
    toppings: orderArray[2],
  };
  console.log("Cooking pizza...");
  return orderObject;
}

function servePizza(pizza) {
  if (!pizza.toppings) {
    console.log(
      `Order up! Here's your ${pizza.size}, ${pizza.crust} crust cheese pizza. Enjoy!`
    );
  } else {
    console.log(
      `Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`
    );
  }
  return pizza;
}

greetCustomer(toppings);
let orderArray = getPizzaOrder("large", "thin", "chicken", "bacon", "ranch");
let orderObject = preparePizza(orderArray);
servePizza(orderObject);
