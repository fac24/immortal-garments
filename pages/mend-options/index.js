import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
import MendByMyself from "../../public/images/mendbymyself.svg";
import Tailors from "../../public/images/tailors.svg";
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

        <h2 className="py-3 text-xl text-center">Mend...</h2>
        <div className="lg:flex justify-center no-wrap sm:flex flex-wrap flex-col text-center">
          <ChoiceButton
            href="/mend-options/diy"
            src={MendByMyself}
            alt=""
          ></ChoiceButton>
          <Link href="/mend-options/diy">by myself</Link>
          <ChoiceButton
            href="/mend-options/tailors"
            src={Tailors}
            alt=""
          ></ChoiceButton>
          <Link href="/mend-options/tailors">by a professional</Link>
        </div>
      </section>
    </>
  );
}
