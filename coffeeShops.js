class CoffeeShop {
  constructor(name, menu = []) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrders(order) {
    if (this.menu.filter((element) => element.name === order)) {
      this.orders.push(order);
    } else {
      return "This item is currently unavailable!";
    }
  }
  listOrders() {
    return this.orders;
  }
  fullfillOrder() {
    if (this.orders.length) {
      let item = this.orders[0];
      this.orders.shift();
      return `The ${item} is ready!`;
    }
    return "All orders have been fulfilled!";
  }
  dueAmount() {
    let sum = 0;
    for (let inx = 0; inx < this.menu.length; inx++) {
      sum += this.menu[inx].price;
    }
    return sum;
  }
  cheapestItem() {
    let cheapestItemOFMenu = this.menu[0].price;

    for (let i = 1; i < this.menu.length; i++) {
      if (this.menu[i].price < cheapestItemOFMenu) {
        cheapestItemOFMenu = this.menu[i].name;
      }
    }
    return cheapestItemOFMenu;
  }
  drinksOnly() {
    let onlyDrinks = [];

    for (let j = 0; j < this.menu.length; j++) {
      if (this.menu[j].type === "drink") {
        onlyDrinks.push(this.menu[j]);
      }
    }
    return onlyDrinks;
  }
  foodOnly() {
    let onlyFood = [];

    for (let j = 0; j < this.menu.length; j++) {
      if (this.menu[j].type === "food") {
        onlyFood.push(this.menu[j]);
      }
    }
    return onlyFood;
  }
}

let menu = [
  {
    name: "Fresh",
    type: "drink",
    price: 1000,
  },
  {
    name: "Hot Chocolate",
    type: "drink",
    price: 800,
  },
  {
    name: "Choco-pie",
    type: "food",
    price: 150,
  },
];
let coffeeHouse = new CoffeeShop("Coffee House", menu);

coffeeHouse.addOrders("Choco-pie");
coffeeHouse.addOrders("Hot Chocolate");
coffeeHouse.fullfillOrder();
coffeeHouse.fullfillOrder();
console.log(coffeeHouse.fullfillOrder());
console.log(coffeeHouse.listOrders());
