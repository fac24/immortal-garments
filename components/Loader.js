import Image from "next/image";
import simpleLogo from "../public/images/simple-logo.png";

export default function Loader() {
  return (
    <div className="ml-16">
      <Image
        src={simpleLogo}
        alt="Loading..."
        width={100}
        height={100}
        className="animate-spin "
      />
    </div>
  );
}
