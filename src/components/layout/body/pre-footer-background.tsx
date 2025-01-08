'use client';

import React from 'react';
import { Image } from '@/components/image';

export const PreFooterBackground = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Image
        style={{ width: '100%', height: '100%', backgroundPosition: 'center' }}
        src="/pre-footer-bg.png"
        alt="pre footer background"
      />
    </div>
  );
};
