'use client';

// import { useSearchParams } from 'next/navigation';
import { CharacterCard } from '@/components/character-card';
import React from 'react';
import { ICharacter } from '@/common';
import { Row } from 'antd';
import bodyStyles from '@/styles/modules/body.module.css';
import commonStyles from '@/styles/modules/common.module.css';
import { useChangeParam } from '@/hook/useChangeParam';
import { useSearchParams } from 'next/navigation';
import { CardSkeleton } from './card-skeleton';

export const CharacterList = () => {
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { getParams } = useChangeParam();
  const searchParams = useSearchParams();

  const getCharacters = async () => {
    setIsLoading(true);
    const queryObject = getParams();
    delete queryObject['page'];
    const queryParams = new URLSearchParams(queryObject).toString();

    const response = await fetch(`/api/market-places?${queryParams}`);
    const jsonData = await response.json();

    if (jsonData?.data?.length) {
      setCharacters(jsonData?.data);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getCharacters();
  }, [searchParams]);

  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <div>
      <Row className={bodyStyles['character-list']}>
        {characters?.length
          ? characters?.map((character) => (
              <CharacterCard key={character.id} information={character} />
            ))
          : 'No data!'}
      </Row>

      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.2rem',
        }}
      >
        <div
          className={`font-normal ${commonStyles.button}`}
          style={{ width: '20rem', height: '4.375rem' }}
          // onClick={onSearch}
        >
          View more
        </div>
      </Row>
    </div>
  );
};
