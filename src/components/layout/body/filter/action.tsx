import commonStyles from '@/styles/modules/common.module.css';
import { Col, Row } from 'antd';

interface IActionProps {
  onResetFilter?: () => void;
  onSearch?: () => void;
}

export const Action: React.FC<IActionProps> = ({ onResetFilter, onSearch }) => {
  return (
    <Row style={{ flexDirection: 'column' }}>
      <Col>
        <div onClick={onResetFilter}>Reset filter</div>
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
