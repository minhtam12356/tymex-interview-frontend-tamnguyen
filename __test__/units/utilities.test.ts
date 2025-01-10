import { formatPrice, getGradient } from '@/utilities';

describe('src/utilities/index.ts', () => {
  test('Format Price', () => {
    expect(formatPrice(0)).toBe('0');
    expect(formatPrice(2.75)).toBe('2,75');
    expect(formatPrice(10.75)).toBe('10,75');
  });

  test('Get gradient', () => {
    expect(getGradient('common')).toBe(
      'linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)'
    );
    expect(getGradient('epic')).toBe(
      'linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)'
    );
    expect(getGradient('rare')).toBe(
      'linear-gradient(90deg, #43A6F6 0%, #5868F3 100%)'
    );
    expect(getGradient('legendary')).toBe(
      'linear-gradient(90.13deg, #FE955A 0%, #F1DA63 100%)'
    );
    expect(getGradient('mythic')).toBe(
      'linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)'
    );
    expect(getGradient('other')).toBe('');
  });
});
