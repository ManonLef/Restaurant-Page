import { addEventListeners } from ".";
import { clearContents } from "./clearContents";

function tabLoader() {
  clearContents();
  
  const header = document.createElement("header");
  const tabs = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.textContent = "home";
  home.className = "home-tab"
  menu.textContent = "menu";
  menu.className = "menu-tab"
  contact.textContent = "contact";
  contact.className = "contact-tab"

  header.appendChild(tabs);
  tabs.append(home, menu, contact)

  document.querySelector("#content").appendChild(header);

  addEventListeners();
}

export { tabLoader };
