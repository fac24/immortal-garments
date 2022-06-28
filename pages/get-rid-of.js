import Choicebutton from "../components/Choicebutton";
import Link from "next/link";
import Image from 'next/image';
import vercel from '../public/vercel.svg';

export default function GetRidOf() {
    return (<>
        <main>
            <section>
                {/* breadcrumb thing */}
                <h2>My item of clothing is...</h2>
                <Choicebutton href='/donate' src={vercel} alt=''></Choicebutton>
                <Link href='/donate'>in good condition</Link>
                <Choicebutton href='/recycle' src={vercel} alt=''></Choicebutton>
                <Link href='/recycle'>damaged or worn out</Link>
            </section>
        </main>
    </>);
}