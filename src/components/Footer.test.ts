import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Footer from "./Footer.astro";

describe("Footer", () => {
  it("renders the contact title and source code link for the default language", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer, {
      request: new Request("https://example.com/"),
    });

    expect(result).toContain("Contact / Social Media");
    expect(result).toContain("source code");
    expect(result).toContain("bogdi.mail@gmail.com");
  });
});
