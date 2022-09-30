const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 30000,
  video: false,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://sampleapp.tricentis.com/101/app.php',
    experimentalSessionAndOrigin: true,
  },
});
