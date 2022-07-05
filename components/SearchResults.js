import { useState } from "react";

export default function SearchResults({ data, error, listCount }) {
  const [unit, setUnit] = useState("miles");
  const [km, setKm] = useState(false);

  // The API gives us distance in meters, getMiles converts it to miles and trims it to 2 decimal places
  const getMiles = (meters) => Number(meters * 0.000621371192).toFixed(2);

  // Simular to function above but for km conversion
  const getKm = (meters) => Number(meters / 1000).toFixed(2);

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
    <div>
      {error ? error : ""}
      {data ? (
        <button
          className="font-medium hover:underline decoration-coral underline-offset-4"
          onClick={handleToggle}
        >
          miles/km
        </button>
      ) : null}
      {data
        ? data.businesses.map((place, index) => {
            if (index < listCount) {
              return (
                <div key={place.id} className="flex m-10">
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
                      {place.price ? <span>({place.price})</span> : null}
                    </p>
                    <p>
                      {place.location.address1}, {place.location.city},{" "}
                      {place.location.zip_code}
                    </p>
                    <p>{place.phone}</p>
                    <p>
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
