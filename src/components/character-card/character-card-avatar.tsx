import bodyStyles from '@/styles/modules/body.module.css';
import { getGradient } from '@/utilities';
import { Image } from '@/components/image';
import { Space } from 'antd';
import { Box } from '@/components/box';

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
      <Box className={bodyStyles['character-card-avatar-header']}>
        <Box className={bodyStyles['card-type']}>{type}</Box>
        <Box className={bodyStyles.love}>
          <Image src="/love.svg" alt="love icon" />
        </Box>
      </Box>
      <Box className={bodyStyles.avatar}>
        <Image src={image} alt={`${id} ${type}`} />
      </Box>
    </Space>
  );
};
