'use client';

import React from 'react';
import { Col, Row, Space } from 'antd';
import { droneFont } from '@/styles/font';
import footerStyles from '@/styles/modules/footer.module.css';

export const Navigation = () => {
  return (
    <Space direction="vertical">
      <div
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        NAVIGATION
      </div>
      <Row gutter={50}>
        <Col className="font-normal">
          <p>Home</p>
          <p>About us</p>
          <p>Our teams</p>
        </Col>
        <Col className="font-normal">
          <p>Whitepaper</p>
          <p>Marketplace</p>
          <p>Roadmap</p>
        </Col>
        <Col className="font-normal">
          <p>FAQs</p>
          <p>News</p>
          <p>Community</p>
        </Col>
      </Row>
    </Space>
  );
};
