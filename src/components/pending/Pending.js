import styles from './Pending.module.css';

export default function Pending() {
  return <div className={styles.pending}>
    <span className="offscreen">Please wait, loading</span>
  </div>
}
