import React from 'react';
import headerStyles from '@/styles/modules/header.module.css';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { Box } from '@/components/box';

export const Header = () => {
  return (
    <header>
      <Box className={`container ${headerStyles.header}`}>
        <LeftSide />
        <RightSide />
      </Box>
    </header>
  );
};
