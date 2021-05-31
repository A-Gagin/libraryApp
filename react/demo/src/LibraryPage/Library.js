import React, { useState } from 'react';
import GetLibrary from './GetLibrary';
import DisplayLibrary from './DisplayLibrary'



function Library(props) {
    
    //const [searchTerm, setSearchTerm] = useState("");
    const [library, setLibrary] = useState([])

    console.log("LIBRARY BOOKS", props.library);


    return (
        <div>
            <GetLibrary setLibrary={setLibrary}/>
            <DisplayLibrary library={library}/>
        </div>
    );
}

export default Library;