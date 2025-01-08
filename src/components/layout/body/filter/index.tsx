'use client';

import { GroupSelect } from './group-select';
import { PriceSlider } from './price-slider';
import { Search } from './search';
import tiers from '@/data/tier.json';
import themes from '@/data/theme.json';
import times from '@/data/time.json';
import prices from '@/data/price.json';
import { Action } from './action';
import { useChangeParam } from '@/hook/useChangeParam';

export const Filter = () => {
  const { onChangeParam, getParam } = useChangeParam();

  const onSearchText = (text: string) => {
    onChangeParam('text', text);
  };

  return (
    <div>
      <Search onSearch={onSearchText} defaultValue={getParam('text') ?? ''} />
      <PriceSlider />
      <GroupSelect
        label="TIER"
        options={tiers}
        defaultValue={getParam('tier') ?? 'all'}
        onChange={(tier) => onChangeParam('tier', tier)}
      />
      <GroupSelect
        label="THEME"
        options={themes}
        defaultValue={getParam('theme') ?? 'halloween'}
        onChange={(theme) => onChangeParam('theme', theme)}
      />
      <GroupSelect
        label="TIME"
        options={times}
        defaultValue={getParam('time') ?? 'latest'}
        onChange={(time) => onChangeParam('time', time)}
      />
      <GroupSelect
        label="PRICE"
        options={prices}
        defaultValue={getParam('price') ?? 'low-to-high'}
        onChange={(price) => onChangeParam('price', price)}
      />
      <Action />
    </div>
  );
};
