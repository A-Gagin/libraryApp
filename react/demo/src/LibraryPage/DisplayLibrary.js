function DisplayLibrary(props) {
    return (
        <div style={{padding: "10px"}}>
            {
                props.library.map((book) => (
                    <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                        {book.title} <br />
                        {book.author}
                    </div>
                ))
            }
        </div>

    );

}

export default DisplayLibrary;