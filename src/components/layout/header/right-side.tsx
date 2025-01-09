'use client';

import React from 'react';
import commonStyles from '@/styles/modules/common.module.css';
import headerStyles from '@/styles/modules/header.module.css';
import { Col, Dropdown, MenuProps, Row, Space } from 'antd';
import { Image } from '@/components/image';

const items: MenuProps['items'] = [
  {
    key: '0',
    label: <div style={{ color: 'black' }}>English</div>,
  },
];

export const RightSide = () => {
  return (
    <Row className={headerStyles['right-side']}>
      <Col
        className={commonStyles.button}
        style={{ width: '10rem', height: '2.5rem', marginRight: '3rem' }}
      >
        Connect Wallet
      </Col>
      <Col>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Image
                style={{ width: 16, height: 16, marginRight: 8 }}
                src="/world.svg"
                alt="world icon"
              />
              <Image
                style={{ width: 16, height: 16 }}
                src="/vector.svg"
                alt="vector icon"
              />
            </Space>
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};
