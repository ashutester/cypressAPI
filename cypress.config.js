const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: "https://reqres.in",
  },
  env: {
      petUrl: "https://petstore.swagger.io/v2",
      snapshotOnly: true
  },
})
