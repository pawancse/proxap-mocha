// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('automatic-feature-image', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('automatic-feature-image', async function() {
    this.timeout(600000);
    await driver.get("https://proxap.in/wp-login.php?redirect_to=https%3A%2F%2Fproxap.in%2Fwp-admin%2F&reauth=1")
    await driver.manage().window().setRect(1296, 696)
    await driver.findElement(By.id("user_login")).sendKeys("admin")
    await driver.findElement(By.id("user_pass")).sendKeys("a2XjCa$X$3")
    await driver.findElement(By.id("wp-submit")).click()
    await driver.findElement(By.css(".menu-icon-post > .wp-menu-name")).click()
    await driver.findElement(By.name("apt_is_image")).click()
    {
      const dropdown = await driver.findElement(By.name("apt_is_image"))
      await dropdown.findElement(By.xpath("//option[. = 'Without image']")).click()
    }
    await driver.findElement(By.name("apt_is_image")).click()
    await driver.findElement(By.id("post-query-submit")).click()
    await driver.findElement(By.id("cb-select-all-1")).click()
    await driver.findElement(By.id("bulk-action-selector-top")).click()
    {
      const dropdown = await driver.findElement(By.id("bulk-action-selector-top"))
      await dropdown.findElement(By.xpath("//option[. = 'Generate featured image']")).click()
    }
    await driver.findElement(By.id("bulk-action-selector-top")).click()
    await driver.findElement(By.id("doaction")).click()
    await driver.wait(until.elementLocated(By.css(".successful:nth-child(152)")), 300000)
    await driver.close()
  }, 500000)
})
