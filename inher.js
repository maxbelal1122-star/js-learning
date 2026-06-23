class Person {
  constructor() {
    console.log("enter parent constructor");
    this.species = "homo sapiens";
  }

  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  constructor(branch){
    console.log("enter child constructor");
    super();
  this.branch = branch;
  console.log("exit child constructor");
  }
  work() {
    console.log("solve problem, build something");
  }
}

let bilal = new Engineer("Chemical Enginner");
