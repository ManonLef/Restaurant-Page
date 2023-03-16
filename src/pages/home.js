import { tabLoader } from "../tabs";

function homePageLoader() {
  tabLoader();

  document.querySelector(".home-tab").className = "home-tab active-page";

  const hero = document.createElement("div");
  hero.className = "hero";

  const heroText = document.createElement("div");
  heroText.className = "hero-text";

  const topText = document.createElement("p");
  topText.className = "top-text";
  topText.textContent = "Welcome to The Jolly Juicer!";

  const bottomText = document.createElement("p");
  bottomText.className = "bottom-text";
  bottomText.textContent =
    "Our juice bar is the perfect place to grab a tasty and healthy drink made with locally sourced and organic fruits and veggies. Come in today and try one of our signature blends or create your own custom juice.";

  document.querySelector("#content").appendChild(hero);
  hero.appendChild(heroText);
  heroText.append(topText, bottomText);
}

export { homePageLoader };
