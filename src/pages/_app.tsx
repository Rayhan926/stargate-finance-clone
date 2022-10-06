import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MobileNavogationBar from "@components/MobileNavogationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <MobileNavogationBar />
    </>
  );
}

export default MyApp;
