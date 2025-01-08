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
  const { id, name, author, image, price, type, unit } = information;

  return (
    <Card loading={loading} className={bodyStyles['character-card']} hoverable>
      <CharacterCardAvatar id={id} image={image} type={type} />
      <CharacterCardInformation
        name={name}
        price={price}
        unit={unit}
        author={author}
      />
    </Card>
  );
};
