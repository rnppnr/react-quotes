import { useState, useEffect } from "react";

import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";

import styles from "./Quote.module.css";

function Quote() {
  const [quote, setQuote] = useState("");

  function handleOnClick() {
    async function fetchData() {
      await fetch(import.meta.env.VITE_API_URL)
        .then((res) => res.json())
        .then((data) => setQuote(data));
    }
    fetchData();
  }

  useEffect(() => {
    handleOnClick();
  }, [setQuote]);

  return (
    <>
      <div className={styles.buttonContainer}>
        <i
          className="fa fa-refresh"
          aria-hidden="true"
          onClick={handleOnClick}
        ></i>
      </div>
      <div className={styles.quote}>
        <QuoteText quote={quote} />
        <QuoteAuthor quote={quote} />
      </div>
    </>
  );
}

export default Quote;
