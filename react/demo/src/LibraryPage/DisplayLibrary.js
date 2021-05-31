//import DeleteBook from "./DeleteBook"
import { Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

function DisplayLibrary(props) {
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

    const url = new URL("http://localhost:8080/books/delete");

    const remove = (bookID) => e => {
        let id = bookID;
        console.log(typeof id);
        console.log("removing id:", id);
        if (typeof id != "string") {
            id = "string";
        }
        fetch(url, { method: 'DELETE', headers: { "Accept": "application/json", "Content-Type": "application/json", },  body: JSON.stringify({ "id": id }) })
            // .then((res) => {
            //     return res.json();
            // })
            .then((obj) => {
                console.log(obj);
            })
    }

    return (
        <div style={{ padding: "10px" }}>
            {
                props.library.map((book) => (
                    <div>
                        <div style={{ backgroundColor: "#fadfca", width: "20%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                            <img src={book.image} alt="Cover" height="100px" width="100px"/>
                            <Typography variant="h5">{book.title}</Typography>
                            <Typography variant="h6">{book.author}</Typography> <br />
                            {console.log(book.id)}
                            <div>
                                <StyledButton onClick={remove(book.id)}>Delete</StyledButton>
                            </div>
                            {/* <DeleteBook bookID={book.id}/> */}
                        </div>
                        <br />
                    </div>
                ))
            }
        </div>

    );

}

export default DisplayLibrary;