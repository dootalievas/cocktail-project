import { clearBox } from "./main.js";
import { data } from "./getData.js";
import { showOnWindow } from "./filter.js";
const dataDrinks = data();

//modal window codes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnOpenModals = document.querySelectorAll(".show-modal");

export const closeModal = function () {
    modal.classList.add("hide");
    overlay.classList.add("hide");
    modal.classList.remove("location");
    showOnWindow(dataDrinks);
};

// creating elements in modal window
const imgModal = document.querySelector(".imgModal");
const nameOfCocModel = document.querySelector(".nameOfCoctail");
const pModel = document.querySelector(".instruction");
const table = document.querySelector(".tableModal");

//Showing drinks info in popupWindow
export const showOnModal = (event) => {
    const imgLink = event.target.currentSrc;
    for (let el of dataDrinks) {
        //finding drink with clicked imagelink
        if (el.strDrinkThumb === imgLink) {
            console.log(el);
            modal.classList.remove("hide");
            overlay.classList.remove("hide");
            modal.classList.add("location");
            imgModal.src = el.strDrinkThumb;
            nameOfCocModel.innerHTML = el.strDrink;
            pModel.innerHTML = el.strInstructions;
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            clearBox();
            //getting ingredients for the drink
            for (let key in el) {
                if (key.includes("Ingredient")) {
                    console.log(key, el[key]);
                    const tr = document.createElement("tr");
                    tr.className = "back";
                    const td1 = document.createElement("td");
                    td1.className = "back";
                    const td2 = document.createElement("td");
                    td2.className = "back";
                    td1.innerHTML = '<i class="fas fa-check-circle back"></i>';
                    td2.innerHTML = el[key];
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    table.appendChild(tr);
                }
            }
        }
    }
};
// closing popup window and overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hide")) {
        closeModal();
        showOnWindow(dataDrinks);
    }
});


