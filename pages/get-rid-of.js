import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";
// import Image from "next/image";
import ingoodcondition from "../public/images/ingoodcondition.png";
import inbadcondition from "../public/images/inbadcondition.png";

export default function GetRidOf() {
  return (
    <>
      <main>
        <section>
          {/* breadcrumb thing */}
          <h2>My item of clothing is...</h2>
          <ChoiceButton
            href="/donate"
            src={ingoodcondition}
            alt="image of a T-shirt and clothes with sparkles"
          ></ChoiceButton>
          <Link href="/donate">in good condition</Link>
          <ChoiceButton
            href="/recycle"
            src={inbadcondition}
            alt=""
          ></ChoiceButton>
          <Link href="/recycle">damaged or worn out</Link>
        </section>
      </main>
    </>
  );
}
