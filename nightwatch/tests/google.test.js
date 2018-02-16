module.exports = {
  'Demo test Google': function(browser) {
    browser
      .url('http://google.com')
      .waitForElementVisible('body', 10000)
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      // .waitForElementVisible('button[name=btnK]', 10000)
      // .click('button[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Nachtwache')
      .end();
  }
};
