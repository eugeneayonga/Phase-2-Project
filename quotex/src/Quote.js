import React, { useState } from "react";

const quotesAPI = "http://localhost:3000/quotes";

function Quote({quote, removeQuote, addToFavourites}) {
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
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p><strong><em>{quotee}</em></strong></p>
        <button onClick={() => setIsRead(!isRead)}>Mark as {isRead ? "Hide" : "Show"}</button>
        <button onClick={onDeleteClick} >Delete</button>
        <button onClick={() => addToFavourites(quote)} >{quote.isFavourite ? "Unfavourite" : "❤️ Favourite" }</button>
    </div>
  );
}

export default Quote;