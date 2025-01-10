'use client';

import { Box } from '@/components/box';
import { Image } from '@/components/image';
import { droneFont } from '@/styles/font';
import footerStyles from '@/styles/modules/footer.module.css';
import { Col, Row, Space } from 'antd';
import { ContactGroup } from './contact-group';

export const ContactUs = () => {
  return (
    <Space direction="vertical">
      <Box
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        CONTACT US
      </Box>
      <Row gutter={50}>
        <Col className="font-16">
          <ContactGroup
            href="tel:01234568910"
            label="01234568910"
            icon={<Image src="/phone.svg" alt="phone icon" />}
          />
          <ContactGroup
            href="mailto:tymex-talent@tyme.com"
            label="tymex-talent@tyme.com"
            icon={<Image src="/message.svg" alt="message icon" />}
          />
        </Col>
      </Row>
    </Space>
  );
};
