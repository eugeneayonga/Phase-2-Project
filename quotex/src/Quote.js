import React, { useState } from "react";

const quotesAPI = "http://localhost:3000/quotes";

function Quote({quote, removeQuote, addToFavorites}) {
    const {title, content, quotee} = quote;
    const [isRead, setIsRead] = useState(false);

    function onDeleteClick(event) {
        event.preventDefault();
        fetch(`${quotesAPI}/${quote.id}`, {
            method: "DELETE",
        });
        removeQuote(quote);
    }


  return (
    <div>Quote</div>
  )
}

export default Quote