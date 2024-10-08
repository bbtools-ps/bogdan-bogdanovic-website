import initTranslations from "@/lib/i18n";
import ThemeSwitcher from "../ThemeSwitcher";
import TranslationsProvider from "../TranslationsProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import SkipLink from "./SkipLink";

const i18nNamespaces = ["common", "home"];

export default async function Header({ locale }: { locale: string }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <header className="mb-4 flex w-full items-center justify-between gap-4 p-4 sm:justify-end">
        <SkipLink />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </header>
    </TranslationsProvider>
  );
}
