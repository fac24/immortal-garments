import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
import MendByMyself from "../../public/images/mendbymyself.png";
import Tailors from "../../public/images/tailors.png";
import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";

export default function MendOptions() {
  return (
    <>
      <section>
        <Breadcrumb />
        <section>
          <div>
            <ProgressBar completed={50} aria-valuenow={50} />
          </div>
        </section>

        <h2 className="py-3 text-xl text-center">
          How do you want to mend the clothes?
        </h2>
        <div className="flex flex-col flex-wrap lg:flex-row lg:justify-center gap-20 mb-5 min-h-[12rem]">
          <section className="flex flex-col items-center flex-wrap">
            <ChoiceButton
              href="/mend-options/diy"
              src={MendByMyself}
              alt="Gold needle and thread"
            ></ChoiceButton>
            <Link href="/mend-options/diy">By myself 💡</Link>
          </section>

          <section className="flex flex-col items-center flex-wrap">
            <ChoiceButton
              href="/mend-options/tailors"
              src={Tailors}
              alt="Seamstress sewing green fabric"
            ></ChoiceButton>
            <Link href="/mend-options/tailors">By a professional 🪡</Link>
          </section>
        </div>
      </section>
    </>
  );
}
