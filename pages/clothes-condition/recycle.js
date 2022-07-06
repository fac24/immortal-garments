import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import Search from "../../components/SearchRecycle";
import UpdateCount from "../../components/UpdateCount";

//this was needed to get the full map to load, rather than just a couple of squares
//I don't fully understand how it's working, but setting server-side rendering to false means that the map is dynamically loaded on the client side
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Recycle({ userPosition, setUserPosition }) {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState([]);
  const [unit, setUnit] = useState("miles");
  const [km, setKm] = useState(false);
  const [listCount, setListCount] = useState(7);
  const [userLocation, setUserLocation] = useState(null);
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

  const handleToggle = () => {
    if (unit === "km") {
      setUnit("miles");
      setKm(false);
    } else {
      setUnit("km");
      setKm(true);
    }
  };



  async function handleSearchFromLocation(pos) {
    console.log(pos);
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);


    let lat = crd.latitude;

    let lon = crd.longitude;

    // let lon = 0.629834723775309
    // let lat = 51.7923246977375

    const postcode = await fetch(`https://api.postcodes.io/postcodes?lon=${lon}&lat=${lat}`);
    const postJson = await postcode.json();
    let userPostcode = postJson.result[0].postcode;
    await setUserInput(userPostcode);
    await handleSearch();

    if (!postcode.ok) {
      setData(null);
      setError(
        `Oops, looks like we can't locate you. Enter a postcode in the search bar.`
      );
      return;
    }
  }

  function geoError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function locator() {
    console.log('here');
    navigator.geolocation.getCurrentPosition(handleSearchFromLocation, geoError);
  }



  const getKm = (miles) => Number(miles * 1.6).toFixed(2);

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // fetchData(postcode);
        }}>
        <button onClick={() => { locator() }}>Find Me</button>
      </form>
      {
        data ? (
          <button
            className="font-medium hover:underline decoration-coral underline-offset-4"
            onClick={handleToggle}
          >
            Switch to {km ? "miles" : "km"}
          </button>
        ) : null
      }
      <ul>
        {data
          ? data.map((item, index) => {
            if (index < listCount)
              return (
                <li key={item.id}>
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
      {error ? error : ""}
      <UpdateCount
        data={data}
        listCount={listCount}
        setListCount={setListCount}
      />
      {
        data ? (
          <LondonMap
            data={data}
            listCount={listCount}
            userPosition={userPosition}
          ></LondonMap>
        ) : (
          ""
        )
      }
    </>
  );
}
