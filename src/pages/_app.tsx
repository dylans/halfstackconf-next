import "./_app.css";

import type { AppProps } from "next/app";

import { useNow4Real } from "~/components/Now4Real";

function MyApp({ Component, pageProps }: AppProps) {
  useNow4Real();

  return <Component {...pageProps} />;
}

export default MyApp;
