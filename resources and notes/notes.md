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
