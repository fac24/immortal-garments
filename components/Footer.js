import Image from "next/image";
import valpakLogo from "../public/images/valpak_logo.jpg";
import yelpLogo from "../public/images/yelp_logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-xs bg-pistachioGreen pt-6 pb-8 px-4">
      <div className=" grid grid-cols-3 gap-6 px-4">
        <div className="">
          <h2 className="text-[16px] py-1 font-semibold">About Us</h2>
          <p>
            Immortal Garments believes that your clothes can live forever. Are
            you looking to mend, recycle or donate your clothes? Are you unsure
            which makes sense for you? We aim to make this process easier for
            you, with a set of resources, tools, and the ability to search for
            places where you can take your clothes.
          </p>
        </div>

        <div className="">
          <h2 className="text-[16px] py-1 font-semibold">Useful Resources</h2>
          <p>(Open in new tab)</p>

          <ul>
            <li className="no-underline hover:underline">
              <Link href="https://www.loveyourclothes.org.uk/blogs/donating-clothes-simple-act-makes-big-difference">
                <a target="_blank" rel="noopener noreferrer">
                  Donating clothes - The simple act that makes a big difference
                </a>
              </Link>
            </li>
            <li className="no-underline hover:underline">
              <Link href="https://www.loveyourclothes.org.uk/blogs/bringing-clothing-circular-economy">
                <a target="_blank" rel="noopener noreferrer">
                  Bringing Clothing into Circular Economy
                </a>
              </Link>
            </li>
            <li className="no-underline hover:underline">
              <Link href="https://clothesaid.co.uk/about-us/facts-on-clothes-recycling/">
                <a>Facts on Clothes Recycling</a>
              </Link>
            </li>
            <li className="no-underline hover:underline">
              <Link href="https://www.loveyourclothes.org.uk/blogs/why-its-great-give-second-hand-shopping-go">
                <a target="_blank" rel="noopener noreferrer">
                  Why it `s great to give second hand shopping a go
                </a>
              </Link>
            </li>
            <li className="no-underline hover:underline">
              <Link href="https://www.loveyourclothes.org.uk/blogs/can-clothes-really-spark-joy">
                <a target="_blank" rel="noopener noreferrer">
                  Can clothes really `spark joy`?
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="text-[16px] py-1 font-semibold">Data Sources</p>
          <Image
            src={valpakLogo}
            alt={"Valpak logo and text that says a Reconomy Group company"}
            width={100}
            height={36}
            className=""
          ></Image>
          <Image
            src={yelpLogo}
            alt={"Yelp logo"}
            width={100}
            height={36}
            className=""
          ></Image>
        </div>
      </div>
    </footer>
  );
}
