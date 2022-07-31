import React, {useState, useEffect} from "react";
import './App.css';
import NewQuoteForm from "./NewQuoteForm";
import QuoteContainer from "./QuoteContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const quotesAPI = "http://localhost:3000/quotes";


function App() {
  const [quotes, setQuotes] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [favouriteVisible, setFavouriteVisible] = useState(true);
  const quotesToDisplay = quotes.filter((quote) => favouriteVisible || quote.isFavourite);


  useEffect(() => {
    fetch(quotesAPI)
      .then(response => response.json())
      .then(quotes => setQuotes(quotes));
  }, []);

  // Setting title of the page
  useEffect(() => {
    document.title = "QuoteX HomePage";
    
  }, []);


  function addQuote(newQuote) {
    setQuotes([...quotes, newQuote]);
  }

  function removeQuote(quoteToRemove) {
    setQuotes(quotes.filter(quote => quote.id !== quoteToRemove.id));
  }

  function addToFavourites(favouriteQuote) {
    setQuotes(quotes.map(quote => {
      return quote.id === favouriteQuote.id ? {...favouriteQuote, isFavourite: !favouriteQuote.isFavourite} : quote
    }
    ));
  }

  function renderQuoteView() {
    if (quotesToDisplay.length === 0 && !favouriteVisible) {
      return (<h1>None of your favourites has been added</h1>)
    } else {
      return (
        <QuoteContainer 
          quotes={quotesToDisplay} 
          removeQuote={removeQuote} 
          addToFavourites={addToFavourites} 
        />
      )
    }
  }


  return (
    <Router>
      <div className="App">
          <div className="sidepane">
            <button onClick={() => setFormVisible(!formVisible)} >Show / Hide New Quote Form</button>
            {formVisible ? <NewQuoteForm addQuote={addQuote} /> : null}
            <button onClick={() => setFavouriteVisible(!favouriteVisible)}>Show / Hide Favourite Quotes</button>
          </div>
        {renderQuoteView()}
      </div>
    </Router>
  );
}


export default App;
