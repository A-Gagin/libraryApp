import React, { useState } from 'react';
import SearchBooks from './SearchBooks';
import DisplayGoogleBooks from './DisplayGoogleBooks';
import { Typography } from '@material-ui/core';



function Search() {
    //const [books, setBooks] = useState([])
    // const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([])

    //console.log("API BOOKS", props.books);


    return (
        <div>
            <br />
            <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                <Typography variant={"h3"}>Book Finder</Typography>
            </div>
            <br />
            <SearchBooks setBooks={setBooks} /> <br />
            <div>
                <DisplayGoogleBooks books={books} /> <br />
            </div>

        </div>
    );
}

export default Search;