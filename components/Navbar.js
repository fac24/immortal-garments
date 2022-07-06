import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-5 text-2xl font-semibold my-3">
      <Navlink href="/">Home</Navlink>
      <Navlink href="/clothes-condition/donate">Donate</Navlink>
      <Navlink href="/clothes-condition/recycle">Recycle</Navlink>
      <Navlink href="/mend-options/diy">DIY</Navlink>
      <Navlink href="/mend-options/tailors">Tailors</Navlink>
    </nav>
  );
}
