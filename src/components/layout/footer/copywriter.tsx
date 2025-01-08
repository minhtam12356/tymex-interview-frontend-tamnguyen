import { Row, Col } from 'antd';
import footerStyles from '@/styles/modules/footer.module.css';

export const CopyWriter = () => {
  return (
    <Row justify="space-between" className={footerStyles.container}>
      <Col className={`font-normal ${footerStyles.copywriter}`}>
        ©2023 Tyme - Edit. All Rights reserved.
      </Col>

      <Row gutter={50} className={footerStyles.extra}>
        <Col className={`font-normal ${footerStyles.link}`}>Security</Col>
        <Col className={`font-normal ${footerStyles.link}`}>Legal</Col>
        <Col className={`font-normal ${footerStyles.link}`}>Privacy</Col>
      </Row>
    </Row>
  );
};
