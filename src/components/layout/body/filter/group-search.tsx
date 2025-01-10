import React from 'react';
import tiers from '@/data/tier.json';
import themes from '@/data/theme.json';
import times from '@/data/time.json';
import prices from '@/data/price.json';
import { Action } from './action';
import { GroupSelect } from './group-select';
import { PriceSlider } from './price-slider';
import { useChangeParam } from '@/hook/useChangeParam';
import { Box } from '@/components/box';

const defaultFilters = {
  tier: 'all',
  theme: 'halloween',
  time: 'latest',
  price: 'low-to-high',
};

export const GroupSearch = () => {
  const { onChangeParams, getParam } = useChangeParam();
  const [filters, setFilters] = React.useState<typeof defaultFilters>({
    tier: '',
    theme: '',
    time: '',
    price: '',
  });

  const onChangeFilter = (key: string, value: string) => {
    setFilters((prevFilter) => {
      return {
        ...prevFilter,
        [key]: value,
      };
    });
  };

  const onClearFilter = () => {
    onChangeParams(defaultFilters);
    setFilters(defaultFilters);
  };

  const onSearchFilter = () => {
    onChangeParams(filters);
  };

  React.useEffect(() => {
    const currentParams = {
      tier: getParam('tier') ?? 'all',
      theme: getParam('theme') ?? 'halloween',
      time: getParam('time') ?? 'latest',
      price: getParam('price') ?? 'low-to-high',
    };

    setFilters(currentParams);
  }, []);

  return (
    <Box>
      <PriceSlider />
      <GroupSelect
        label="TIER"
        options={tiers}
        value={filters?.tier}
        onChange={(tier) => onChangeFilter('tier', tier)}
      />
      <GroupSelect
        label="THEME"
        options={themes}
        value={filters?.theme}
        onChange={(theme) => onChangeFilter('theme', theme)}
      />
      <GroupSelect
        label="TIME"
        options={times}
        value={filters?.time}
        onChange={(time) => onChangeFilter('time', time)}
      />
      <GroupSelect
        label="PRICE"
        options={prices}
        value={filters?.price}
        onChange={(price) => onChangeFilter('price', price)}
      />
      <Action onResetFilter={onClearFilter} onSearch={onSearchFilter} />
    </Box>
  );
};
