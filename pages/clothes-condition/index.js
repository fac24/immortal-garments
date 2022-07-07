import Breadcrumb from "../../components/Breadcrumb";
import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
// import Image from "next/image";
import GoodCondition from "../../public/images/goodcondition.svg";
import DamagedWornout from "../../public/images/damagedwornout.svg";
import ProgressBar from "../../components/ProgressBar";

export default function ClothesCondition() {
  return (
    <>
      <section>
        <Breadcrumb />
        <section>
          <div>
            <ProgressBar completed={50} aria-valuenow={50} />
          </div>
        </section>

        <h2 className="text-xl py-3 text-center">My item of clothing is...</h2>
        <div className="lg:flex justify-center sm:flex flex-wrap flex-col text-center">
          <ChoiceButton
            href="/clothes-condition/donate"
            src={GoodCondition}
            alt="image of a T-shirt and clothes with sparkles"
          ></ChoiceButton>
          <Link href="/clothes-condition/donate">in good condition ✨</Link>

          <ChoiceButton
            href="/clothes-condition/recycle"
            src={DamagedWornout}
            alt=""
          ></ChoiceButton>
          <Link href="/clothes-condition/recycle">damaged or worn out</Link>
        </div>
      </section>
    </>
  );
}
