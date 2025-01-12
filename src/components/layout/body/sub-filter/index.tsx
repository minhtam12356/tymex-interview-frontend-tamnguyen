'use client';

import categories from '@/data/categories.json';
import { Tabs } from 'antd';
import { useChangeParam } from '@/hook/useChangeParam';
import { Image } from '@/components/image';

export const SubFilter = () => {
  const { onChangeParam, getParam } = useChangeParam();

  const onChangeCategory = (value: string) => {
    onChangeParam('category', value);
  };

  return (
    <Tabs
      className="sub-filter"
      defaultActiveKey={getParam('category') ?? ''}
      tabPosition="top"
      items={categories.map((category) => {
        return {
          label: category.label,
          key: category.value,
        };
      })}
      onChange={onChangeCategory}
      moreIcon={
        <Image
          style={{ width: 18, height: 11 }}
          src="/dropdown-pink.svg"
          alt="dropdown-pink icon"
        />
      }
    />
  );
};
