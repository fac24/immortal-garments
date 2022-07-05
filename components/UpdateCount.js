export default function updateCount({ data, listCount, setListCount }) {
  const updateCount = () => {
    setListCount((prev) => prev + 3);
  };

  if (data && listCount < 19) {
    return (
      <button
        className="font-medium hover:underline decoration-coral underline-offset-4"
        onClick={updateCount}
      >
        Show more
      </button>
    );
  } else return null;
}
