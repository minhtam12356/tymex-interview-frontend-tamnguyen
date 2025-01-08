'use client';

import { Slider } from 'antd';
import React from 'react';
// import { SliderOutlined } from '@ant-design/icons';

interface IPriceSliderProps {
  name?: string;
}

export const PriceSlider: React.FC<IPriceSliderProps> = ({}) => {
  return (
    <div className="">
      <Slider range defaultValue={[20, 50]} />
    </div>
  );
};
