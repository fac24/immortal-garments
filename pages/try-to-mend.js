import Choicebutton from "../components/Choicebutton";
import Link from "next/link";
import mendByMyself from "../public/images/mendbymyself.png";
import repair from "../public/images/repair.png";

export default function TryToMend() {
  return (
    <main>
      <section>
        {/* breadcrumb thing */}
        <h2>Mend...</h2>
        <Choicebutton href="/diy" src={mendByMyself} alt=""></Choicebutton>
        <Link href="/diy">by myself</Link>
        <Choicebutton href="/tailors" src={repair} alt=""></Choicebutton>
        <Link href="/tailors">by a professional</Link>
      </section>
    </main>
  );
}
