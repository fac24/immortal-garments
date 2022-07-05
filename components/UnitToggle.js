export default function UnitToggle({ data, unit, setUnit }) {
  const handleToggle = () => {
    if (unit === "km") {
      setUnit("miles");
    } else {
      setUnit("km");
    }
  };

  //if data return
  return <button onClick={handleToggle}>miles/km</button>;
  // else return null
}
