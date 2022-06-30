import React, { useState } from "react";
import SearchPostcode from "../components/SearchPostcode";
import dynamic from "next/dynamic";
const LondonMap = dynamic(() => import("../components/Map"), { ssr: false });

export default function Recycle() {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(7);

  const onChange = (event) => setUserInput(event.target.value);

  async function handleSearch() {
    const result = await fetch(`api/${userInput.replace(/ /g, "")}`);
    if (!result.ok) {
      setData(null);
      setError(`Oops, something went wrong: ${result.status}.`);
      return;
    }

    setError(null);
    const newdata = await result.json();
    setData(newdata.items);
  }

  return (
    <>
      <SearchPostcode
        onChange={onChange}
        value={userInput}
        handleSearch={handleSearch}
      />

      <p>Find your nearest textile recycle point.</p>

      {data
        ? data.map((item, index) => {
          if (index < listCount)
            //['Salvation Army', 'Bernardos' ]
            //if CharityObject does includes item.name then: 
            return (
              <>
                <ul key={item.id}>
                  <li>
                    {item.name} <br />
                    {item.address} <br />
                    {item.distance} <br />
                  </li>
                </ul>

              </>
            );
        })
        : ""}

      {error ? error : ""}
      {data ? <LondonMap data={data} listCount={listCount}></LondonMap> : ""}
    </>
  );

}
