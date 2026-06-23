class Toyota {
  constructor(brand , milage){
    console.log("creating new object");
    this.brand = brand;
    this.milage = milage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  
}

let fortuner = new Toyota("fortuner" , 12);
