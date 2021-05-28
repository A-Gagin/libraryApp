function DisplayGoogleBooks(props) {
    return (
        <div style={{padding: "10px"}}>
            {
                props.books.map((book) => (
                    <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                        {book.volumeInfo.title} <br />
                        {book.volumeInfo.authors[0]}
                    </div>
                ))
            }
        </div>

    );

}

export default DisplayGoogleBooks;