import React from 'react';
import bodyStyles from '@/styles/modules/body.module.css';
import { PreFooterBackground } from './pre-footer-background';
import { Filter } from './filter';
import { Col, Row } from 'antd';
import { SubFilter } from './sub-filter';
import { CharacterList } from './character-list';
import { Box } from '@/components/box';

export const Body = () => {
  return (
    <Box className={bodyStyles.main}>
      <Row className={`container ${bodyStyles.container}`}>
        <Col className={bodyStyles.filter}>
          <Filter />
        </Col>
        <Col className={bodyStyles['group-character-list']}>
          <SubFilter />
          <CharacterList />
        </Col>
      </Row>
      <PreFooterBackground />
    </Box>
  );
};
