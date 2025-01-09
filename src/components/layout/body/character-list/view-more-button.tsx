import commonStyles from '@/styles/modules/common.module.css';
import { Spin } from 'antd';

interface IViewMoreButtonProps {
  onLoadMore: () => void;
  loading?: boolean;
  isEndList?: boolean;
  hidden?: boolean;
}

export const ViewMoreButton: React.FC<IViewMoreButtonProps> = ({
  onLoadMore,
  loading,
  isEndList,
  hidden,
}) => {
  if (hidden) {
    return <></>
  }

  if (isEndList) {
    return <div>End!</div>;
  }

  return (
    <div
      className={`font-16 ${commonStyles.button}`}
      style={{ width: '20rem', height: '4.375rem' }}
      onClick={onLoadMore}
    >
      {loading ? <Spin /> : 'View more'}
    </div>
  );
};
