let pizzaPlace = "Romeo's Pizza";
let numberOfToppings = 9;
console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);
console.log(
  `At ${pizzaPlace}, we offer ${numberOfToppings} best-quality topping.`
);
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i + " is an even number topping");
  }
}
