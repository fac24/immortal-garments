import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
import mendByMyself from "../public/images/mendbymyself.png";
import repair from "../public/images/repair.png";
import Breadcrumb from "../components/Breadcrumb";

export default function TryToMend() {
  return (
    <main>
      <section>
        <Breadcrumb page={"Mend options"} currentStep={2} />
        <h2>Mend...</h2>
        <ChoiceButton href="/diy" src={mendByMyself} alt=""></ChoiceButton>
        <Link href="/diy">by myself</Link>
        <ChoiceButton href="/tailors" src={repair} alt=""></ChoiceButton>
        <Link href="/tailors">by a professional</Link>
      </section>
    </main>
  );
}
