import React from 'react';
import { Col, Divider, Row } from 'antd';
import { Navigation } from './navigation';
import { ContactUs } from './contact-us';
import { Subscribe } from './subscribe';
import { CopyWriter } from './copywriter';
import footerStyles from '@/styles/modules/footer.module.css';

interface IFooterProps {
  className?: string;
}

export const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer>
      <div className="container">
        <Row className={footerStyles['pre-footer']}>
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

        <CopyWriter />
      </div>
    </footer>
  );
};
