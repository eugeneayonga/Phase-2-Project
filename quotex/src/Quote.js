import React from "react";

const quotesAPI = "http://localhost:3000/quotes";

function Quote({quote, removeQuote, addToFavorites}) {
    const {title, content, quotee} = quote;
    const [isRead, setIsRead] = useState(false);


  return (
    <div>Quote</div>
  )
}

export default Quote