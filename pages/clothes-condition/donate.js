import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from "react";
import Search from "../../components/Search";

export default function Donate() {
  const [userInput, setUserInput] = useState("");
  const onChange = (event) => setUserInput(event.target.value);

  async function handleSearch() {
    const result = await fetch(`api/${userInput.replace(/ /g, "")}`);
    if (!result.ok) {
      setData(null);
      setError(
        `Oops, looks like we don't have any information for this postcode, yet.`
      );
      return;
    }

    setError(null);
    const newdata = await result.json();
    setData(newdata.items);
  }
  return (
    <>
      <Breadcrumb />
      <h2 className="text-xl py-3">Donate</h2>

      <p>Find your nearest clothing donation bank.</p>
      <Search
        onChange={onChange}
        value={userInput}
        handleSearch={handleSearch}
        labelText={"Enter your postcode..."}
      />
    </>
  );
}
