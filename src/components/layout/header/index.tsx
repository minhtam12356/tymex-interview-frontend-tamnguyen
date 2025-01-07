import React from 'react';
import headerStyles from '@/styles/modules/header.module.css';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';

export const Header = () => {
  return (
    <header className="">
      <div className={`container ${headerStyles.header}`}>
        <LeftSide />
        <RightSide />
      </div>
    </header>
  );
};
