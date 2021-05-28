import './App.css';
import React, {useState, useEffect} from 'react';
import Search from "./SearchPage/Search";



function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/books/get")
    .then((res) => res.json())
    .then((res) => setBooks(res));
  }, []);

  function print (){
    console.log(books);
  }
  
  return (
    <div className="App">
      <button onClick={print}>Get Data</button>
      <Search></Search>
    </div>
  );
}

export default App;
