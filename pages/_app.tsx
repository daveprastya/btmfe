import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;
