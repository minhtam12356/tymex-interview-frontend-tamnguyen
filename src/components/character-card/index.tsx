import { Card } from 'antd';
import React from 'react';
import bodyStyles from '@/styles/modules/body.module.css';
import { ICharacter } from '@/common';
import { CharacterCardAvatar } from './character-card-avatar';
import { CharacterCardInformation } from './character-card-information';

export const CharacterCard: React.FC<{
  information: ICharacter;
  loading?: boolean;
}> = ({ information, loading = false }) => {
  const {
    id,
    title: name,
    author,
    imageId,
    price,
    category,
    isFavorite,
  } = information;

  return (
    <Card loading={loading} className={bodyStyles['character-card']} hoverable>
      <CharacterCardAvatar
        id={id}
        imageId={imageId}
        category={category}
        isFavorite={isFavorite}
      />
      <CharacterCardInformation name={name} price={price} author={author} />
    </Card>
  );
};
