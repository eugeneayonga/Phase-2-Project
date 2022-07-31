import React, {useState} from "react";

const quotesAPI = "http://localhost:3000/quotes";


function NewQuoteForm({addQuote}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [quotee, setQuotee] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        fetch(quotesAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
                quotee,
            }),
        })
        .then(response => response.json())
        .then((newQuote) => addQuote(newQuote));

        setTitle("");
        setContent("");
        setQuotee("");
    }


  return (
    <form className="new-quote-form" onSubmit={handleSubmit}>
        <input
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
        />
        <input
            placeholder="Quotee"
            value={quotee}
            onChange={(event) => setQuotee(event.target.value)}
        />
        <textarea
            placeholder="Type your classy quote here ..."
            rows={10}
            value={content}
            onChange={(event) => setContent(event.target.value)}
        />
        <input
            type="submit"
            value="Share your classy quote"
        />

    </form>
  );
}


export default NewQuoteForm;