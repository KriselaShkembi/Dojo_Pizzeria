function pizzaOven (crustType, sauceType, cheeses, topings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.topings = topings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional",["mozzarella"], ["pepperoni","sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "marinara", ["feta"],["olives", "onions"]);
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "traditional", ["feta"],["sausage"]);
console.log(pizza4);

var crustType = ["deep dish", "hand tossed", "cracker", "thick"];
var sauceType = ["traditional", "marinara", "pesto", "hummus", "buffalo"]
var cheeses = ["mozarella", "feta", "cheddar", "parmesan"];
var topings = ["chicken", "ham", "cauliflower", "pickeled"];


function pickRandom (arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}


function randomPizza() {
    var pizza = {}
    pizza.crustType = pickRandom(crustType);
    pizza.sauceType = pickRandom(sauceType);
    pizza.cheeses = pickRandom(cheeses);
    pizza.topings = pickRandom(topings);
    return pizza;
}

console.log(randomPizza());

