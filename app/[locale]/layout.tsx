import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { i18nConfig } from "@/i18nConfig";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Bogdan Bogdanovic",
  description:
    "Skilled web developer using: HTML, CSS, Javascript, React.js, Vue.js and Node.js. Strong arts and design professional.",
  openGraph: {
    title: "Bogdan Bogdanovic",
    description:
      "Skilled web developer using: HTML, CSS, Javascript, React.js, Vue.js and Node.js. Strong arts and design professional.",
    siteName: "Bogdan Bogdanovic",
    url: "https://bogdan-bogdanovic.com/",
  },
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${inter.variable} ${lora.variable} min-h-full`}
    >
      <head />
      <body className="bg-slate-100 dark:bg-slate-800">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
