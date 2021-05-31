import { useEffect } from "react";
const url = new URL("http://localhost:8080/books/get");
function GetLibrary(props) { // needs SetLibrary
    const setLibrary = props.setLibrary;

    useEffect(() => {
        fetch(url)
        .then((res) =>{
            return res.json();
        })
        .then((obj) => {
            if (obj != null){
                console.log("Get Library:", obj);
                if (obj.length === 0){
                    obj = [{title: "Book not found.", author: "", id: ""}];
                }
                setLibrary(obj);
            }
        })
    },[setLibrary]); //originally had props in the dependency array to get rid of an error. However, this caused infinite re-rendering.

    return null;
}

export default GetLibrary;