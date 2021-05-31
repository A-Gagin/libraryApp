import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
function Navbar(props) {
    return (
        <div style={{ padding: "15px" }}>

            <Link to="/search" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Book Search
                </Button>
            </Link>

            <Link to="/library" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Library
                </Button>
            </Link>
        </div>
    );
};

export default Navbar;