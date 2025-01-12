import axios from 'axios';
import categories from '@/data/categories.json';

describe('src/app/api/market-places/route.ts', () => {
  // Test get all
  test('Method GET', async () => {
    const response = await axios.get(`${process.env.BE_URL}/api/market-places`);
    expect(response?.data).toHaveProperty('total');
    expect(response?.data).toHaveProperty('data');

    expect(response?.data?.data?.[0]).toHaveProperty('id');
    expect(response?.data?.data?.[0]).toHaveProperty('title');
    expect(response?.data?.data?.[0]).toHaveProperty('category');
    expect(response?.data?.data?.[0]).toHaveProperty('price');
    expect(response?.data?.data?.[0]).toHaveProperty('isFavorite');
    expect(response?.data?.data?.[0]).toHaveProperty('createdAt');
    expect(response?.data?.data?.[0]).toHaveProperty('theme');
    expect(response?.data?.data?.[0]).toHaveProperty('tier');
    expect(response?.data?.data?.[0]).toHaveProperty('imageId');
    expect(response?.data?.data?.[0]).toHaveProperty('author');
    expect(response?.data?.data?.[0]).toHaveProperty('author.firstName');
    expect(response?.data?.data?.[0]).toHaveProperty('author.lastName');
    expect(response?.data?.data?.[0]).toHaveProperty('author.email');
    expect(response?.data?.data?.[0]).toHaveProperty('author.gender');
    expect(response?.data?.data?.[0]).toHaveProperty('author.avatar');
    expect(response?.data?.data?.[0]).toHaveProperty('author.onlineStatus');
  });

  // Test query param limit
  test('Method GET Limit', async () => {
    const response = await axios.get(
      `${process.env.BE_URL}/api/market-places?limit=10`
    );
    expect(response?.data).toHaveProperty('total');
    expect(response?.data?.data?.length).toBe(10);
  });

  // Test query param (Example: category=common)
  test('Method GET with query category', () => {
    Promise.all(
      categories.map((category) => {
        const currentCategory = category.value;

        axios
          .get(`${process.env.BE_URL}/api/market-places?category=${currentCategory}`)
          .then((response) => {
            let isMatchCategory = true;

            if (response?.data?.length) {
              isMatchCategory = response?.data?.every(
                (t: { type: string }) => t.type === currentCategory
              );
            }

            expect(response?.data).toHaveProperty('total');
            expect(response?.data).toHaveProperty('data');
            expect(isMatchCategory).toBe(true);
          });
      })
    );
  });
});
