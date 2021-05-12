import {useMemo, useState} from 'react';

import SelectedTopic from 'components/topics/SelectedTopic';
import Wordcloud from 'components/wordcloud/Wordcloud';

import useElementSize from 'hooks/useElementSize';

import styles from './Topics.module.css';


export default function Topics({topics}) {
  const [elementRef, elementSize] = useElementSize();

  //State
  const [selectedWord, setSelectedWord] = useState(null);

  //Memos
  const words = useMemo(
    () => {
      const sortedTopics = [...topics];//clone topics array, to sort it
      sortedTopics.sort((a, b) => b.sentimentScore - a.sentimentScore);

      return sortedTopics.map((topic, index) => {
        return {
          text: topic.label,
          value: getWordSize(index, sortedTopics.length),
          colour: topic.sentimentScore > 60 ?
            'green'
            :
            topic.sentimentScore < 40 ?
              'red'
              :
              'grey',
          topic
        }
      })
    },
    [topics]
  );

  const [width, height] = useMemo(
    () => [elementSize.width || 100, elementSize.height || 100],
    [elementSize]
  );

  return <div className={styles.topics}>
    <header className={styles.header}>
      <h1 className={styles.title}>My Topics Challenge</h1>
    </header>
    <section className={styles.content}>
      <div className={styles.container} ref={elementRef}>
        <Wordcloud width={width} height={height} words={words} onWordClick={setSelectedWord} />
      </div>
      <div className={styles.info}>
        <SelectedTopic topic={selectedWord?.topic} />
      </div>
    </section>
  </div>
}


const wordSizes = 6;

//assumes list is pre-sorted
function getWordSize(index, numTopics) {
  const wordsPerSize = Math.ceil(numTopics / wordSizes);

  return wordSizes - Math.floor(index / wordsPerSize)
}
