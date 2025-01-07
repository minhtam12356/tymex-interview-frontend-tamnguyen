'use client';

import React from 'react';
import { Input, Row, Typography } from 'antd';

const { Paragraph } = Typography;

export const Subscribe = () => {
  return (
    <div className="">
      <Paragraph>SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</Paragraph>
      <Row style={{ display: 'flex' }}>
        <Input placeholder="Your email address" />
        <Paragraph>tymex-talent@tyme.com</Paragraph>
      </Row>
    </div>
  );
};
