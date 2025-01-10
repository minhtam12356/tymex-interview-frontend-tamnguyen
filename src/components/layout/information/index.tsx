import React from 'react';
import styles from '@/styles/modules/information.module.css';
import informationStyles from '@/styles/modules/information.module.css';
import { Image } from '@/components/image';
import { Box } from '@/components/box';

const CharactersBanner = () => {
  return (
    <Box className={informationStyles['characters-banner']}>
      <Image src="/characters-banner.svg" alt="characters banner" />
    </Box>
  );
};

export const Information = () => {
  return (
    <Box className={styles.main}>
      <Box style={{ background: '#000000b3', position: 'relative' }}>
        <CharactersBanner />
      </Box>
    </Box>
  );
};
