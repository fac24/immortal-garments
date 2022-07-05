export default function SearchPostcode(props) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="max-w-xs flex flex-col my-4 gap-y-3"
      >
        <label name="search" className="text-gray-800">
          {props.labelText}
        </label>
        <input
          type="search"
          name="search"
          onChange={props.onChange}
          value={props.userInput}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-full"
        ></input>
        <button
          type="submit"
          onClick={props.handleSearch}
          className="bg-darkGreen hover:bg-[#51ae68] text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex-auto"
        >
          Search
        </button>
      </form>
    </div>
  );
}
