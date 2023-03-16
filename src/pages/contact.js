import { tabLoader } from "../tabs";

function contactPageLoader() {
  tabLoader();

  document.querySelector(".contact-tab").className = "home-tab active-page"

  const contact = document.createElement("p");
  contact.textContent = "this will be the contact page";
  document.querySelector("#content").append(contact);
}

export { contactPageLoader };
