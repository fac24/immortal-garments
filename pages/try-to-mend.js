import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
import mendByMyself from "../public/images/mendbymyself.png";
import repair from "../public/images/repair.png";

export default function TryToMend() {
  return (
    <main>
      <section>
        {/* breadcrumb thing */}
        <h2>Mend...</h2>
        <ChoiceButton href="/diy" src={mendByMyself} alt=""></ChoiceButton>
        <Link href="/diy">by myself</Link>
        <ChoiceButton href="/tailors" src={repair} alt=""></ChoiceButton>
        <Link href="/tailors">by a professional</Link>
      </section>
    </main>
  );
}
