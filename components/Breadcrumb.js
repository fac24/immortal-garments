import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  console.log(router);
  const items = router.asPath.split("/");

  return (
    <nav className="flex p-0" aria-label="Breadcrumb">
      <ul className="inline-flex items-center space-x-1 shadow-lg">
        <li className="text-base">
          <Link href="/">
            <a>home /</a>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            {item === items[1] ? (
              <Link
                href={{
                  pathname: `/${items[1]}`,
                }}
              >
                <a> {item.replaceAll("-", " ")} / </a>
              </Link>
            ) : (
              <p>{item.replaceAll("-", " ")}</p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
