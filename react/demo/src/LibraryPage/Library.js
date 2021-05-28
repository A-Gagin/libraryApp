import React, {  } from 'react';
import GetLibrary from './GetLibrary';
import DisplayLibrary from './DisplayLibrary'



function Library(props) {
    
    //const [searchTerm, setSearchTerm] = useState("");

    console.log("LIBRARY BOOKS", props.library);


    return (
        <div>
            <GetLibrary setLibrary={props.setLibrary}/>
            <DisplayLibrary library={props.library}/>
        </div>
    );
}

export default Library;