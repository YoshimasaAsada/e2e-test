const { Builder, Capabilities, logging, By } = require("selenium-webdriver");

const pref = new logging.Preferences();
pref.setLevel(logging.Type.BROWSER, logging.Level.DEBUG);

/**
 * google.comを開いて、成功したらブラウザーを終了します。
 * @param driver
 * @returns {Promise<void>}
 */
const testOpenPage = async (driver) => {
  try {
    // 下記urlで新規ウィンドウ立ち上げ
    await driver.get("https://yasdtech.com/contact");

    // idがnameの要素にテスト文字を入力
    const nameInput = await driver.findElement(By.id("name"));
    await nameInput.sendKeys("テスト文字");
  } catch (e) {
    console.log(e);
  } finally {
    // driver && (await driver.quit());
  }
};

const testWithBrowserCapabilities = (capabilities) => {
  capabilities.setLoggingPrefs(pref);
  const driver = new Builder().withCapabilities(capabilities).build();
  testOpenPage(driver);
};
testWithBrowserCapabilities(Capabilities.chrome());
// testWithBrowserCapabilities(Capabilities.firefox());
// testWithBrowserCapabilities(Capabilities.safari());
