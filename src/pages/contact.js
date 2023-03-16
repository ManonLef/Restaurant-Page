import { tabLoader } from "../tabs";
import { addFooter } from "../footer";

function contactPageLoader() {
  tabLoader();

  document.querySelector(".contact-tab").className = "home-tab active-page";

  const contact = document.createElement("p");
  contact.textContent = "this will be the contact page";
  document.querySelector("#content").append(contact);

  addFooter();
}

export { contactPageLoader };
