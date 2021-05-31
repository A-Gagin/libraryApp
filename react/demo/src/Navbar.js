import { Link } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';
function Navbar() {
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

    return (
        <div style={{ padding: "15px" }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
                <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Home
                </StyledButton>
            </Link>

            <Link to="/search" style={{ textDecoration: "none" }}>
                <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Book Search
                </StyledButton>
            </Link>

            <Link to="/library" style={{ textDecoration: "none" }}>
            <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Library
                </StyledButton>
            </Link>
        </div>
    );
};

export default Navbar;