import { Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

function DisplayGoogleBooks(props) {
    console.log("DisplayGoogleBooks", props.books);

    const url = new URL("http://localhost:8080/books/add");
    // const [title, setTitle] = useState("Default Title");
    // const [author, setAuthor] = useState("Default Author");

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
    //resolved! had to add the JSON.stringify and Accept parts.
    const add = (title, author) => e => {
        console.log("add onClick", title, author);
        if (title != null) {

            fetch(url, { method: 'POST', headers: { "Accept": "application/json", "Content-Type": "application/json", },  body: JSON.stringify({ "title": title, "author": author }) })
                // .then((res) => {
                //     return res.json();
                // })
                .then((obj) => {
                    console.log("fetch book", title, author);
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
                                <br />
                                <StyledButton onClick={add(book.volumeInfo.title, book.volumeInfo.authors != null ? book.volumeInfo.authors[0] : "Author not found.")} >Add to Library</StyledButton>
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