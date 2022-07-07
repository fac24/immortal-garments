export default function SearchByUserLocation({
  setData,
  setError,
  setUserInput,
  fetchData,
}) {
  async function handleSearchFromLocation(pos) {
    //extracts longitude and latitude from geolocation info from locator function
    const crd = pos.coords;
    let lat = crd.latitude;
    let lon = crd.longitude;

    //uses postcodes API to convert user's coordinates to a postcode
    const postcode = await fetch(
      `https://api.postcodes.io/postcodes?lon=${lon}&lat=${lat}`
    );
    const postJson = await postcode.json();

    //accuracy of the geolocator isn't perfect; this just takes the first postcode that the API finds for the coordinates
    let userPostcode = postJson.result[0].postcode;

    //this use state can be used in SearchAPI.js (for donate and tailors) and recycle.js (for recycling)
    await fetchData(userPostcode);

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
    return <p>We could not locate your device. Check privacy settings.</p>;
  }

  //get's location of user's device and takes success and error callback functions as parameters

  function locator() {
    navigator.geolocation.getCurrentPosition(
      handleSearchFromLocation,
      geoError
    );
  }

  return (
    <>
      <button
        className="text-base bg-eggshellWhite hover:bg-lightGray text-gray-800 px-4 border border-gray-400 rounded shadow my-2"
        onClick={() => {
          locator();
        }}
      >
        Use my current location 📌
      </button>
    </>
  );
}
