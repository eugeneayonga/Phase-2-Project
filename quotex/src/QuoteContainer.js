import React from "react";
import Quote from "./Quote";


function QuoteContainer({quotes, removeQuote, addToFavourites}) {
    return (
        <div className="quotes-container">
            {quotes.map(quote => {
                return (
                    <Quote 
                        key={quote.id} 
                        quote={quote} // revert back to quotes
                        removeQuote={removeQuote} 
                        addToFavourites={addToFavourites} 
                    />
                );
            })}
        </div>
    )
}


export default QuoteContainer