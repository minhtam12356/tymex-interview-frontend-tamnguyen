import commonStyles from '@/styles/modules/common.module.css';
import bodyStyles from '@/styles/modules/body.module.css';
import { Col, Row } from 'antd';
import { Image } from '@/components/image';

interface IActionProps {
  onResetFilter?: () => void;
  onSearch?: () => void;
}

export const Action: React.FC<IActionProps> = ({ onResetFilter, onSearch }) => {
  return (
    <Row className={bodyStyles.action}>
      <Col className={bodyStyles['reset-button']}>
        <Image
          className={bodyStyles['reset-icon']}
          src="/close.svg"
          alt="close icon"
        />
        <div className="font-16" onClick={onResetFilter}>
          Reset filter
        </div>
      </Col>
      <Col
        className={commonStyles.button}
        style={{ width: '10rem', height: '2.5rem', marginLeft: '1rem' }}
        onClick={onSearch}
      >
        Search
      </Col>
    </Row>
  );
};
