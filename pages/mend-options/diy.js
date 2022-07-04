import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from "react";
import { resources } from "../../data/diy-resources";
import Link from "next/link";
import Search from "../../components/SearchDIY";

export default function Diy() {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <Breadcrumb />
      <h2 className="text-xl py-3">DIY</h2>
      <p>
        We probably want to add some text here. Do you have some cothes to mend
        or upcycle? And some info why, the benifits...
      </p>
      <Search
        value={userInput}
        setUserInput={setUserInput}
        labelText={"Enter a keyword"}
      />
      <div className="flex flex-wrap">
        {resources
          .filter((item) =>
            item.title.toLowerCase().includes(userInput.toLowerCase())
          )
          .map((item) => {
            return (
              <Link key={item.title} href={item.url}>
                <div className="block p-6 max-w-sm rounded-lg border shadow-md cursor-pointer m-4">
                  <p className="diy-link">{item.title}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
