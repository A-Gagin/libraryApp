import DeleteBook from "./DeleteBook"
function DisplayLibrary(props) {
    return (
        <div style={{padding: "10px"}}>
            {
                props.library.map((book) => (
                    <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                        {book.title} <br />
                        {book.author}
                        {/* <button onClick={DeleteBook(book.id)}>Delete Book</button> */}
                        <DeleteBook bookID={book.id}/>
                    </div>
                ))
            }
        </div>

    );

}

export default DisplayLibrary;