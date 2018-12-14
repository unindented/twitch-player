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
  });

  afterAll(async () => {
    await page.close();
  });

  it("displays the right title", async () => {
    let title = await page.title();
    expect(title).toContain("TwitchPlayer");
  });

  it("displays 'Home'", async () => {
    const homeHeading = 'h2[data-testid="heading"]';
    await page.waitFor(homeHeading);
    const homeHeadingText = await page.$eval(homeHeading, el => el.textContent);
    expect(homeHeadingText).toBe("Home");
  });

  it("navigates to 'Live Channels'", async () => {
    const liveLink = '[data-testid="navigation-live-link"]';
    const liveHeading = 'h2[data-testid="heading"]';
    await page.waitFor(liveLink);
    await page.click(liveLink);
    await page.waitFor(liveHeading);
    const liveHeadingText = await page.$eval(liveHeading, el => el.textContent);
    expect(liveHeadingText).toBe("Live Channels");
  });

  it("navigates to 'Categories'", async () => {
    const categoriesLink = '[data-testid="navigation-categories-link"]';
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
    const searchLink = '[data-testid="navigation-search-link"]';
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
    const settingsLink = '[data-testid="navigation-settings-link"]';
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
    const homeLink = '[data-testid="navigation-home-link"]';
    const homeHeading = 'h2[data-testid="heading"]';
    await page.waitFor(homeLink);
    await page.click(homeLink);
    await page.waitFor(homeHeading);
    const homeHeadingText = await page.$eval(homeHeading, el => el.textContent);
    expect(homeHeadingText).toBe("Home");
  });
});
