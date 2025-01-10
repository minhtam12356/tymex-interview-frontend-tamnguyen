import { IAuthor } from '@/common';
import { Image } from '@/components/image';
import bodyStyles from '@/styles/modules/body.module.css';
import { Tooltip } from 'antd';
import { AuthorAvatar } from './author-avatar';
import { formatPrice } from '@/utilities';
import { Box } from '@/components/box';

export const CharacterCardInformation = (props: {
  name: string;
  price: number;
  unit: string;
  author: IAuthor;
}) => {
  const { name, price, unit, author } = props;
  return (
    <Box className={bodyStyles['character-information']}>
      {/* Header */}
      <Box className={bodyStyles['character-information-header']}>
        <Box className={bodyStyles['character-information-name']}>
          <Tooltip placement="topLeft" title={name}>
            {name}
          </Tooltip>
        </Box>

        {/* Price */}
        <Box className={bodyStyles.cost}>
          <Box className={bodyStyles.unit}>
            <Image src="/ethereum.svg" alt="ethereum icon" />
          </Box>
          <Tooltip
            placement="topLeft"
            title={formatPrice(price)}
            className={bodyStyles.price}
          >
            {formatPrice(price)}
          </Tooltip>{' '}
          <Box className="font-white">{unit}</Box>
        </Box>
      </Box>

      {/* Author */}
      <Box className={bodyStyles['character-information-author']}>
        <AuthorAvatar author={author} />
        <Box className={bodyStyles['character-information-author-name']}>
          <Tooltip placement="topLeft" title={author.name}>
            {author.name}
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
