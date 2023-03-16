import { tabLoader } from "./tabs";
import { movePage } from "./movePage";

function menuPageLoader() {
  movePage();
  tabLoader();

  const tab = document.querySelector(".menu-tab");
  tab.className = "menu-tab active-page";

  const menu = document.createElement("p");
  menu.textContent = "this will be the menu page";
  document.querySelector("#content").append(menu);
}

export { menuPageLoader };
