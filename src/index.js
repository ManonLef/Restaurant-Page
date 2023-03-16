import { homePageLoader } from "./pages/home";
import { menuPageLoader } from "./pages/menu";
import { contactPageLoader } from "./pages/contact";;
import "./style.css";

homePageLoader();

function addEventListeners() {
  //home
  document.querySelector(".home-tab").addEventListener("click", homePageLoader);
  //menu
  document.querySelector(".menu-tab").addEventListener("click", menuPageLoader);
  //contact
  document.querySelector(".contact-tab").addEventListener("click", contactPageLoader);
}

export { addEventListeners };
