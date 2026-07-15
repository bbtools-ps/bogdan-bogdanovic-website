import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Project from "./Project.astro";

const image = {
  src: "/src/assets/test.png",
  width: 400,
  height: 400,
  format: "png",
};

describe("Project", () => {
  it("renders the project title, description, links, and tags", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Project, {
      request: new Request("https://example.com/"),
      props: {
        title: "Example Project",
        description: "A cool project",
        image,
        tags: ["Astro", "Testing"],
        infoLink: "https://example.com/info",
        liveLink: "https://example.com/live",
        sourceLink: "https://example.com/source",
        designLink: "https://example.com/design",
      },
    });

    expect(result).toContain("Example Project");
    expect(result).toContain("A cool project");
    expect(result).toContain("https://example.com/info");
    expect(result).toContain("https://example.com/live");
    expect(result).toContain("https://example.com/source");
    expect(result).toContain("https://example.com/design");
    expect(result).toContain("Astro");
    expect(result).toContain("Testing");
  });
});
