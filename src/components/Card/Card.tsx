import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import styles from './styles.module.scss';
import { Props } from './types'

const Card = ({ imgUrl, audioUrl, text, title, author }: Props) => {
  const content = text?.replace(/\n/gi, '&nbsp; \n');
    
  return (
    <div className={styles.containerCard} >
      <div className={styles.leftWrapper}>
        <Image src={imgUrl} alt="Zdjęcie" width={500} height={600} quality={100} priority/>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.text}>
          <h2>{title}</h2>
          <h3>{author}</h3>
          <ReactMarkdown skipHtml={false} >{content}</ReactMarkdown>
        </div>
        <div>
          <audio src={audioUrl} controls className={styles.audio} />
        </div>
      </div>
    </div>
  )
}

export default Card;
