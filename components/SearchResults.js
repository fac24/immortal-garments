import { useState } from "react";

// The API gives us distance in meters, getMiles converts it to miles and trims it to 2 decimal places
const getMiles = (meters) => Number(meters * 0.000621371192).toFixed(2);

// Simular to function above but for km conversion
const getKm = (meters) => Number(meters / 1000).toFixed(2);

export default function SearchResults({ data, error, listCount, tailors }) {
  const [unit, setUnit] = useState("miles");
  const [km, setKm] = useState(false);

  // Toggle the unit and the distance that will be displayed on the list returned from the API
  const handleToggle = () => {
    if (unit === "km") {
      setUnit("miles");
      setKm(false);
    } else {
      setUnit("km");
      setKm(true);
    }
  };

  return (
    <div className="">
      {error ? <p>{error}</p> : ""}
      {data ? (
        <button
          className="text-base bg-eggshellWhite hover:bg-lightGray text-gray-800 px-4 border border-gray-400 rounded shadow mb-1"
          onClick={handleToggle}
        >
          Switch distance to {km ? "miles" : "km"}
        </button>
      ) : null}
      {data
        ? data.businesses.map((place, index) => {
            if (index < listCount) {
              return (
                <div
                  key={place.id}
                  className="text-base flex pl-2 border-b py-2"
                >
                  <section>
                    <img
                      src={
                        place.image_url.length > 1
                          ? place.image_url
                          : "https://thumbs.dreamstime.com/z/tailor-made-icon-vector-illustration-tailor-made-icon-vector-illustration-white-background-119861864.jpg"
                      }
                      alt={place.name}
                      className="pr-2 pt-2 object-cover h-20 w-20"
                    />
                  </section>

                  <section>
                    <p>
                      {place.name}{" "}
                      {/* only show the price if it is the tailors page and the api has a price for the place */}
                      {tailors && place.price ? (
                        <span>({place.price})</span>
                      ) : null}
                    </p>
                    <p>
                      {place.location.address1}, {place.location.city},{" "}
                      {place.location.zip_code}
                    </p>
                    <p>{place.phone}</p>
                    <p>
                      {/* the km state changes on click of a button, this will toggle the distance and unit depending on that action */}
                      {km ? getKm(place.distance) : getMiles(place.distance)}{" "}
                      <span>{unit}</span>
                    </p>
                  </section>
                </div>
              );
            }
          })
        : ""}
    </div>
  );
}

export { getMiles, getKm };
