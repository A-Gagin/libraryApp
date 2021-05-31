import React, { useState } from 'react';
import GetLibrary from './GetLibrary';
import DisplayLibrary from './DisplayLibrary'
import { Typography } from '@material-ui/core'



function Library() {
    
    //const [searchTerm, setSearchTerm] = useState("");
    const [library, setLibrary] = useState([])

    //console.log("LIBRARY BOOKS", props.library);


    return (
        <div>
            <br />
            <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                <Typography variant={"h3"}>Library</Typography> <br />
                <Typography variant={"h5"}>Reload to see Updates</Typography>
            </div> <br />
            <GetLibrary setLibrary={setLibrary}/>
            <DisplayLibrary library={library}/>
        </div>
    );
}

export default Library;