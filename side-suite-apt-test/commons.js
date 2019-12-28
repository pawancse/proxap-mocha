const utils = require("./utils.js");
const tests = {};
tests["automatic-feature-image"] = async (driver, vars, opts = {}) => {
  await driver.get("https://proxap.in/wp-login.php?redirect_to=https%3A%2F%2Fproxap.in%2Fwp-admin%2F&reauth=1");
  try {
    await driver.manage().window().setRect({
      width: 1296,
      height: 696
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.id(`user_login`)), configuration.timeout);
  await driver.findElement(By.id(`user_login`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`admin`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`user_pass`)), configuration.timeout);
  await driver.findElement(By.id(`user_pass`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`a2XjCa$X$3`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`wp-submit`)), configuration.timeout);
  await driver.findElement(By.id(`wp-submit`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.menu-icon-post > .wp-menu-name`)), configuration.timeout);
  await driver.findElement(By.css(`.menu-icon-post > .wp-menu-name`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`apt_is_image`)), configuration.timeout);
  await driver.findElement(By.name(`apt_is_image`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`apt_is_image`)), configuration.timeout);
  await driver.findElement(By.name(`apt_is_image`)).then(element => {
    return element.findElement(By.xpath(`//option[. = 'Without image']`)).then(option => {
      return option.click();
    });
  });
  await driver.wait(until.elementLocated(By.name(`apt_is_image`)), configuration.timeout);
  await driver.findElement(By.name(`apt_is_image`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`post-query-submit`)), configuration.timeout);
  await driver.findElement(By.id(`post-query-submit`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`cb-select-all-1`)), configuration.timeout);
  await driver.findElement(By.id(`cb-select-all-1`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`bulk-action-selector-top`)), configuration.timeout);
  await driver.findElement(By.id(`bulk-action-selector-top`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`bulk-action-selector-top`)), configuration.timeout);
  await driver.findElement(By.id(`bulk-action-selector-top`)).then(element => {
    return element.findElement(By.xpath(`//option[. = 'Generate featured image']`)).then(option => {
      return option.click();
    });
  });
  await driver.wait(until.elementLocated(By.id(`bulk-action-selector-top`)), configuration.timeout);
  await driver.findElement(By.id(`bulk-action-selector-top`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`doaction`)), configuration.timeout);
  await driver.findElement(By.id(`doaction`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.successful:nth-child(152)`)), 300000);
  await driver.close();
}
module.exports = tests;