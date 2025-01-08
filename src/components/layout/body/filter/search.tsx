'use client';

import { Input, InputRef } from 'antd';
import React, { useRef } from 'react';
import commonStyles from '@/styles/modules/common.module.css';
import bodyStyles from '@/styles/modules/body.module.css';
import { debounce } from '@/utilities';
// import { SearchOutlined } from '@ant-design/icons';

interface ISearchProps {
  placeholder?: string;
  onSearch: (text: string) => void;
}

export const Search: React.FC<ISearchProps> = ({
  placeholder = 'Quick search',
  onSearch,
}) => {
  const inputRef = useRef<InputRef>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceTextFn = React.useCallback(
    debounce((text: string) => onSearch(text), 1000),
    [onSearch]
  );

  const onSearchText = () => {
    const text = inputRef?.current?.input?.value ?? '';
    debounceTextFn(text);
  };

  return (
    <div className="">
      <Input
        className={`${commonStyles.input} ${bodyStyles['search-input']}`}
        placeholder={placeholder}
        ref={inputRef}
        onKeyUp={onSearchText}
        // prefix={<SearchOutlined style={{ color: '#89888b !important' }} />}
      />
    </div>
  );
};
