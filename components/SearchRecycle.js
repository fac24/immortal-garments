import SearchByUserLocation from "./SearchByUserLocation";
import { useState } from "react";
import Loader from "./Loader";


export default function SearchPostcode({
  setData,
  setError,
  labelText,
  setUserPosition,
}) {
  const onChange = (event) => setUserInput(event.target.value);

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false)



  async function handleSearch(x) {
    setLoading(true)

    const result = await fetch(
      `../api/recylePoint?abc=${x.toLowerCase().replace(/ /g, "")}
      `

    );
    setLoading(false)

    if (!result.ok) {
      console.log(result);
      setData(null);
      setError(`Oops, something went wrong. Please try again.`);
      return;
    }

    setError(null);
    const newdata = await result.json();
    setData(newdata.items);
    setUserPosition([newdata.latitude, newdata.longitude]);
  }

  function toggleLoaderHidden() {
    if (Loader.classList.includes("hide")) {
      Loader.classList.remove("hide")
    } else {
      Loader.classList.add("hide");
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="max-w-xs flex flex-col my-4 gap-y-3"
      >
        <label name="search" htmlFor="search" className="text-gray-800">
          {labelText}
        </label>
        <input
          type="search"
          name="search"
          id="search"
          onChange={onChange}
          value={userInput}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-full"
        ></input>
        <button
          type="submit"
          onClick={() => {
            handleSearch(userInput);
          }}
          className="bg-darkGreen hover:bg-[#51ae68] text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex-auto"
        >
          Search
        </button>
      </form>
      <SearchByUserLocation
        setUserInput={setUserInput}
        setData={setData}
        setError={setError}
        fetchData={handleSearch}
      />

      {loading ? <Loader /> : ''}

    </div>
  );
}
