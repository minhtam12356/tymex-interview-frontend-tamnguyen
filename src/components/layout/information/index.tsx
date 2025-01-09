import React from 'react';
import styles from '@/styles/modules/information.module.css';
import { Image } from '@/components/image';

const CharactersBanner = () => {
  return (
    <div style={{ paddingTop: '10rem' }}>
      {/* <NewArrival /> */}
      <Image src="/characters-banner.svg" alt="characters banner" />
    </div>
  );
};

export const Information = () => {
  return (
    <div className={styles.main}>
      <div style={{ background: '#000000b3', position: 'relative' }}>
        <CharactersBanner />
      </div>
    </div>
  );
};
