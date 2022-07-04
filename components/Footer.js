import Image from "next/image";
import valpakLogo from "../public/images/valpak_logo.jpg";

export default function Footer() {
  return (
    <>
      <h2>About</h2>
      <p>
        Immortal Garments believes that your clothes can live forever. Are you
        looking to mend, recycle or donate your clothes? Are you unsure which
        makes sense for you? We aim to make this process easier for you, with a
        set of resources, tools, and the ability to search for places where you
        can take your clothes.
      </p>

      <p>Data Source</p>
      <Image
        src={valpakLogo}
        alt={"Valpak logo and text that says a Reconomy Group company"}
        width={250}
        height={100}
        className=""
      ></Image>
    </>
  );
}
