import { data } from "./getData.js";

import { clearBox } from "./main.js";

//filter function
export const filtered = (searchedName) => {
  const arr = data();
  const filteredCoctails = [];
  for (let el of arr) {
    let nameOfCoctail = el.strDrink.toLowerCase();
    if (nameOfCoctail.includes(searchedName.toLowerCase())) {
      filteredCoctails.push(el);
    }
  }
  return filteredCoctails;
};

//Show on Window function;
const container = document.querySelector(".container");
export function showOnWindow(array) {
  for (let el of array) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const name = document.createElement("h3");
    name.innerHTML = el.strDrink;
    img.src = el.strDrinkThumb;
    div.appendChild(img);
    div.appendChild(name);
    container.appendChild(div);
  }
}

//showing filtered coctails
const input = document.querySelector("input");
const searchBar = document.querySelector(".search-bar");
export function showFiltered(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key) {
    const fArray = filtered(input.value);
    if (fArray.length > 0) {
      console.log(fArray);
      clearBox();
      showOnWindow(fArray);
    } else {
      clearBox();
      const msg = document.createElement("h2");
      msg.innerHTML = "No matching found";
      msg.className = "errorMsg";
      searchBar.appendChild(msg);
      setTimeout(() => {
        msg.innerHTML = "";
      }, 500);
    }
  } else if (input.value === "") {
    clearBox();
    showOnWindow(dataDrinks);
  }
}
