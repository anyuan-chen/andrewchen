import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head></Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
