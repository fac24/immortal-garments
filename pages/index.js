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
          <p className="text-base">Your immortal garments journey</p>
          <ProgressBar completed={0} aria-valuenow={0} />
        </div>
      </section>
      {/* <h1 className="text-2xl pb-4">Immortal Garments</h1> */}
      <p className="text-center text-lg my-5 ">
        {" "}
        An estimated £140m worth of clothing is sent to UK landfill each year.
        What do you want to do with your unwanted garments? <br />
        Here are some suggestions{" "}
      </p>
      <div className="flex gap-3 justify-center">
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
