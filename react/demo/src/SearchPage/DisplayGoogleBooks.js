import { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

function DisplayGoogleBooks(props) {
    console.log("DisplayGoogleBooks", props.books);

    const url = new URL("http://localhost:8080/books/add");
    const [title, setTitle] = useState("Defacto");
    const [author, setAuthor] = useState("People");

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #ba7e5d 30%, #936639 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          //textTransform: 'capitalize',
        },
      })(Button);

    //currently adds a null object to database... fetch is passing an empty body no matter what I do.
    const add = () => {
        console.log("add onClick", title, author);
        if (title != null) {
            let book = { author: author, title: title };
            console.log("adding book:", book);

            fetch(url, { method: 'POST', body: { book }, headers: { "Content-Type": "application/json" } })
                // .then((res) => {
                //     return res.json();
                // })
                .then((obj) => {
                    console.log("fetch book", book);
                    console.log(obj);
                })
        } else {
            console.log("passing null data. Nothing was added.")
        }

    };
    if (props.books != null) {
        return (
            <div style={{ padding: "10px", height: "360px", marginLeft:"17px", overflowY: "scroll" }}>
                {
                    props.books.map((book) => (
                        <div>
                            <div style={{ backgroundColor: "#fadfca", width: "20%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                                {book.volumeInfo.imageLinks != null ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="Cover" /> : "Cover not found."}<br />
                                <Typography variant="h5">{book.volumeInfo.title}</Typography>
                                <Typography variant="h6">{book.volumeInfo.authors != null ? book.volumeInfo.authors[0] : "Author not found."}</Typography>
                                {/* {setTitle(book.volumeInfo.title)}
                                {setAuthor(book.volumeInfo.authors != null ? book.volumeInfo.authors[0] : "Author not found.")} */}
                                {/* Have to handle for null authors because apparently that's a thing that can happen... */}
                                {/* <button onClick={add}>Add to Library</button> Doesn't currently do anything */}
                                <br />
                                <StyledButton onClick={add} >Add to Library</StyledButton>
                            </div>
                            <br />
                        </div>
                    ))
                } <br />
            </div>

        );

    }
    else {
        return null;
    }

}

export default DisplayGoogleBooks;