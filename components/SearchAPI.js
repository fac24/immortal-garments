import React, { useState, useEffect } from "react";
import SearchByUserLocation from "./SearchByUserLocation";
import Loader from "./Loader";

export default function SearchAPI({
  searchCategory,
  setData,
  setError,
  setUserPosition,
}) {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  async function fetchData(x) {
    setLoading(true);
    const result = await fetch(`../api/${searchCategory}?input=${x}`);
    const data = await result.json();
    setLoading(false);
    // Error handling incase of a failed fetch
    if (data.error) {
      setData(null);
      setError(data.error.description);
    } else {
      setError(null);
      setData(data);
      setUserPosition([
        data.region.center.latitude,
        data.region.center.longitude,
      ]);
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(userInput);
        }}
        className="max-w-xs flex flex-col my-4 gap-y-3"
      >
        <label name="search" className="text-gray-800" htmlFor="input">
          Search a postcode
        </label>
        <input
          type="text"
          name="input"
          id="input"
          onChange={(e) => setUserInput(e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-full"
        />
        <button
          disabled={loading}
          type="submit"
          className="disabled:opacity-25 bg-darkGreen hover:bg-[#51ae68] text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex-auto"
        >
          Search
        </button>
      </form>
      <SearchByUserLocation
        setUserInput={setUserInput}
        setData={setData}
        setError={setError}
        fetchData={fetchData}
      />
      {loading ? <Loader /> : ""}
    </>
  );
}
