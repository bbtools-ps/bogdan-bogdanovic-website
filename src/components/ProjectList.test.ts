import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, vi } from "vitest";

vi.mock("astro:content", () => ({
  getCollection: vi.fn(async () => [
    {
      id: "en/1",
      data: {
        title: "Project One",
        description: "First project",
        image: { src: "/one.png", width: 100, height: 100, format: "png" },
        tags: ["Astro", "TypeScript"],
      },
    },
    {
      id: "en/2",
      data: {
        title: "Project Two",
        description: "Second project",
        image: { src: "/two.png", width: 100, height: 100, format: "png" },
        tags: ["Astro"],
      },
    },
  ]),
}));

import ProjectList from "./ProjectList.astro";

describe("ProjectList", () => {
  it("renders the available project tag filters", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ProjectList, {
      request: new Request("https://example.com/"),
    });

    expect(result).toContain("data-project-tag-filters");
    expect(result).toContain('data-selection-mode="single"');
    expect(result).toContain("data-project-filter-mode");
    expect(result).toContain("Filter mode");
    expect(result).toContain("Multiple tags");
    expect(result).toContain("Single tag");
    expect(result).toContain('data-tag-filter="Astro"');
    expect(result).toContain('data-tag-filter="TypeScript"');
    expect(result).toContain("All projects");
    expect(result).toContain("No projects match the selected tags.");
  });
});