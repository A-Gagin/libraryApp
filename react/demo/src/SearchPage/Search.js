import React, { useState } from 'react';
import SearchBooks from './SearchBooks';
import DisplayGoogleBooks from './DisplayGoogleBooks'



function Search() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    console.log("API BOOKS", books);


    return (
        <div>
            <SearchBooks searchTerm={searchTerm} setBooks={setBooks} setSearchTerm={setSearchTerm}/>
            <DisplayGoogleBooks books={books}/>
        </div>
    );
}

export default Search;