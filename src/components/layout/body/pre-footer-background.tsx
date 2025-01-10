'use client';

import React from 'react';
import { Image } from '@/components/image';
import { Box } from '@/components/box';

export const PreFooterBackground = () => {
  return (
    <Box style={{ marginTop: '2rem' }}>
      <Image
        style={{ width: '100%', height: '100%', backgroundPosition: 'center' }}
        src="/pre-footer-bg.svg"
        alt="pre footer background"
      />
    </Box>
  );
};
