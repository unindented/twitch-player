jest.setTimeout(10000);

describe("navigation", () => {
  let page;

  beforeAll(async () => {
    page = await browser.newPage();

    page.on("console", msg => {
      // eslint-disable-next-line no-console
      console.log(`${msg.type()}: ${msg.text()}`);
    });

    await page.goto("http://localhost:3003?lng=en");
    await page.waitFor(1000);
  });

  afterAll(async () => {
    await page.close();
  });

  it("displays the right title", async () => {
    let title = await page.title();
    expect(title).toContain("TwitchPlayer");
  });

  it("navigates to 'Home' by default", async () => {
    const homePage = '[data-testid="home-page"]';
    await page.waitFor(homePage);
    const homePageEl = await page.$(homePage);
    expect(homePageEl).toBeDefined();
  });

  it("navigates to 'Live Channels'", async () => {
    const channelsLink = '[data-testid="navigation-channels-icon"]';
    const channelsSection = '[data-testid="all-channels"]';
    await page.waitFor(channelsLink);
    await page.click(channelsLink);
    await page.waitFor(channelsSection);
    const channelsSectionEl = await page.$(channelsSection);
    expect(channelsSectionEl).toBeDefined();
  });

  it("navigates to 'Categories'", async () => {
    const categoriesLink = '[data-testid="navigation-categories-icon"]';
    const categoriesSection = '[data-testid="all-categories"]';
    await page.waitFor(categoriesLink);
    await page.click(categoriesLink);
    await page.waitFor(categoriesSection);
    const categoriesSectionEl = await page.$(categoriesSection);
    expect(categoriesSectionEl).toBeDefined();
  });

  it("navigates to 'Search'", async () => {
    const searchLink = '[data-testid="navigation-search-icon"]';
    const searchPage = '[data-testid="search-page"]';
    await page.waitFor(searchLink);
    await page.click(searchLink);
    await page.waitFor(searchPage);
    const searchPageEl = await page.$(searchPage);
    expect(searchPageEl).toBeDefined();
  });

  it("navigates to 'Settings'", async () => {
    const settingsLink = '[data-testid="navigation-settings-icon"]';
    const settingsPage = '[data-testid="settings-page"]';
    await page.waitFor(settingsLink);
    await page.click(settingsLink);
    await page.waitFor(settingsPage);
    const settingsPageEl = await page.$(settingsPage);
    expect(settingsPageEl).toBeDefined();
  });

  it("navigates back to 'Home'", async () => {
    const homeLink = '[data-testid="navigation-home-icon"]';
    const homePage = '[data-testid="home-page"]';
    await page.waitFor(homeLink);
    await page.click(homeLink);
    await page.waitFor(homePage);
    const homePageEl = await page.$(homePage);
    expect(homePageEl).toBeDefined();
  });
});
