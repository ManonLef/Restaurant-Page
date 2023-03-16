import { addEventListeners } from ".";
import { clearContents } from "./clearContents";

function tabLoader() {
  clearContents();

  const header = document.createElement("header");
  const restaurantName = document.createElement("div")
  const tabs = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  restaurantName.textContent = "T H E • J O L L Y • J U I C E R"
  restaurantName.className = "logo"
  home.textContent = "home";
  home.className = "home-tab"
  menu.textContent = "menu";
  menu.className = "menu-tab"
  contact.textContent = "contact";
  contact.className = "contact-tab"

  header.appendChild(restaurantName)
  header.appendChild(tabs);
 
  tabs.append(home, menu, contact)

  document.querySelector("#content").appendChild(header);

  addEventListeners();
}

export { tabLoader };
