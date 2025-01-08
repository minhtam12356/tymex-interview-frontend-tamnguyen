import bodyStyles from '@/styles/modules/body.module.css';
import { getGradient } from '@/utilities';
import { Image } from '@/components/image';
import { Space } from 'antd';

export const CharacterCardAvatar = (props: {
  id: number;
  image: string;
  type: string;
}) => {
  const { id, image, type } = props;
  return (
    <Space
      direction="vertical"
      style={{ background: getGradient(type) }}
      className={bodyStyles['character-card-avatar']}
    >
      <div className={bodyStyles['character-card-avatar-header']}>
        <div className={bodyStyles['card-type']}>{type}</div>
        <div className={bodyStyles.love}>
          <Image src="/love.svg" alt="love icon" />
        </div>
      </div>
      <div className={bodyStyles.avatar}>
        <Image src={image} alt={`${id} ${type}`} />
      </div>
    </Space>
  );
};
