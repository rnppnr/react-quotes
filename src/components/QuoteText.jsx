import styles from "./QuoteText.module.css";

function QuoteText({ quote }) {
  return (
    <div className={styles.textContainer}>
      <h2>{quote.text}</h2>
    </div>
  );
}

export default QuoteText;
