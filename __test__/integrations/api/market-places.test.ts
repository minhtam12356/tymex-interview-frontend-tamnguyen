import axios from 'axios';
import tier from '@/data/tier.json';

describe('src/app/api/market-places/route.ts', () => {
  test('Method GET', async () => {
    const response = await axios.get(`${process.env.BE_URL}/api/market-places`);
    expect(response?.data).toHaveProperty('total');
    expect(response?.data).toHaveProperty('data');
    expect(response?.data?.data?.[0]).toHaveProperty('id');
    expect(response?.data?.data?.[0]).toHaveProperty('name');
    expect(response?.data?.data?.[0]).toHaveProperty('type');
    expect(response?.data?.data?.[0]).toHaveProperty('price');
    expect(response?.data?.data?.[0]).toHaveProperty('image');
    expect(response?.data?.data?.[0]).toHaveProperty('unit');
    expect(response?.data?.data?.[0]).toHaveProperty('author');
    expect(response?.data?.data?.[0]).toHaveProperty('author.name');
    expect(response?.data?.data?.[0]).toHaveProperty('author.verified');
    expect(response?.data?.data?.[0]).toHaveProperty('author.avatar');
  });

  test('Method GET Limit', async () => {
    const response = await axios.get(
      `${process.env.BE_URL}/api/market-places?limit=10`
    );
    expect(response?.data).toHaveProperty('total');
    expect(response?.data?.data?.length).toBe(10);
  });

  for(let i = 0; i < tier.length; i++) {
    const currentTier = tier[i].value;

    test('Method GET with query tier', async () => {
      const response = await axios.get(
        `${process.env.BE_URL}/api/market-places?tier=${currentTier}`
      );
      const isMatchTier = response?.data?.data?.every((t: { type: string }) => t.type === currentTier);

      expect(response?.data).toHaveProperty('total');
      expect(response?.data).toHaveProperty('data');
      expect(isMatchTier).toBe(true);
    });
  }
});
