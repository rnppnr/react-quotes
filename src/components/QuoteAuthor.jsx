import styles from "./QuoteAuthor.module.css";

function QuoteAuthor({ quote }) {
  return (
    <div className={styles.authorContainer}>
      <h3>{quote.author}</h3>
    </div>
  );
}

export default QuoteAuthor;
