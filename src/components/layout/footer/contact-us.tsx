'use client';

import React from 'react';
import { Col, Row, Space, Typography } from 'antd';

const { Paragraph } = Typography;

export const ContactUs = () => {
  return (
    <Space direction="vertical" className="">
      <Paragraph>CONTACT US</Paragraph>
      <Row gutter={50}>
        <Col className="font-normal">
          <Paragraph>01234568910</Paragraph>
          <Paragraph>tymex-talent@tyme.com</Paragraph>
        </Col>
      </Row>
    </Space>
  );
};
