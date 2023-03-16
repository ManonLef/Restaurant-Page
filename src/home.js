import peachImage from "./peachtable.jpg";
import { tabLoader } from "./tabs";

function homePageLoader() {
  tabLoader();
  
  const restaurantName = document.createElement("div");
  restaurantName.className = "restaurant-name";
  restaurantName.textContent = "T H E • J O L L Y • J U I C E R";

  const heroImage = new Image();
  heroImage.src = peachImage;
  heroImage.alt = "peaches on a table";
  heroImage.width = "500";

  const welcomeMessage = document.createElement("p");
  welcomeMessage.className = "welcome";
  welcomeMessage.textContent =
    "Welcome to The Jolly Juicer! Our juice bar is the perfect place to grab a tasty and healthy drink made with locally sourced and organic fruits and veggies. Come in today and try one of our signature blends or create your own custom juice.";

  document.querySelector("#content").append(restaurantName, heroImage, welcomeMessage);
}

export { homePageLoader };
