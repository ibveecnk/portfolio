import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { GetStaticPropsContext } from "next";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Iven Beck</title>
        <meta name="description" content="My personal portfolio." />
        <meta name="robots" content="index, follow, archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="contentWrapper">
        <Component {...pageProps} />
        <canvas
          id="background"
          style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        ></canvas>
      </div>
      <Script
        id="bg-renderer"
        src="/background-renderer.js"
        strategy="lazyOnload"
      />
    </>
  );
}

export default MyApp;
