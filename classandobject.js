const employee = {
  calcTax(){
    console.log("tax rate is 10%");
  },
};
const KaranArjun = {
  salary : 500000,
  calcTax(){
    console.log("tax rate is 20%");
  }
};


KaranArjun.__proto__ = employee;