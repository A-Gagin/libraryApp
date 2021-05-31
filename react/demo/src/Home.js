import { Typography, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Home() {
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <br />
            <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                <Typography variant="h2">Book Search and Library</Typography>
                <Typography variant="h5">Written by Angela Gagin (afg4pr) for Launch SWE 2021</Typography>
            </div>

            <br />
            <div style={{ backgroundColor: "#fadfca", width: "20%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                <Typography variant="h5">Do you need the...</Typography>
                <br />


                <Link to="/search" style={{ textDecoration: "none" }}>
                    <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Book Finder
                    </StyledButton>
                </Link>

                <Typography variant="h5">or the</Typography>

                <Link to="/library" style={{ textDecoration: "none" }}>
                    <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Library
                    </StyledButton>
                </Link>
            </div>
            <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
            {/* ^ pad out the page so there isn't weird white space */}
        </div>
    );
}
export default Home;