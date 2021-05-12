import styles from './Error.module.css';

export default function Error({message, error, retry = null}) {
  return <div className={styles.error}>
    <p className={styles.message}>{message}</p>
    <p className={styles.message}>The specific error was: <span className={styles.err}>{error}</span></p>
    <button className={styles.retry} onClick={retry}>Click to retry</button>
  </div>;
}
