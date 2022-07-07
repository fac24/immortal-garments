import Breadcrumb from "../../components/Breadcrumb";
import ChoiceButton from "../../components/ChoiceButton";
import Link from "next/link";
// import Image from "next/image";
import GoodCondition from "../../public/images/goodcondition.png";
import DamagedWornout from "../../public/images/damagedwornout.png";
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

        <h2 className="text-xl py-3 text-center">
          Are your clothing items in good condition?
        </h2>
        <div className="lg:flex justify-center sm:flex flex-wrap flex-col text-center">
          <ChoiceButton
            href="/clothes-condition/donate"
            src={GoodCondition}
            alt="image of a T-shirt and clothes with sparkles"
          ></ChoiceButton>
          <Link href="/clothes-condition/donate">
            Yes, they&apos;re still wearable ✨
          </Link>

          <ChoiceButton
            href="/clothes-condition/recycle"
            src={DamagedWornout}
            alt="a tatted a blue jumper with sewn on patches"
          ></ChoiceButton>
          <Link href="/clothes-condition/recycle">
            Nope, they&apos;re quite damaged 💔
          </Link>
        </div>
      </section>
    </>
  );
}
