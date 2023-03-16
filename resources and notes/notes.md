## 20230315

- installed webpack
- idea: The Jolly Juicer
- setup:
  - `npm init -y`
  - `npm install webpack webpack-cli --save-dev`
  - add `.gitignore`
  - src folder
    - `index.js`
  - dist folder
    - `index.html` with script src `main.js`
  - `webpack.config.js file` with
    ```
    const path = require("path");
    module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    };
    ```
  - run `npx webpack` (creates `main.js`)
  - use `npx webpack --watch` to automatically refresh on changes instead of having to rerun webpack

  - the above are step 1, 2 and 3

## 20230316
- added photo homepage: peaches on table: by LUM3N https://unsplash.com/photos/RYqO8DhPg68

- ChatGPT created juices for the menu:

1. Green Goddess Juice
Kale, cucumber, celery, green apple, lemon, and ginger. Nutrient-packed and refreshing, this juice is perfect for those looking to add more greens into their diet.
2. Sunrise Bliss Juice
Carrots, oranges, pineapple, and turmeric. Packed with antioxidants and vitamin C, this juice is a great way to start your day.
3. Berry Blast Juice
Strawberries, blueberries, raspberries, and beets. Bursting with flavor and nutrients, this juice is a perfect way to satisfy your sweet tooth while still getting a healthy dose of fruits and vegetables.