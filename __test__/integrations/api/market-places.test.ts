import axios from 'axios';

describe('src/app/api/market-places/route.ts', () => {
  test('Method GET', async () => {
    const response = await axios.get('http://localhost:3000/api/market-places');
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
    const response = await axios.get('http://localhost:3000/api/market-places?limit=10');
    expect(response?.data).toHaveProperty('total');
    expect(response?.data?.data?.length).toBe(10);
  });
});
