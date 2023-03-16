import { tabLoader } from "../tabs";
import { addFooter } from "../footer";

function menuPageLoader() {
  tabLoader();

  document.querySelector(".menu-tab").className = "home-tab active-page";

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  const menuSample = document.createElement("div");
  menuSample.className = "menu-sample";
  menuSample.textContent =
    "Our menu features a variety of fresh and healthy options that are sure to satisfy your taste buds and quench your thirst. You can find our 3 favourites here.";

  const juiceOneContainer = document.createElement("div");
  juiceOneContainer.className = "juice-container";
  const juiceOneTitle = document.createElement("p");
  juiceOneTitle.className = "juice-title";
  juiceOneTitle.textContent = "Green Goddess Juice";
  const juiceOneIngredients = document.createElement("p");
  juiceOneIngredients.className = "juice-ingredients"
  juiceOneIngredients.textContent = "Kale, cucumber, celery, green apple, lemon, and ginger";
  const juiceOneDescription = document.createElement("p");
  juiceOneDescription.className = "juice-description";
  juiceOneDescription.textContent = "Nutrient-packed and refreshing, this juice is perfect for those looking to add more greens into their diet";

  const juiceTwoContainer = document.createElement("div");
  juiceTwoContainer.className = "juice-container";
  const juiceTwoTitle = document.createElement("p");
  juiceTwoTitle.className = "juice-title";
  juiceTwoTitle.textContent = "Sunrise Bliss Juice";
  const juiceTwoIngredients = document.createElement("p");
  juiceTwoIngredients.className = "juice-ingredients";
  juiceTwoIngredients.textContent = "Carrots, oranges, pineapple, and turmeric";
  const juiceTwoDescription = document.createElement("p");
  juiceTwoDescription.className = "juice-description";
  juiceTwoDescription.textContent = "Packed with antioxidants and vitamin C, this juice is a great way to start your day";

  const juiceThreeContainer = document.createElement("div");
  juiceThreeContainer.className = "juice-container";
  const juiceThreeTitle = document.createElement("p");
  juiceThreeTitle.className = "juice-title";
  juiceThreeTitle.textContent = "Berry Blast Juice";
  const juiceThreeIngredients = document.createElement("p");
  juiceThreeIngredients.className = "juice-ingredients";
  juiceThreeIngredients.textContent = "Strawberries, blueberries, raspberries, and beets";
  const juiceThreeDescription = document.createElement("p");
  juiceThreeDescription.className = "juice-description";
  juiceThreeDescription.textContent = "Bursting with flavor and nutrients, this juice is a perfect way to satisfy your sweet tooth while still getting a healthy dose of fruits and vegetables";

  juiceOneContainer.append(juiceOneTitle, juiceOneIngredients, juiceOneDescription);
  juiceTwoContainer.append(juiceTwoTitle, juiceTwoIngredients, juiceTwoDescription);
  juiceThreeContainer.append(juiceThreeTitle, juiceThreeIngredients, juiceThreeDescription);

  menuContainer.append(menuSample, juiceOneContainer, juiceTwoContainer, juiceThreeContainer);
  document.querySelector("#content").append(menuContainer);

  addFooter();
}

export { menuPageLoader };
