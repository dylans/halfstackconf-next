import "./_app.css";

import type { AppProps } from "next/app";

import { Now4Real } from "~/components/Now4Real";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Now4Real />
    </>
  );
}

export default MyApp;
