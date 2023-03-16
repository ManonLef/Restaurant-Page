import { homePageLoader } from "./home";
import { menuPageLoader } from "./menu";
import "./style.css"

homePageLoader();

document.querySelector(".menu-tab").addEventListener("click", menuPageLoader)