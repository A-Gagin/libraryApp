function SearchBooks(props) {
    const url = new URL("http://localhost:8080/google/get");
    url.searchParams.append("title", props.searchTerm);

    function call() {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((obj) => {
                if (obj != null) {
                    console.log("API CALL", obj);
                    if (obj.length === 0) {
                        obj = [{ volumeInfo: { title: "Book not found.", authors: [""] } }];
                    }
                    props.setBooks(obj);
                } else {
                    console.log("Oops.")
                }
            })
    }

    function getBooks() {
        call();
    }

    const handleTitleSearch = (e) => {
        props.setSearchTerm(e.target.value);
    }

    return (
        <div>
            <input onChange={handleTitleSearch} />
            <button onClick={getBooks}>Get Books</button>
        </div>
    );
}

export default SearchBooks;