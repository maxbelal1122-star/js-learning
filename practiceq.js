let Data = "secret information";
class user {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  viewData(){
    console.log("data = ", Data);
  }
}

class Admid extends user {
  constructor(name, email){
    super(name,email);
  }
  editData() {
    Data = "some new value";
  }
}
let student = new user("bilal" , "abc@gmail.com");
let admin = new Admid("gulugulu" ,"admin@gmail.com");
