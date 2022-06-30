import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
import mendByMyself from "../../public/images/mendbymyself.png";
import repair from "../../public/images/repair.png";
import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from "react";

export default function MendOptions() {
  return (
    <main>
      <section>
        <Breadcrumb />
        <h2>Mend...</h2>
        <ChoiceButton
          href="/mend-options/diy"
          src={mendByMyself}
          alt=""
        ></ChoiceButton>
        <Link href="/diy">by myself</Link>
        <ChoiceButton
          href="/mend-options/tailors"
          src={repair}
          alt=""
        ></ChoiceButton>
        <Link href="/tailors">by a professional</Link>
      </section>
    </main>
  );
}
