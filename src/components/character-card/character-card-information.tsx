import { IAuthor } from '@/common';
import { Image } from '@/components/image';
import bodyStyles from '@/styles/modules/body.module.css';
import { Tooltip } from 'antd';
import { AuthorAvatar } from './author-avatar';
import { formatPrice } from '@/utilities';

export const CharacterCardInformation = (props: {
  name: string;
  price: number;
  unit: string;
  author: IAuthor;
}) => {
  const { name, price, unit, author } = props;
  return (
    <div className={bodyStyles['character-information']}>
      {/* Header */}
      <div className={bodyStyles['character-information-header']}>
        <div className={bodyStyles['character-information-name']}>
          <Tooltip placement="topLeft" title={name}>
            {name}
          </Tooltip>
        </div>

        {/* Price */}
        <div className={bodyStyles.cost}>
          <div className={bodyStyles.unit}>
            <Image src="/ethereum.svg" alt="ethereum icon" />
          </div>
          <Tooltip
            placement="topLeft"
            title={formatPrice(price)}
            className={bodyStyles.price}
          >
            {formatPrice(price)}
          </Tooltip>{' '}
          <div style={{ color: 'white' }}>{unit}</div>
        </div>
      </div>

      {/* Author */}
      <div className={bodyStyles['character-information-author']}>
        <AuthorAvatar author={author} />
        <div className={bodyStyles['character-information-author-name']}>
          <Tooltip placement="topLeft" title={author.name}>
            {author.name}
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
