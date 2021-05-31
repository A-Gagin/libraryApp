import './App.css';
import React, { useState } from 'react';
import Search from "./SearchPage/Search";
import Library from "./LibraryPage/Library"
import Navbar from "./Navbar"
import { Route, Switch } from 'react-router-dom'
import { Typography } from '@material-ui/core'




function App() {
  // const [books, setBooks] = useState([])
  // const [library, setLibrary] = useState([])

  return (
    <div className="App" style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp4426455.jpg)` }}>
      <br />
      <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
        <Typography variant={"h3"}>Book Finder</Typography>
      </div>
      <br />

      <Search />

      <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
        <Typography variant={"h3"}>Library</Typography>
      </div>
      <br />
      <Library />

      {/* <div style={{ backgroundColor: "lightgray", marginLeft: "auto", marginRight: "auto" }}>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", backgroundColor: "darkgray", width: "100%", height: "70px", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
            <Navbar />
          </div>
          <Switch>
            <Route path="/search" component={Search} exact/>
            <Route path="/library" component={Library} />
            <Route component={Error} />
          </Switch>
        </main>
        </div> */}

    </div>
  );
}

export default App;
