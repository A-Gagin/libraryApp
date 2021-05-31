import React, { useState } from 'react';
import SearchBooks from './SearchBooks';
import DisplayGoogleBooks from './DisplayGoogleBooks'



function Search(props) {
    //const [books, setBooks] = useState([])
    // const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([])

    console.log("API BOOKS", props.books);


    return (
        <div>
            <SearchBooks setBooks={setBooks}/> <br />
            <div>
                <DisplayGoogleBooks books={books}/> <br />
            </div>
            
        </div>
    );
}

export default Search;