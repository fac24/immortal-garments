import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav>
      <Navlink href="/">Home</Navlink>
      <Navlink href="/clothes-condition/donate">Donate</Navlink>
      <Navlink href="/clothes-condition/recycle">Recycle</Navlink>
      <Navlink href="/mend-options/diy">DIY</Navlink>
      <Navlink href="/mend-options/tailors">Tailors</Navlink>
    </nav>
  );
}
