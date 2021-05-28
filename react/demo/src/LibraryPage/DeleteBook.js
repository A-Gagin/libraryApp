//import { useEffect } from "react";

function DeleteBook(props) { // needs id
    const url = new URL("http://localhost:8080/books/delete");

    function remove(bookID){
        fetch(url, {method: 'DELETE', body: bookID})
        .then((res) => {
            return res.json();
        })
        .then((obj) => {
            console.log(obj);
        })
    }


    return (
        <div>
            <button onClick={remove(props.bookID)}>Delete</button>
        </div>
    );
}

export default DeleteBook;