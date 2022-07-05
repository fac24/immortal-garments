import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import Search from "../../components/SearchRecycle";

//this was needed to get the full map to load, rather than just a couple of squares
//I don't fully understand how it's working, but setting server-side rendering to false means that the map is dynamically loaded on the client side
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
    setData(newdata.items);
    setUserPosition([newdata.latitude, newdata.longitude])
  }

  return (
    <>
      <Breadcrumb></Breadcrumb>
      <h2 className="text-xl py-3">Recycle</h2>
      <article>
        <p>Textiles are almost always recyclable, yet they make up a significant portion of landfill waste, where it will take a long time to break down, especially with synthetic textiles. </p>

        <p><a href="London Recycles">London Recycles</a> summarises what happens to clothing items in recycling: </p>
        <ul>
          <li>natural textiles are sorted by colour and material</li>
          <li>textiles are broken down, cleaned and respun where appropriate</li>
          <li>some textiles are used to make filling material for padding and insulation</li>
          <li>synthetic textiles are broken down then melted</li>
          <li>the melted textiles can then be used to create fibres which can then be used to make new fabrics</li>
        </ul>
        <p>In this way, your clothes can live on. However, it still requires a lot of energy to break down and remake clothing items. If you think your clothes are still useable, but you don’t want to use them, consider donating them.</p>
      </article>
      <p>Find your nearest textile recycling point.</p>
      <Search
        onChange={onChange}
        value={userInput}
        handleSearch={handleSearch}
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
