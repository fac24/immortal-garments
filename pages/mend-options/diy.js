import { resources } from "../../data/diy-resources";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from "react";
import { resources } from "../data/diy-resources";
import Link from "next/link";
import Search from "../components/Search";

export default function Diy() {
  const [userInput, setUserInput] = useState("");

  const onChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Breadcrumb />
      <h2>DIY</h2>
      <p>
        We probably want to add some text here. Do you have some cothes to mend
        or upcycle? And some info why, the benifits...
      </p>
      <Search
        onChange={onChange}
        value={userInput}
        handleSearch={handleSearch}
        labelText={"Enter a keyword"}
      />
      {resources
        .filter((item) =>
          item.title.toLowerCase().includes(userInput.toLowerCase())
        )
        .map((item) => {
          return (
            <Link key={item.title} href={item.url}>
              <p className="diy-link">{item.title}</p>
            </Link>
          );
        })}
    </>
  );
}
