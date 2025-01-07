'use client';

import React from 'react';
import headerStyles from '@/styles/modules/header.module.css';
import { Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { droneFont } from '@/styles/font';

const headers = [
  {
    key: 'home',
    label: 'HOME',
  },
  {
    key: 'about-us',
    label: 'ABOUT US',
  },
  {
    key: 'our-teams',
    label: 'OUR TEAMS',
  },
  {
    key: 'marketplace',
    label: 'MARKETPLACE',
  },
  {
    key: 'roadmap',
    label: 'ROADMAP',
  },
  {
    key: 'whitepaper',
    label: 'WHITEPAPER',
  },
];

export const LeftSide = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const onChange = (page: string) => {
    router.push(`/?page=${page}`, { scroll: false });
  };

  return (
    <Row className={`${headerStyles['left-side']} ${droneFont.className}`}>
      {headers.map((header) => (
        <Col
          className={`${headerStyles['header-tabs']} ${page === header.key ? headerStyles.active : ''}`}
          onClick={() => onChange(header.key)}
          key={header.key}
        >
          {header.label}
        </Col>
      ))}
    </Row>
  );
};
