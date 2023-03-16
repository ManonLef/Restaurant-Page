import { homePageLoader } from "./home";
import { menuPageLoader } from "./menu";
import "./style.css";

homePageLoader();

function addEventListeners() {
  //home
  document.querySelector(".home-tab").addEventListener("click", homePageLoader);
  //menu
  document.querySelector(".menu-tab").addEventListener("click", menuPageLoader);
  //contact
}

export { addEventListeners }
