'use client';

import { GroupSelect } from './group-select';
import { PriceSlider } from './price-slider';
import { Search } from './search';
import tiers from '@/data/tier.json';
import themes from '@/data/theme.json';
import times from '@/data/time.json';
import prices from '@/data/price.json';
import { Action } from './action';

export const Filter = () => {
  return (
    <div>
      <Search
        onSearch={function (text: string): void {
          console.log(text);
        }}
      />
      <PriceSlider />
      <GroupSelect
        label="TIER"
        options={tiers}
        defaultValue="all"
        onChange={(tier) => console.log({ tier })}
      />
      <GroupSelect
        label="THEME"
        options={themes}
        defaultValue="halloween"
        onChange={(theme) => console.log({ theme })}
      />
      <GroupSelect
        label="TIME"
        options={times}
        defaultValue="latest"
        onChange={(time) => console.log({ time })}
      />
      <GroupSelect
        label="PRICE"
        options={prices}
        defaultValue="low-to-high"
        onChange={(price) => console.log({ price })}
      />
      <Action />
    </div>
  );
};
