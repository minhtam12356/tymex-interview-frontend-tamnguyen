'use client';

import React from 'react';
import { Input, Row, Space, Typography } from 'antd';

const { Paragraph } = Typography;

export const Subscribe = () => {
  return (
    <Space direction="vertical" className="">
      <Paragraph>SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</Paragraph>
      <Row style={{ display: 'flex' }}>
        <Input placeholder="Your email address" />
        <Paragraph>tymex-talent@tyme.com</Paragraph>
      </Row>
    </Space>
  );
};
