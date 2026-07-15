import { describe, expect, it } from "vitest";
import { getLangFromUrl, useTranslations, useTranslatedPath } from "./utils";

describe("i18n utils", () => {
  it("detects the language from the URL pathname", () => {
    expect(getLangFromUrl(new URL("https://example.com/sr/"))).toBe("sr");
    expect(getLangFromUrl(new URL("https://example.com/en/portfolio"))).toBe(
      "en",
    );
    expect(getLangFromUrl(new URL("https://example.com/unknown/"))).toBe("en");
  });

  it("returns translated strings for the selected language", () => {
    const t = useTranslations("sr");

    expect(t("footer.title")).toBe("Kontakt / društveni mediji");
    expect(t("common.darkTheme")).toBe("Tamna tema");
  });

  it("falls back to the default language when a key is missing", () => {
    const t = useTranslations("sr");

    expect(t("notFound.title" as keyof typeof t)).toBe(
      "Stranica nije pronađena",
    );
  });

  it("builds localized paths", () => {
    const translatePath = useTranslatedPath("sr");
    const defaultTranslatePath = useTranslatedPath("en");

    expect(translatePath("/about")).toBe("/sr/about");
    expect(translatePath("/about", "en")).toBe("/about");
    expect(defaultTranslatePath("/about")).toBe("/about");
  });
});
