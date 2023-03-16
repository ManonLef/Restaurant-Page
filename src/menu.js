import { tabLoader } from "./tabs";
import { clearContents } from "./clearContents";

function menuPageLoader() {
  clearContents();
  tabLoader();

  const menu = document.createElement("p");
  menu.textContent = "this will be the menu page";
  document.querySelector("#content").append(menu);
}

export { menuPageLoader };
