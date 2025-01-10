'use client';

import { Box } from '@/components/box';
import { Image } from '@/components/image';
import commonStyles from '@/styles/modules/common.module.css';
import headerStyles from '@/styles/modules/header.module.css';
import { Col, Dropdown, MenuProps, Row, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '0',
    label: <Box className="font-black">English</Box>,
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
