jest.setTimeout(10000);

describe("navigation", () => {
  let page;

  beforeAll(async () => {
    page = await browser.newPage();

    await page.goto("http://localhost:3001");
    await page.waitFor(1000);
  });

  afterAll(async () => {
    await page.close();
  });

  it("displays the right title", async () => {
    let title = await page.title();
    expect(title).toContain("TwitchPlayer");
  });
});
