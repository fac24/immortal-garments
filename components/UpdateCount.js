export default function updateCount({ data, listCount, setListCount }) {
  const updateCount = () => {
    setListCount((prev) => prev + 3);
  };

  if (data && listCount < 19) {
    return (
      <button
        className="text-base bg-eggshellWhite hover:bg-lightGray text-gray-800 px-4 border border-gray-400 rounded shadow my-2"
        onClick={updateCount}
      >
        Show more
      </button>
    );
  } else return null;
}
