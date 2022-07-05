export default function updateCount({ data, listCount, setListCount }) {
  const updateCount = () => {
    setListCount((prev) => prev + 3);
  };

  if (data && listCount < 19) {
    return <button onClick={updateCount}>Show more</button>;
  } else return null;
}
