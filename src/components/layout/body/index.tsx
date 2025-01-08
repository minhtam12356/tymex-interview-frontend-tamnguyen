import React from 'react';
import styles from '@/styles/modules/body.module.css';
import { PreFooterBackground } from './pre-footer-background';
import { CharacterCard } from '../../character-card';

export const Body = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        Body
        <CharacterCard
          information={{
            id: 1,
            name: 'Neon Guy',
            type: 'rare',
            price: 20.75,
            image: '/characters/neon-guy.png',
            unit: 'ETH',
            author: {
              name: 'Ghozali_Ghozalu',
              verified: false,
              avatar: '/author-example.jpeg',
            },
          }}
        />
      </div>
      <PreFooterBackground />
    </div>
  );
};
