import { useState } from "react";
function SearchBooks(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const url = new URL("http://localhost:8080/google/get");
    url.searchParams.append("title", searchTerm);

    

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
        //console.log(props.books)
    }

    const handleTitleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <input onChange={handleTitleSearch} />
            <button onClick={getBooks}>Get Books</button>
        </div>
    );
}

export default SearchBooks;