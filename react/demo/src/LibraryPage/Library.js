import React, { useState } from 'react';
import GetLibrary from './GetLibrary';
import DisplayLibrary from './DisplayLibrary'



function Library() {
    const [library, setLibrary] = useState([])
    //const [searchTerm, setSearchTerm] = useState("");

    console.log("LIBRARY BOOKS", library);


    return (
        <div>
            <GetLibrary setLibrary={setLibrary}/>
            <DisplayLibrary library={library}/>
        </div>
    );
}

export default Library;