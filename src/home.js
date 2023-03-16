/* <div class="dummy-content">
    <div class="header">T H E • J O L L Y • J U I C E R</div>
    <img src="../peachtable.jpg" alt="peaches on a table" width="100%">
    <p class="welcome">Welcome to The Jolly Juicer! Our juice bar is the perfect place to grab a tasty and healthy drink made with locally sourced and organic fruits and veggies. Come in today and try one of our signature blends or create your own custom juice.</p>
  </div> */

function homePageLoad() {
  const restaurantName = document.createElement("div");
  restaurantName.className = "restaurant-name";
  restaurantName.textContent = "T H E • J O L L Y • J U I C E R";

  const heroImage = document.createElement("img");
  heroImage.src = "../peachtable.jpg";
  heroImage.alt = "peaches on a table";
  heroImage.width = "100%";

  const welcomeMessage = document.createElement("p");
  welcomeMessage.className = "welcome";
  welcomeMessage.textContent =
    "Welcome to The Jolly Juicer! Our juice bar is the perfect place to grab a tasty and healthy drink made with locally sourced and organic fruits and veggies. Come in today and try one of our signature blends or create your own custom juice.";

  const content = document.querySelector("#content");

  content.append(restaurantName, heroImage, welcomeMessage);
}

export { homePageLoad };
