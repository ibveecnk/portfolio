import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { GetStaticPropsContext } from "next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Iven Beck</title>
        <meta name="description" content="My personal portfolio." />
        <meta name="robots" content="index, follow, archive">
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
