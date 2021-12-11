import './searchForm.css'

const SearchForm = props => {
    const handleChange = e => {
        props.setSearchTerm(e.target.value)
}
    return (
        <form>
            <input
            name="searchTerm"
            value={props.searchterm}
            onChange={props.searchForm}
            type='search'
        />

        <button>
            className="button button-white"
            type="submit"
        </button>
            
        </form>
    )
}

export default SearchForm