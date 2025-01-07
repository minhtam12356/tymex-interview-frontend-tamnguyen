import React from 'react';
import { Col, Divider, Row } from 'antd';
import { Navigation } from './navigation';
import { ContactUs } from './contact-us';
import { Subscribe } from './subscribe';

interface IFooterProps {
  className?: string;
}

export const Footer: React.FC<IFooterProps> = () => {
  return (
    <div>
      <footer className="container">
        <Row justify="space-between">
          <Col>
            <Navigation />
          </Col>
          <Col>
            <ContactUs />
          </Col>
          <Col>
            <Subscribe />
          </Col>
        </Row>

        <Divider style={{ marginTop: '2rem', marginBottom: '3rem' }} />

        <Row justify="space-between">
          <Col className="font-normal">
            ©2023 Tyme - Edit. All Rights reserved.
          </Col>

          <Row justify="space-between" gutter={50}>
            <Col className="font-normal">
              <a>Security</a>
            </Col>
            <Col className="font-normal">
              <a>Legal</a>
            </Col>
            <Col className="font-normal">
              <a>Privacy</a>
            </Col>
          </Row>
        </Row>
      </footer>
    </div>
  );
};
