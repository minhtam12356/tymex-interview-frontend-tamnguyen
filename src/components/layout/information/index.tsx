import React from 'react';
import styles from '@/styles/modules/information.module.css';
import { Image } from '@/components/image';

export const Information = () => {
  return (
    <div className={styles.main}>
      <Image
        style={{ width: '1100px', height: '290px' }}
        src="/new-arrival.png"
        alt="new arrival"
      />
    </div>
  );
};
