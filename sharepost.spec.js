// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('share post', function() {
  this.timeout(400000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('share post', async function() {
    await driver.get("https://proxap.in/")
    await driver.manage().window().setRect(1296, 696)
    await driver.findElement(By.linkText("Imran Khan blames ‘powerful Indian lobby’ in America for playing key role in strengthening New Delhi’s narrative against Pakistan")).click()
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".twp-social-share:nth-child(2) .twp-social-facebook .twp-social-count > .booster-icon")).click()
    vars["win6028"] = await waitForWindow(2000)
    vars["root"] = await driver.getWindowHandle()
    await driver.switchTo().window(vars["win6028"])
    await driver.findElement(By.css(".\\_55pe:nth-child(1) > span")).click()
    {
      const element = await driver.findElement(By.css(".\\_55pe:nth-child(1) > span"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".\\_42y_ .\\_54nh > span")).click()
    await driver.findElement(By.css(".focused .\\_55pe")).click()
    await driver.findElement(By.linkText("ProXap")).click()
    await driver.findElement(By.id("u_0_t")).click()
    {
      const element = await driver.findElement(By.css("#u_0_1t > .\\_2aha"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("u_0_t")).sendKeys("Top Story")
    await driver.findElement(By.id("u_0_26")).click()
    await driver.close()
    await driver.switchTo().window(vars["root"])
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".twp-social-share:nth-child(2) .twp-social-twitter .twp-social-count > .booster-icon")).click()
    vars["win8062"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win8062"])
    await driver.findElement(By.css(".button")).click()
    await driver.close()
    await driver.switchTo().window(vars["root"])
    {
      const element = await driver.findElement(By.linkText("Proxap"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.linkText("Proxap"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.linkText("Proxap"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.linkText("Proxap")).click()
    await driver.findElement(By.linkText("Scott McTominay: Manchester United midfielder out for ‘three to four weeks’")).click()
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".twp-social-share:nth-child(2) .twp-social-facebook .twp-social-count > .booster-icon")).click()
    vars["win6193"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win6193"])
    await driver.findElement(By.css(".\\_55pe:nth-child(1) > span")).click()
    await driver.findElement(By.css(".\\_42y_ .\\_54nh")).click()
    await driver.findElement(By.css(".focused .\\_55pe")).click()
    await driver.findElement(By.linkText("ProXap")).click()
    await driver.findElement(By.id("u_0_26")).click()
    await driver.close()
    await driver.switchTo().window(vars["root"])
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".twp-social-share:nth-child(2) .twp-social-twitter .twp-social-count > .booster-icon")).click()
    vars["win5151"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win5151"])
    await driver.findElement(By.css(".button")).click()
    await driver.close()
    await driver.switchTo().window(vars["root"])
    await driver.close()
  })
})
