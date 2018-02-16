const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['tests'],
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': './geckodriver-v0.19.1-win64/geckodriver.exe',
      'webdriver.edge.driver': './MicrosoftWebDriver.exe'
    }
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};
