import FormatNumber from 'components/format/FormatNumber';

import styles from './SelectedTopic.module.css';

export default function SelectedTopic({topic}) {


  if(!topic) {
    return <div><p>Click a topic on the left to get more information</p></div>
  }

  const sentiment = topic.sentiment;
  const totalMentions = (sentiment.negative || 0) + (sentiment.neutral || 0) + (sentiment.positive || 0);

  return <div>
    <dl className={styles.list}>
      <div className={styles.item}>
        <dt className={styles.term}>Information on topic</dt>
        <dd className={styles.definition}>{topic.label}</dd>
      </div>

      <div className={`${styles.item} ${styles.space}`}>
        <dt className={styles.term}>Total mentions</dt>
        <dd className={styles.definition}><FormatNumber value={totalMentions} /></dd>
      </div>

      <div className={styles.item}>
        <dt className={styles.term}>Positive mentions</dt>
        <dd className={`${styles.definition} ${styles.positive}`}><FormatNumber value={sentiment.positive || 0} /></dd>
      </div>

      <div className={styles.item}>
        <dt className={styles.term}>Neutral mentions</dt>
        <dd className={styles.definition}><FormatNumber value={sentiment.neutral || 0} /></dd>
      </div>

      <div className={styles.item}>
        <dt className={styles.term}>Negative mentions</dt>
        <dd className={`${styles.definition} ${styles.negative}`}><FormatNumber value={sentiment.negative || 0} /></dd>
      </div>
    </dl>
  </div>
}
