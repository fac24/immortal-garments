import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import Search from "../../components/Search";

const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Recycle() {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(7);
  const [userPosition, setUserPosition] = useState(null);
  const onChange = (event) => setUserInput(event.target.value);

  async function handleSearch() {
    const result = await fetch(
      `http://localhost:3000/api/recylePoint?abc=${userInput.toUpperCase()}
      `
    );
    if (!result.ok) {
      setData(null);
      setError(
        `Oops, looks like we don't have any information for this postcode, yet. Try the postcode n195sh.`
      );
      return;
    }

    setError(null);
    const newdata = await result.json();
    setData(newdata.items);

    const postcodeResult = await fetch(
      `https://api.postcodes.io/postcodes/${userInput}`
    );
    if (!result.ok) {
      setUserPosition(null);
      setError(`Oops, something went wrong: ${postcodeResult.status}.`);
      return;
    }
    const postObject = await postcodeResult.json();
    setUserPosition(postObject);
    //this seems to be working now but failed a couple times, which makes me wonder if there might be a race condition going on
  }

  return (
    <>
      <Breadcrumb></Breadcrumb>
      <h2 className="text-xl py-3">Recycle</h2>
      <p>Find your nearest textile recycling point.</p>
      <Search
        onChange={onChange}
        value={userInput}
        handleSearch={handleSearch}
        labelText={"Enter your postcode..."}
      />
      form
      <p>Find your nearest textile recycle point.</p>
      <ul>
        {data
          ? data.map((item, index) => {
              if (index < listCount)
                //['Salvation Army', 'Bernardos' ]
                //if CharityObject does includes item.name then:
                return (
                  <li key={item.id}>
                    {item.name} <br />
                    {item.address} <br />
                    {item.distance} <br />
                  </li>
                );
            })
          : ""}
      </ul>
      {error ? error : ""}
      {/* {data ?  */}
      <LondonMap
        data={data}
        listCount={listCount}
        userPosition={userPosition}
      ></LondonMap>
      {/* : ""} */}
      <form action="/api/recylePoint" method="GET">
        <label name="abc"></label>
        <input type="text" id="abc" name="abc" />

        <button>submit</button>
      </form>
    </>
  );
}
