import bodyStyles from '@/styles/modules/body.module.css';
import { getCharacterImage, getGradient } from '@/utilities';
import { Image } from '@/components/image';
import { Space } from 'antd';
import { Box } from '@/components/box';

export const CharacterCardAvatar = (props: {
  id: number;
  imageId: number;
  category: string;
  isFavorite: boolean;
}) => {
  const { id, imageId, category, isFavorite } = props;

  return (
    <Space
      direction="vertical"
      style={{ background: getGradient(category) }}
      className={bodyStyles['character-card-avatar']}
    >
      <Box className={bodyStyles['character-card-avatar-header']}>
        <Box className={bodyStyles['card-category']}>{category}</Box>
        <Box className={bodyStyles.love}>
          <Image
            src={isFavorite ? '/love.svg' : '/un-love.svg'}
            alt="favorite icon"
          />
        </Box>
      </Box>
      <Box className={bodyStyles.avatar}>
        <Image src={getCharacterImage(imageId)} alt={`${id} ${category}`} />
      </Box>
    </Space>
  );
};
