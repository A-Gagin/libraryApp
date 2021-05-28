import './App.css';
import React, { useState } from 'react';
import Search from "./SearchPage/Search";
//import Library from "./LibraryPage/Library"



function App() {
  const [books, setBooks] = useState([])
  //const [library, setLibrary] = useState([])
  
  return (
    <div className="App">
      <Search books={books} setBooks={setBooks} />
      {/* <Library library={library} setLibrary={setLibrary}/> */}

    </div>
  );
}

export default App;
