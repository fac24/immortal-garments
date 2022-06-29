
export default function SearchPostcode(props) {
    console.log('reached here');
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label name="search">Enter your postcode...</label>
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