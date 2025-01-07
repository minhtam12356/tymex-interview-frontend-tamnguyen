import React from 'react';
import _Image, { ImageProps } from 'next/image';

export const Image = (props: ImageProps) => {
  return (
    <_Image
      placeholder="blur"
      blurDataURL="/loading.gif"
      width={1000}
      height={1000}
      {...props}
    />
  );
};
