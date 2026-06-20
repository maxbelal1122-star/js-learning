let box = document.querySelector("#lightchanger");
let body = document.querySelector("body");
let currMode = "light";

box.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
body.classList.add("dark");
      } else {
        currMode = "light";
     body.classList.add("light");
    }

    console.log(currMode);
});