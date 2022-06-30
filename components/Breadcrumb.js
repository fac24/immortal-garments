import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  const items = router.asPath.split("/");

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        {items.map((item, index) => (
          <li>
            {item.replaceAll("-", " ")}/
            {/* <Link
              href={{
                pathname: `${item === items[1]}`
                  ? `/${items[1]}`
                  : `/${items[1]}/${item}`,
              }}
            >
              <a></a>
            </Link>{" "} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
