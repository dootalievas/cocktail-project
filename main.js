import { data } from "./getData.js";
import { filtered, showFiltered } from "./filter.js";
import { showOnWindow } from "./filter.js";
import { showOnModal } from "./modal.js";

const dataDrinks = data();
const container = document.querySelector(".container");
const input = document.querySelector("input");

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});

//shows all the drinks on the page
showOnWindow(dataDrinks);

//shows filtered when user types
input.addEventListener("keyup", showFiltered);

// clear function
export const clearBox = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
//modal window codes
container.addEventListener("click", showOnModal);
