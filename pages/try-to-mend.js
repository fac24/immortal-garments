import Choicebutton from "../components/Choicebutton";
import Link from "next/link";
import vercel from '../public/vercel.svg';

export default function TryToMend() {
    return (<main>
        <section>
            {/* breadcrumb thing */}
            <h2>Mend...</h2>
            <Choicebutton href='/diy' src={vercel} alt=''></Choicebutton>
            <Link href='/diy'>by myself</Link>
            <Choicebutton href='/tailors' src={vercel} alt=''></Choicebutton>
            <Link href='/tailors'>by a professional</Link>
        </section>
    </main>);
}