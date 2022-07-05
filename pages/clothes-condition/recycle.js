import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import Search from "../../components/SearchRecycle";
import ProgressBar from "../../components/ProgressBar";

//this was needed to get the full map to load, rather than just a couple of squares
//I don't fully understand how it's working, but setting server-side rendering to false means that the map is dynamically loaded on the client side
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Recycle({
  userPosition,
  setUserPosition,
  listCount,
  setListCount,
}) {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(7);
  const [userPosition, setUserPosition] = useState(null);
  const [progress, setProgress] = useState(75);

  useEffect(() => {
    if (data) {
      setProgress(100);
    } else {
      setProgress(75);
    }
  }, [data]);

  const onChange = (event) => setUserInput(event.target.value);

  async function handleSearch() {
    const result = await fetch(
      `../api/recylePoint?abc=${userInput.toUpperCase()}
      `
    );
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
    setUserPosition([newdata.latitude, newdata.longitude]);
  }

  return (
    <>
      <Breadcrumb></Breadcrumb>
      <section>
        <div>
          <ProgressBar completed={progress} aria-valuenow={progress} />
        </div>
      </section>

      <h2 className="text-xl py-3">Recycle</h2>
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
