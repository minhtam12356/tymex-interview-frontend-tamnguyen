import React from 'react';
import styles from '@/styles/modules/body.module.css';
import { PreFooterBackground } from './pre-footer-background';

export const Body = () => {
  return (
    <div className={styles.main}>
      Body
      <PreFooterBackground />
    </div>
  );
};
