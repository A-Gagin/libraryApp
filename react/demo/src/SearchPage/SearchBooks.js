import { useState } from "react";
import { Button, TextField} from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';

function SearchBooks(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const url = new URL("http://localhost:8080/google/get");
    url.searchParams.append("title", searchTerm);

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

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

    

    function call() {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((obj) => {
                if (obj != null) {
                    console.log("API CALL", obj);
                    if (obj.length === 0) {
                        obj = [{ volumeInfo: { title: "Book not found.", authors: [""] } }];
                    }
                    props.setBooks(obj);
                } else {
                    console.log("Oops.")
                }
            })
    }

    function getBooks() {
        call();
        //console.log(props.books)
    }

    const handleTitleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: "#fadfca", width: "20%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
            {/* <input onChange={handleTitleSearch} /> */}
            {/* <button onClick={getBooks}>Get Books</button> */}
            
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField id="outlined-search" label="Book Title" type="search" variant="outlined" onChange={handleTitleSearch} />
                </div>
            </form>
            <StyledButton onClick={getBooks}>Search</StyledButton>
        </div>
    );
}

export default SearchBooks;