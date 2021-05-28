import React, {  } from 'react';
import SearchBooks from './SearchBooks';
import DisplayGoogleBooks from './DisplayGoogleBooks'



function Search(props) {
    //const [books, setBooks] = useState([])
    // const [searchTerm, setSearchTerm] = useState("");

    console.log("API BOOKS", props.books);


    return (
        <div>
            <SearchBooks setBooks={props.setBooks}/>
            <DisplayGoogleBooks books={props.books}/>
        </div>
    );
}

export default Search;