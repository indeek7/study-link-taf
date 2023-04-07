const { defineConfig } = require("cypress");

module.exports = defineConfig({
  longCommandTimeout: 120000,
  "taskTimeout": 120000,

  e2e: {
    "specPattern": "**/*spec.js",
    "viewportWidth": 1440,
    "viewportHeight": 900,
  },
});
