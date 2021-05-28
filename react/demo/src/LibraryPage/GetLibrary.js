import { useEffect } from "react";

function SearchBooks(props) { // needs SetLibrary
    const url = new URL("http://localhost:8080/books/get");
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
            

    })

    return null;
}

export default SearchBooks;