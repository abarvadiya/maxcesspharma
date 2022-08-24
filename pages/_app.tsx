import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import "../styles/animate/animate.css";
import "../styles/style.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
