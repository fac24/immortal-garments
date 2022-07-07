import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import SearchRecycleAPI from "../../components/SearchRecycle";
import ProgressBar from "../../components/ProgressBar";
import UpdateCount from "../../components/UpdateCount";
import SearchByUserLocation from "../../components/SearchByUserLocation";
import Link from "next/link";

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

      <h2 className="text-2xl py-3 text-center">Recycle</h2>
      <div className="green-border p-6">
        <h3 className="text-xl my-1 font-semibold ">
          Why should I recycle my clothes?
        </h3>
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
        >
          <li>
            Textiles are almost always recyclable, yet they make up a
            significant portion of landfill waste, where they will take a long
            time to break down, especially in the case of synthetic textiles.
          </li>
          <li>
            It takes a lot of energy to produce clothing. By recycling clothes
            when they are no longer wanted, you ensure that all that energy does
            not simply go to waste.
          </li>
          <li className="mb-2">
            The more you&apos;re able to reuse or recycle old clothing, the less
            room it takes up in landfill. Many of the items that end up in
            landfills could have been recycled.
          </li>
        </ul>

        <h3 className="text-xl my-2 font-semibold">
          What happens to my clothes after I recycle them?
        </h3>
        <p className="mb-2">
          <Link href="https://londonrecycles.co.uk/">
            <a>London Recycles </a>
          </Link>
          summarises:
        </p>
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
        >
          <li>natural textiles are sorted by colour</li>
          <li>material textiles are broken down, cleaned and respun</li>
          <li>
            where appropriate some textiles are used to make filling material
            for padding and insulation
          </li>
          <li>
            synthetic textiles are broken down then melted the melted textiles
            can then be used to create fibres which can then be used to make new
            fabrics.
          </li>
          <li className="pb-2">In this way, your clothes can live on.</li>
        </ul>
        <p>
          However, it still requires a lot of energy to break down and remake
          clothing items. If you think your clothes are still useable, but you
          don&apos;t want to use them, consider donating them.
        </p>
        <h3 className="text-xl my-2 font-semibold">
          How can I recycle my clothes?
        </h3>
        <p>
          If you decide that recycling clothes is the best option for you, use
          our search feature to find your nearest textile recycling point.
        </p>
      </div>
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
