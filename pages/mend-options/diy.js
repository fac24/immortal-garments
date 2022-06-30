import { resources } from "../../data/diy-resources";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export default function Diy() {
  return (
    <>
      <Breadcrumb />
      <h2>DIY</h2>
      <p>
        We probably want to add some text here. Do you have some cothes to mend
        or upcycle? And some info why, the benifits...
      </p>
      {resources.map((item) => {
        return (
          <Link key={item.title} href={item.url}>
            <p className="diy-link">{item.title}</p>
          </Link>
        );
      })}
    </>
  );
}
