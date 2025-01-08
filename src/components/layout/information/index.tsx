import React from 'react';
import styles from '@/styles/modules/information.module.css';
import { Image } from '@/components/image';

const NewArrival = () => {
  return (
    <div className="container" style={{ paddingTop: '9rem' }}>
      <Image
        style={{ maxWidth: '1100px', width: '100%', height: '100%' }}
        src="/new-arrival.svg"
        alt="new arrival"
      />
    </div>
  );
};

const MainCharacter = () => {
  return (
    <div className={styles['main-character']}>
      <Image src="/characters/the-dj.png" alt="main character" />
    </div>
  );
};

const CharactersBanner = () => {
  return (
    <div style={{ paddingTop: '4rem', position: 'relative' }}>
      <Image src="/characters-banner.svg" alt="characters banner" />
      <MainCharacter />
    </div>
  );
};

export const Information = () => {
  return (
    <div className={styles.main}>
      <div style={{ background: 'rgba(0, 0, 0, 0.7);' }}>
        <NewArrival />
        <CharactersBanner />
      </div>
    </div>
  );
};
