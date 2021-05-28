import { useEffect } from "react";
const url = new URL("http://localhost:8080/books/get");
function SearchBooks(props) { // needs SetLibrary
    
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
                props.setLibrary(obj);
            }
        })
    },[props]);

    return null;
}

export default SearchBooks;