function DisplayGoogleBooks(props) {
    console.log("DisplayGoogleBooks", props.books);
    if (props.books != null) {
        return (
            <div style={{ padding: "10px" }}>
                {
                    props.books.map((book) => (
                        <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                            {book.volumeInfo.imageLinks != null ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="Cover"/> : "Cover not found."}<br />
                            {book.volumeInfo.title} <br />
                            {book.volumeInfo.authors != null ? book.volumeInfo.authors[0] : "Author not found."} <br />
                            {/* Have to handle for null authors because apparently that's a thing that can happen... */}
                            <button>Add to Library</button>
                        </div>
                    ))
                }
            </div>

        );

    }
    else {
        return null;
    }

}

export default DisplayGoogleBooks;