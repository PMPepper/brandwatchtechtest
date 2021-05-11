import styles from './Pending.module.css';

export default function Pending({size = "normal"}) {
  return <div className={`${styles.pending} ${styles[size]}`}>
    <span className="offscreen">Please wait, loading</span>
  </div>
}
