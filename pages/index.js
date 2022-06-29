import styles from "../styles/Home.module.css";
// import ChoiceButton from "../components/ChoiceButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section>
          <h2 className="text-3xl font-bold underline">About</h2>
          <p>
            Immortal Garments believes that your clothes can live forever. Are
            you looking to mend, recycle or donate your clothes?
          </p>
          <p>
            Are you unsure which makes sense for you? We aim to make this
            process easier for you, with a set of resources, tools, and the
            ability to search for places where you can take your clothes.
          </p>
          <p>
            Search via the navigation bar or use our decision-making tool below.{" "}
          </p>
        </section>
        <section>
          {/* breadcrumb thing */}
          {/* <ChoiceButton href="/get-rid-of" src={vercel} alt=""></ChoiceButton> */}
          <Link href="/get-rid-of">Donate And Recycle</Link>
          {/* <ChoiceButton href="/try-to-mend" src={vercel}></ChoiceButton> */}
          <Link href="/try-to-mend">Care And Repair</Link>
        </section>
      </main>
    </div>
  );
}
