import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import SkipLink from "./SkipLink.astro";

describe("SkipLink", () => {
  it("renders the supplied label and href", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkipLink, {
      props: {
        label: "Skip to content",
        href: "#main-content",
      },
    });

    expect(result).toContain("Skip to content");
    expect(result).toContain('href="#main-content"');
  });
});
