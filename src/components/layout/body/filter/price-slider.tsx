'use client';

import { Col, Row, Slider } from 'antd';
import React from 'react';
import { useChangeParam } from '@/hook/useChangeParam';
import bodyStyles from '@/styles/modules/body.module.css';
import { Box } from '@/components/box';

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
    <Box className={bodyStyles['slider-container']}>
      <Box className={`font-16 font-white ${bodyStyles['slider-label']}`}>
        PRICE
      </Box>
      <Slider
        className={bodyStyles.slider}
        tooltip={{
          autoAdjustOverflow: false,
          placement: 'top',
          className: 'slider-range-custom',
          formatter: (value) => `${value} ETH`,
          open: true,
        }}
        styles={{
          rail: { background: 'var(--border)', height: 8 },
          track: {
            background:
              'linear-gradient(91.27deg, #da458f00 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, #da34dd00 102.8%)',
            height: 8,
          },
          handle: {
            boxShadow: '0 0 1rem 0.1875rem #da40a387',
          },
        }}
        range
        defaultValue={[
          +(getParam('priceStart') ?? 0),
          +(getParam('priceEnd') ?? 1000),
        ]}
        min={0}
        max={1000}
        onChangeComplete={onChangeComplete}
      />
      <Row className={bodyStyles['slider-range']} justify="space-between">
        <Col className="font-16">0.01 ETH</Col>
        <Col className="font-16">1000 ETH</Col>
      </Row>
    </Box>
  );
};
