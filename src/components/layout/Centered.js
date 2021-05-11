import styles from './Centered.module.css';

export default function Centered({children}) {
  return (<div className={styles.centered}>
    <div className={styles.inner}>{children}</div>
  </div>);
}
