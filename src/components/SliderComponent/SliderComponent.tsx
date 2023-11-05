'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import Card from '@/components/Card';

import { Props } from './types';
import styles from './styles.module.scss';

const SliderComponent = ({ data }: Props) => {

  return (
    <section className={styles.container}>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className={styles.cardWrapper} >
              <Card imgUrl={item.imgUrl} audioUrl={item.audioUrl} text={item.text} title={item.title} author={item.author} />
            </div>
          );
        })}
    </section>
  );
};

export default SliderComponent;

