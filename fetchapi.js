const URL = "https://randomuser.me/api/";
const random = document.querySelector("#fact");
const randomuser = async () => {
  let response = await fetch(URL);

  console.log(response.status);

  let data = await response.json();
random.innerText = data;
};

randomuser();