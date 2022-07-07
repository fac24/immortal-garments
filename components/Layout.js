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
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="mx-4 px-4 min-h-[32rem]">{children}</main>
      <Footer />
    </>
  );
}
