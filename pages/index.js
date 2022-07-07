import styles from "../styles/Home.module.css";
import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
import React, { useState } from "react";
import DonateRecycle from "../public/images/donaterecycle.png";
import CareRepair from "../public/images/carerepair.png";
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
      <p className="text-center text-xl my-5 font-semibold ">
        {" "}
        An estimated £140m worth of clothing is sent to UK landfill each year.
      </p>
      <p className="text-center text-lg my-5 font-medium ">
        What are you planning to do with your unwanted garments? <br />
        Here are our suggestions.{" "}
      </p>
      <div className="flex flex-col flex-wrap lg:flex-row lg:justify-center gap-20 mb-5 min-h-[12rem]">
        <section className="flex flex-col items-center flex-wrap">
          <ChoiceButton
            href="/clothes-condition"
            src={DonateRecycle}
            alt="Cartoon of a pink t-shirt with a while heart in good contion half inside a yellow box"
          ></ChoiceButton>
          <Link href="/clothes-condition">Donate And Recycle</Link>
        </section>

        <section className="flex flex-col items-center flex-wrap">
          <ChoiceButton
            href="/mend-options"
            src={CareRepair}
            alt="cartoon of a pair of jeans with a belt and a t-shirt with a smiley face, slighty worn condition"
          ></ChoiceButton>
          <Link href="/mend-options">Care And Repair</Link>
        </section>
      </div>
    </>
  );
}
