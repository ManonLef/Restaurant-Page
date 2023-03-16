import { tabLoader } from "../tabs";
import { addFooter } from "../footer";

function contactPageLoader() {
  tabLoader();

  document.querySelector(".contact-tab").className = "home-tab active-page";

  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";

  const info = document.createElement("p");
  info.className = "contact-info";
  info.textContent =
    "Please feel free to get in touch with us via phone or email during our opening hours. We're always happy to answer any questions you may have or help you choose the perfect juice for your needs. Thank you for choosing Jolly Juicer - we can't wait to serve you!";

  const contactDetails = document.createElement("div");
  contactDetails.className = "contact-details";
  const contactOptions = document.createElement("p");
  contactOptions.className = "contact-options";
  contactOptions.textContent = "Contact Details"
  const contactEmail = document.createElement("p");
  contactEmail.textContent = "Email: info@jollyjuicer.com";
  const contactPhone = document.createElement("p");
  contactPhone.textContent = "Phone: +1 (555) 123-4567";
  const contactAddress = document.createElement("p");
  contactAddress.textContent =
    "Address: 123 Main Street, Suite 456, Anytown, NP";

  const openingHours = document.createElement("div");
  openingHours.className = "opening"
  const hours = document.createElement("p");
  hours.className = "hours"
  hours.textContent = "Opening Hours"
  const mondayFriday = document.createElement("p");
  mondayFriday.textContent = "Monday - Friday: 8am - 6pm";
  const weekend = document.createElement("p");
  weekend.textContent = "Saturday - Sunday: 9am - 5pm"

  contactDetails.append(contactOptions, contactEmail, contactPhone, contactAddress)
  openingHours.append(hours, mondayFriday, weekend)
  contactContainer.append(info, contactDetails, openingHours)
  document.querySelector("#content").append(contactContainer);

  addFooter();
}

export { contactPageLoader };
