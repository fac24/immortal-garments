import Breadcrumb from "../../components/Breadcrumb";
import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
// import Image from "next/image";
import goodcondition from "../../public/images/goodcondition.svg";
import damagedwornout from "../../public/images/damagedwornout.svg";

export default function ClothesCondition() {
  return (
    <>
      <main>
        <section>
          <Breadcrumb />
          <h2 className="text-xl py-3">My item of clothing is...</h2>
          <ChoiceButton
            href="/clothes-condition/donate"
            src={goodcondition}
            alt="image of a T-shirt and clothes with sparkles"
          ></ChoiceButton>
          <Link href="/clothes-condition/donate">in good condition</Link>
          <ChoiceButton
            href="/clothes-condition/recycle"
            src={damagedwornout}
            alt=""
          ></ChoiceButton>
          <Link href="/clothes-condition/recycle">damaged or worn out</Link>
        </section>
      </main>
    </>
  );
}
