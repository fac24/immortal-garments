import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
import mendByMyself from "../../public/images/mendbymyself.png";
import repair from "../../public/images/repair.png";
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

        <h2 className="py-3 text-xl">Mend...</h2>
        <ChoiceButton
          href="/mend-options/diy"
          src={mendByMyself}
          alt="Annimation of pink thread with a needle"
        ></ChoiceButton>
        <Link href="/mend-options/diy">by myself</Link>
        <ChoiceButton
          href="/mend-options/tailors"
          src={repair}
          alt="Annimation of blue jeans and a yellow t-shirt"
        ></ChoiceButton>
        <Link href="/mend-options/tailors">by a professional</Link>
      </section>
    </>
  );
}
