class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
}

let myCar = new Car("Black", "Jaguar");
let yourCar = new Car("White", "Audi");

console.log(`Can i Exchange my ${myCar.color} ${myCar.model} with your ${yourCar.color} ${yourCar.model}` ) 

console.log(myCar instanceof Car)
console.log(yourCar instanceof Car)
console.log(Car instanceof Object)
