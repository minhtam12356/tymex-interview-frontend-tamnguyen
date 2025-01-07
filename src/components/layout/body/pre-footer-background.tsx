'use client';

import React from 'react';
import { Image } from '@/components/image';
import styles from '@/styles/modules/common.module.css';

export const PreFooterBackground = () => {
  return (
    <div className={styles['max-container']}>
      <Image
        style={{ width: '100%', height: '100%', backgroundPosition: 'center' }}
        src="/pre-footer-bg.png"
        alt="pre footer background"
      />
    </div>
  );
};
