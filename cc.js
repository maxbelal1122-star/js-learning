const countryList = {
  USD: "US", INR: "IN", EUR: "FR", GBP: "GB", JPY: "JP",
  AUD: "AU", CAD: "CA", CNY: "CN", RUB: "RU", BRL: "BR",
  PKR: "PK", BDT: "BD", SAR: "SA", AED: "AE", KRW: "KR",
  SGD: "SG", THB: "TH", ZAR: "ZA", NZD: "NZ", CHF: "CH",
};

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    const newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    }
    if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let imgElement = element.closest(".select-container").querySelector("img");
  imgElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Swap button logic
const swapBtn = document.querySelector(".swap");
swapBtn.addEventListener("click", () => {
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  updateFlag(fromCurr);
  updateFlag(toCurr);

  form.dispatchEvent(new Event("submit"));
});

const form = document.querySelector("form");
const fromCurr = document.querySelector("select[name='from']");
const toCurr = document.querySelector("select[name='to']");
const msg = document.querySelector(".msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let amountInput = document.querySelector(".amount input");
  let amountVal = amountInput.value;

  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amountInput.value = 1;
  }

  const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;

  try {
    let response = await fetch(BASE_URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = (amountVal * rate).toFixed(2);
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Error! Internet check karo ya baad mein try karo.";
    console.log(err);
  }
});

window.addEventListener("load", () => {
  form.dispatchEvent(new Event("submit"));
});