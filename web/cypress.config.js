const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/support/helper')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readPdf
      })
    },
    experimentalStudio: true,
    video: true,
    baseUrl: 'http://localhost:3000',
    // viewportWidth: 1440,
    // viewportHeight: 900
  },
});
