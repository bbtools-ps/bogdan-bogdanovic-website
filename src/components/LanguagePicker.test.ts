import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import LanguagePicker from "./LanguagePicker.astro";

describe("LanguagePicker", () => {
  it("renders both language links with their labels", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(LanguagePicker, {
      request: new Request("https://example.com/"),
    });

    expect(result).toContain('href="/en/"');
    expect(result).toContain('href="/sr/"');
    expect(result).toContain('aria-label="English"');
    expect(result).toContain('aria-label="Srpski"');
  });

  it("marks the active language as bold for the current path", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(LanguagePicker, {
      request: new Request("https://example.com/sr/"),
    });

    expect(result).toContain('href="/sr/"');
    expect(result).toContain('class="p-2 font-bold"');
    expect(result).toContain('href="/en/"');
  });
});
