import styles from "../styles/Home.module.css";
import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
import React, { useState } from "react";
import donateclothes from "../public/images/donateclothes.png";
import repair from "../public/images/repair.png";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap gap-3">
      <section>
        <h2 className="">About</h2>
        <p className="">
          Immortal Garments believes that your clothes can live forever. Are you
          looking to mend, recycle or donate your clothes? Are you unsure which
          makes sense for you? We aim to make this process easier for you, with
          a set of resources, tools, and the ability to search for places where
          you can take your clothes.
        </p>
        <p>
          Search via the navigation bar or use our decision-making tool below.{" "}
        </p>
      </section>
      <section>
        <ChoiceButton
          href="/clothes-condition"
          src={donateclothes}
          alt=""
        ></ChoiceButton>
        <Link href="/clothes-condition">Donate And Recycle</Link>
      </section>

      <section>
        <ChoiceButton href="/mend-options" src={repair}></ChoiceButton>
        <Link href="/mend-options">Care And Repair</Link>
      </section>
    </div>
  );
}
