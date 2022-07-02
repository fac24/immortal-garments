import styles from "../styles/Home.module.css";
// import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section>
          <h2 className="text-3xl font-bold underline">About</h2>
          <p>
            Immortal Garments believes that your clothes can live forever. Are
            you looking to mend, recycle or donate your clothes?
          </p>
          <p>
            Are you unsure which makes sense for you? We aim to make this
            process easier for you, with a set of resources, tools, and the
            ability to search for places where you can take your clothes.
          </p>
          <p>
            Search via the navigation bar or use our decision-making tool below.{" "}
          </p>
        </section>
        <section>
          {/* <Choicebutton href="/get-rid-of" src={vercel} alt=""></Choicebutton> */}
          <Link href="/clothes-condition">
            <a>Donate And Recycle</a>
          </Link>
          {/* <Choicebutton href="/try-to-mend" src={vercel}></Choicebutton> */}
          <Link href="/mend-options">
            <a>Care And Repair</a>
          </Link>
        </section>
      </main>
    </div>
  );
}
