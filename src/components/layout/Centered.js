import {forwardRef} from 'react';
import styles from './Centered.module.css';

export default forwardRef(function Centered({children}, ref) {
  return (<div ref={ref} className={styles.centered}>
    <div className={styles.inner}>{children}</div>
  </div>);
});
