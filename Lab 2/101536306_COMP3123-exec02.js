const greetter = (myArray) => {
  const greetText = "Hello";
  for (const item of myArray) {
    console.log(`${greetText} ${item}`);
  }
};

greetter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);

const capitalize = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join("")}`;

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map((color) => capitalize(color));

console.log(capitalizedColors);

const values = [1, 60, 20, 10, 5, 30];

const filterLessThanTwenty = values.filter((value) => value >= 20);

console.log(filterLessThanTwenty);

const array = [1, 2, 3, 4];

const calculateSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const calculateProduct = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

console.log(calculateSum(array));
console.log(calculateProduct(array));

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
