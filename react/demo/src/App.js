import './App.css';
import React, {  } from 'react';
import Search from "./SearchPage/Search";
import Library from "./LibraryPage/Library"
import Navbar from "./Navbar"
import { Route, Switch } from 'react-router-dom'
import Error from "./Error";
import Home from "./Home";




function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp4426455.jpg)` }}>

      <div >
      <main >
        <br />
          <div style={{ backgroundColor: "#fadfca", width: "50%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
            <Navbar />
          </div>
          <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route component={Error} />
          </Switch>
        </main>
        </div>

    </div>
  );
}

export default App;
