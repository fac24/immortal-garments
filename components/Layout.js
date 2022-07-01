import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Immortal Garments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Immortal Garments</h1>
        <Navbar />
      </header>
      <main className="mx-8">{children}</main>
    </>
  );
}
