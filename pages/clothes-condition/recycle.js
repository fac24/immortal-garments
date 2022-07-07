import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import SearchRecycleAPI from "../../components/SearchRecycle";
import ProgressBar from "../../components/ProgressBar";
import UpdateCount from "../../components/UpdateCount";
import SearchByUserLocation from "../../components/SearchByUserLocation";

//this was needed to get the full map to load, rather than just a couple of squares
//I don't fully understand how it's working, but setting server-side rendering to false means that the map is dynamically loaded on the client side
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Recycle({ userPosition, setUserPosition }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState([]);
  const [unit, setUnit] = useState("miles");
  const [km, setKm] = useState(false);
  const [listCount, setListCount] = useState(7);

  const [progress, setProgress] = useState(65);

  useEffect(() => {
    if (data) {
      setProgress(100);
    } else {
      setProgress(65);
    }
  }, [data]);

  const handleToggle = () => {
    if (unit === "km") {
      setUnit("miles");
      setKm(false);
    } else {
      setUnit("km");
      setKm(true);
    }
  };

  const getKm = (miles) => Number(miles * 1.6).toFixed(2);

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
      <SearchRecycleAPI
        setData={setData}
        setError={setError}
        setUserPosition={setUserPosition}
        labelText={"Enter your postcode..."}
      />
      <div>
        {data ? (
          <button
            className="text-base bg-eggshellWhite hover:bg-lightGray text-gray-800 px-4 border border-gray-400 rounded shadow my-2"
            onClick={handleToggle}
          >
            Switch distance to {km ? "miles" : "km"}
          </button>
        ) : null}
        <div className="flex flex-row gap-14 wrap-items">
          <ul className="text-base py-2 mt-2 border-t">
            {data
              ? data.map((item, index) => {
                  if (index < listCount)
                    return (
                      <li key={item.id} className="border-b pt-2">
                        <p> {item.name} </p>
                        <p> {item.address}</p>
                        <p>
                          {km ? getKm(item.distance) : item.distance}{" "}
                          <span>{unit}</span>
                        </p>
                        <br />
                      </li>
                    );
                })
              : ""}
          </ul>
          <div className="w-2/3">
            {data ? (
              <LondonMap
                data={data}
                listCount={listCount}
                userPosition={userPosition}
              ></LondonMap>
            ) : (
              ""
            )}
          </div>
        </div>
        <UpdateCount
          data={data}
          listCount={listCount}
          setListCount={setListCount}
        />
      </div>
      {error ? error : ""}
    </>
  );
}
