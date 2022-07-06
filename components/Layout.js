import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Immortal Garments</title>
        <meta
          name="description"
          content="a website that helps people decide what they want to do with the clothes they are currently not wearing. Recycle, Donate, or Upcycle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 lg:px-0">{children}</main>
      <Footer />
    </>
  );
}
