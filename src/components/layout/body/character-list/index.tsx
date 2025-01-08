'use client';

// import { useSearchParams } from 'next/navigation';
import { CharacterCard } from '@/components/character-card';
import React from 'react';
import { ICharacter } from '@/common';
import { Row } from 'antd';
import bodyStyles from '@/styles/modules/body.module.css';

export const CharacterList = () => {
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);

  const getCharacters = async () => {
    const response = await fetch('/api/market-places');
    const jsonData = await response.json();

    if (jsonData?.length) {
      setCharacters(jsonData);
    }
  };

  React.useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Row className={bodyStyles['character-list']}>
      {characters?.map((character) => (
        <CharacterCard key={character.id} information={character} />
      ))}
    </Row>
  );
};
