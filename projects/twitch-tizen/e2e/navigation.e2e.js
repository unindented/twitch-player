jest.setTimeout(10000);

describe("navigation", () => {
  let page;

  beforeAll(async () => {
    page = await browser.newPage();

    page.on("console", msg => {
      // eslint-disable-next-line no-console
      console.log(`${msg.type()}: ${msg.text()}`);
    });

    await page.goto("http://localhost:3002?lng=en");
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
    const homeHeading = 'h2[data-testid="heading"]';
    await page.waitFor(homeHeading);
    const homeHeadingText = await page.$eval(homeHeading, el => el.textContent);
    expect(homeHeadingText).toBe("Featured Channels");
  });

  it("navigates to 'Live Channels'", async () => {
    const channelsLink = '[data-testid="navigation-channels-icon"]';
    const channelsHeading = 'h2[data-testid="heading"]';
    await page.waitFor(channelsLink);
    await page.click(channelsLink);
    await page.waitFor(channelsHeading);
    const channelsHeadingText = await page.$eval(
      channelsHeading,
      el => el.textContent
    );
    expect(channelsHeadingText).toBe("Live Channels");
  });

  it("navigates to 'Categories'", async () => {
    const categoriesLink = '[data-testid="navigation-categories-icon"]';
    const categoriesHeading = 'h2[data-testid="heading"]';
    await page.waitFor(categoriesLink);
    await page.click(categoriesLink);
    await page.waitFor(categoriesHeading);
    const categoriesHeadingText = await page.$eval(
      categoriesHeading,
      el => el.textContent
    );
    expect(categoriesHeadingText).toBe("Categories");
  });

  it("navigates to 'Search'", async () => {
    const searchLink = '[data-testid="navigation-search-icon"]';
    const searchHeading = 'h2[data-testid="heading"]';
    await page.waitFor(searchLink);
    await page.click(searchLink);
    await page.waitFor(searchHeading);
    const searchHeadingText = await page.$eval(
      searchHeading,
      el => el.textContent
    );
    expect(searchHeadingText).toBe("Search");
  });

  it("navigates to 'Settings'", async () => {
    const settingsLink = '[data-testid="navigation-settings-icon"]';
    const settingsHeading = 'h2[data-testid="heading"]';
    await page.waitFor(settingsLink);
    await page.click(settingsLink);
    await page.waitFor(settingsHeading);
    const settingsHeadingText = await page.$eval(
      settingsHeading,
      el => el.textContent
    );
    expect(settingsHeadingText).toBe("Settings");
  });

  it("navigates back to 'Home'", async () => {
    const homeLink = '[data-testid="navigation-home-icon"]';
    const homeHeading = 'h2[data-testid="heading"]';
    await page.waitFor(homeLink);
    await page.click(homeLink);
    await page.waitFor(homeHeading);
    const homeHeadingText = await page.$eval(homeHeading, el => el.textContent);
    expect(homeHeadingText).toBe("Featured Channels");
  });
});
