function tabLoader() {
  const header = document.createElement("header");
  const tabs = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.textContent = "home";
  menu.textContent = "menu";
  contact.textContent = "contact";

  header.appendChild(tabs);
  tabs.append(home, menu, contact)

  document.querySelector("#content").appendChild(header);
}

export { tabLoader };
