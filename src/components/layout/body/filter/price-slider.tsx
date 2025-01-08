'use client';

import { Slider } from 'antd';
import React from 'react';
import { useChangeParam } from '@/hook/useChangeParam';
// import { SliderOutlined } from '@ant-design/icons';

interface IPriceSliderProps {
  name?: string;
}

export const PriceSlider: React.FC<IPriceSliderProps> = ({}) => {
  const { onChangeParams, getParam } = useChangeParam();

  const onChangeComplete = (range: number[]) => {
    onChangeParams({
      priceStart: range[0].toString(),
      priceEnd: range[1].toString(),
    });
  };

  return (
    <div className="">
      <Slider
        range
        defaultValue={[
          +(getParam('priceStart') ?? 0),
          +(getParam('priceEnd') ?? 1000),
        ]}
        min={0}
        max={1000}
        onChangeComplete={onChangeComplete}
      />
    </div>
  );
};
