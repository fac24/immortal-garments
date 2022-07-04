import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import Search from "../../components/SearchRecycle";

const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Recycle({ userPosition, setUserPosition, listCount, setListCount }) {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState([]);

  const onChange = (event) => setUserInput(event.target.value);

  async function handleSearch() {
    const result = await fetch(
      `../api/recylePoint?abc=${userInput.toUpperCase()}
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
    console.log(newdata);
    setData(newdata.items);
    setUserPosition([newdata.latitude, newdata.longitude])
  }
  // async function postcodeSearch() {

  //   const postcodeResult = await fetch(`https://api.postcodes.io/postcodes/${userInput}`);
  //   if (!postcodeResult.ok) {
  //     setUserPosition(null);
  //     setError(`Oops, something went wrong: ${postcodeResult.status}.`);
  //     return;
  //   }
  //   setError(null);
  //   const postObject = await postcodeResult.json();
  //   console.log(postObject);
  //   setUserPosition(postObject);
  // }

  return (
    <>
      <Breadcrumb></Breadcrumb>
      <h2 className="text-xl py-3">Recycle</h2>
      <p>Find your nearest textile recycling point.</p>
      <Search
        onChange={onChange}
        value={userInput}
        handleSearch={handleSearch}
        // postcodeSearch={postcodeSearch}
        labelText={"Enter your postcode..."}
      />

      <ul>
        {data
          ? data.map((item, index) => {
            if (index < listCount)
              return (
                <li key={item.id}>
                  {item.name} <br />
                  {item.address} <br />
                  {item.distance} miles
                  <br />
                </li>
              );
          })
          : ""}
      </ul>
      {error ? error : ""}
      {data ? (
        <LondonMap
          data={data}
          listCount={listCount}
          userPosition={userPosition}
        ></LondonMap>
      ) : (
        ""
      )}
    </>
  );
}
