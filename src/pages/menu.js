import { tabLoader } from "../tabs";
import { addFooter } from "../footer";

function menuPageLoader() {
  tabLoader();

  document.querySelector(".menu-tab").className = "home-tab active-page";

  const menu = document.createElement("p");
  menu.textContent = "this will be the menu page";
  document.querySelector("#content").append(menu);

  addFooter();
}

export { menuPageLoader };
