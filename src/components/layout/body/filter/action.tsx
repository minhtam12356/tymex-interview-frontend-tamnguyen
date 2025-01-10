import commonStyles from '@/styles/modules/common.module.css';
import bodyStyles from '@/styles/modules/body.module.css';
import { Col, Row } from 'antd';
import { Image } from '@/components/image';
import { Box } from '@/components/box';

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
        <Box className="font-16 font-white" onClick={onResetFilter}>
          Reset filter
        </Box>
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
