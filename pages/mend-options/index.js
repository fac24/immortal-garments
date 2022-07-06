import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
import mendbymyself from "../../public/images/mendbymyself.svg";
import tailors from "../../public/images/tailors.svg";
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
          src={mendbymyself}
          alt=""
        ></ChoiceButton>
        <Link href="/mend-options/diy">by myself</Link>
        <ChoiceButton
          href="/mend-options/tailors"
          src={tailors}
          alt=""
        ></ChoiceButton>
        <Link href="/mend-options/tailors">by a professional</Link>
      </section>
    </>
  );
}
