import Layout from "@/layout/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Head from "next/head";
import "../styles/main.scss";
config.autoAddCss = false;

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light"
});

const darkTheme = createTheme({
  type: "dark"
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bogdan Bogdanovic - portfolio</title>
        <meta
          name="description"
          content="Skilled web developer using: HTML, CSS, Javascript, React.js, Vue.js and Node.js. Strong arts and design professional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
