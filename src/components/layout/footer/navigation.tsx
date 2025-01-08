'use client';

import React from 'react';
import { Col, Row, Space } from 'antd';
import { droneFont } from '@/styles/font';

export const Navigation = () => {
  return (
    <Space direction="vertical" className="">
      <div className={droneFont.className}>NAVIGATION</div>
      <Row gutter={50}>
        <Col className="font-normal">
          <div>Home</div>
          <div>About us</div>
          <div>Our teams</div>
        </Col>
        <Col className="font-normal">
          <div>Whitepaper</div>
          <div>Marketplace</div>
          <div>Roadmap</div>
        </Col>
        <Col className="font-normal">
          <div>FAQs</div>
          <div>News</div>
          <div>Community</div>
        </Col>
      </Row>
    </Space>
  );
};
