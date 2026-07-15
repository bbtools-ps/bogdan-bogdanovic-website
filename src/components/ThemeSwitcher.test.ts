import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import ThemeSwitcher from "./ThemeSwitcher.astro";

describe("ThemeSwitcher", () => {
  it("renders the switcher button with the expected accessible attributes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ThemeSwitcher, {
      request: new Request("https://example.com/"),
    });

    expect(result).toContain('type="button"');
    expect(result).toContain('id="theme-toggle"');
    expect(result).toContain('role="switch"');
    expect(result).toContain('aria-checked="false"');
    expect(result).toContain('aria-label="Dark theme"');
  });
});
