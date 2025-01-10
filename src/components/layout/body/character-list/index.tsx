'use client';

import { CharacterCard } from '@/components/character-card';
import React from 'react';
import { DEFAULT_LIMIT, ICharacter } from '@/common';
import { Row } from 'antd';
import bodyStyles from '@/styles/modules/body.module.css';
import { useChangeParam } from '@/hook/useChangeParam';
import { useSearchParams } from 'next/navigation';
import { CardSkeleton } from './card-skeleton';
import { ViewMoreButton } from './view-more-button';
import { Box } from '@/components/box';

export const CharacterList = () => {
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingViewMore, setIsLoadingViewMore] = React.useState(false);
  const [isEndList, setIsEndList] = React.useState(true);
  const { getParams } = useChangeParam();
  const searchParams = useSearchParams();

  const getQueryObject = () => {
    const queryObject = getParams();
    delete queryObject['page'];

    if (queryObject?.tier === 'all') {
      delete queryObject['tier'];
    }

    return queryObject;
  };

  const getCharacters = async () => {
    setIsLoading(true);
    const queryObject = getQueryObject();
    const queryParams = new URLSearchParams(queryObject).toString();

    const response = await fetch(`/api/market-places?${queryParams}`);
    const jsonData = await response.json();

    if (jsonData?.total === jsonData?.data?.length) {
      setIsEndList(true);
    } else {
      setIsEndList(false);
    }

    setCharacters(jsonData?.data);
    setIsLoading(false);
  };

  const getMoreCharacters = async () => {
    setIsLoadingViewMore(true);
    const queryObject = getQueryObject();

    queryObject['limit'] = DEFAULT_LIMIT.toString();
    queryObject['offset'] = characters.length.toString();

    const queryParams = new URLSearchParams(queryObject).toString();

    const response = await fetch(`/api/market-places?${queryParams}`);
    const jsonData = await response.json();
    const newCharacters = [...characters, ...jsonData?.data];

    if (jsonData?.total === newCharacters?.length) {
      setIsEndList(true);
    }

    setCharacters(newCharacters);
    setIsLoadingViewMore(false);
  };

  React.useEffect(() => {
    getCharacters();
  }, [searchParams]);

  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <Box>
      <Row className={bodyStyles['character-list']}>
        {characters?.length
          ? characters?.map((character) => (
              <CharacterCard key={character.id} information={character} />
            ))
          : 'No data!'}
        {isLoadingViewMore ? <CardSkeleton /> : <></>}
      </Row>

      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.2rem',
        }}
      >
        <ViewMoreButton
          hidden={!characters?.length}
          isEndList={isEndList}
          loading={isLoadingViewMore}
          onLoadMore={getMoreCharacters}
        />
      </Row>
    </Box>
  );
};
