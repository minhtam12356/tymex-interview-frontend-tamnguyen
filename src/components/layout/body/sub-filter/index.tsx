'use client';

import tiers from '@/data/tier.json';
import { Tabs } from 'antd';
import { useChangeParam } from '@/hook/useChangeParam';
import { Image } from '@/components/image';

export const SubFilter = () => {
  const { onChangeParam, getParam } = useChangeParam();

  const onChangeTier = (value: string) => {
    onChangeParam('tier', value);
  };

  return (
    <div className="">
      <Tabs
        className="sub-filter"
        defaultActiveKey={getParam('tier') ?? ''}
        tabPosition="top"
        items={tiers.map((tier) => {
          return {
            label: tier.label,
            key: tier.value,
          };
        })}
        onChange={onChangeTier}
        moreIcon={
          <Image
            style={{ width: 18, height: 11 }}
            src="/dropdown-pink.svg"
            alt="dropdown-pink icon"
          />
        }
      />
    </div>
  );
};
