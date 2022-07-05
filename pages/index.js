import styles from "../styles/Home.module.css";
import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
import React, { useState } from "react";
import donateclothes from "../public/images/donateclothes.png";
import repair from "../public/images/repair.png";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  return (
    <>
      <section>
        <div>
          <ProgressBar completed={0} aria-valuenow={0} />
        </div>
      </section>
      <h1 className="text-2xl pb-4">Immortal Garments</h1>
      <div className="flex flex-col flex-wrap gap-3">
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
    </>
  );
}
