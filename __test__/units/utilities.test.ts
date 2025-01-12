import { formatPrice, getGradient } from '@/utilities';
import { gradients } from '@/common';

describe('src/utilities/index.ts', () => {
  test('Format Price', () => {
    expect(formatPrice(0)).toBe('0');
    expect(formatPrice(2.75)).toBe('2,75');
    expect(formatPrice(10.75)).toBe('10,75');
  });

  test('Get gradient', () => {
    for (const gradientKey in gradients) {
      expect(getGradient(gradientKey)).toBe(gradients[gradientKey]);
    }
    expect(getGradient('other')).toBe('');
  });
});
