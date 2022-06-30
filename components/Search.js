
export default function SearchPostcode(props) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label name="search">{props.labelText}</label>
            <input
                type="search"
                name="search"
                onChange={props.onChange}
                value={props.userInput}
            ></input>
            <button type="submit" onClick={props.handleSearch}>
                Submit
            </button>
        </form>
    )
}