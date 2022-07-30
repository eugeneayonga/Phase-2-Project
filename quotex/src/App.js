import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import QuoteContainer from "./QuoteContainer";

const quotesAPI = "http://localhost:3000/quotes";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [favouriteVisible, setFavouriteVisible] = useState(true);
  const quotesToDisplay = quotes.filter((quote) => favouriteVisible || poem.isFavourite);


  useEffect(() => {
    fetch(quotesAPI)
      .then(response => response.json())
      .then(quotes => setQuotes(quotes));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
