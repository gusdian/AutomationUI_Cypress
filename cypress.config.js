const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ku9dk3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
