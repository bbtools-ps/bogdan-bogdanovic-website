import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import WorkExperienceSingle from "./WorkExperience.astro";

describe("WorkExperienceSingle", () => {
  it("renders job details, company link, date range, and bullet points", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(WorkExperienceSingle, {
      request: new Request("https://example.com/"),
      props: {
        jobTitle: "Frontend Engineer",
        companyName: "Acme",
        companyLink: "https://acme.example",
        description: ["Built UI features", "Maintained tests"],
        startDate: new Date("2023-01-01"),
        endDate: new Date("2024-01-01"),
      },
    });

    expect(result).toContain("Frontend Engineer");
    expect(result).toContain("Acme");
    expect(result).toContain("https://acme.example");
    expect(result).toContain("Built UI features");
    expect(result).toContain("Maintained tests");
    expect(result).toContain("Jan 2023");
    expect(result).toContain("Jan 2024");
  });
});
