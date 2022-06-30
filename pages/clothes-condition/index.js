import Breadcrumb from "../../components/Breadcrumb";
import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
// import Image from "next/image";
import ingoodcondition from "../../public/images/ingoodcondition.png";
import inbadcondition from "../../public/images/inbadcondition.png";

export default function ClothesCondition() {
  return (
    <>
      <main>
        <section>
          <Breadcrumb page={"Clothes condition"} currentStep={2} />
          <h2>My item of clothing is...</h2>
          <ChoiceButton
            href="/clothes-condition/donate"
            src={ingoodcondition}
            alt="image of a T-shirt and clothes with sparkles"
          ></ChoiceButton>
          <Link href="/clothes-condition/donate">in good condition</Link>
          <ChoiceButton
            href="/clothes-condition/recycle"
            src={inbadcondition}
            alt=""
          ></ChoiceButton>
          <Link href="/clothes-condition/recycle">damaged or worn out</Link>
        </section>
      </main>
    </>
  );
}