import { type NextRequest } from 'next/server';
import marketPlaces from '@/data/market-places.json';
import { DEFAULT_LIMIT } from '@/common';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const limit = +(searchParams.get('limit') ?? DEFAULT_LIMIT);
  const offset = +(searchParams.get('offset') ?? 0);
  const text = searchParams.get('text') ?? '';
  const priceStart = +(searchParams.get('priceStart') ?? 0);
  const priceEnd = +(searchParams.get('priceEnd') ?? 0);
  const tier = searchParams.get('tier') ?? '';
  const time = searchParams.get('time') ?? '';
  const price = searchParams.get('price');

  const start = offset;
  const end = offset + limit;

  let data = marketPlaces.filter((marketPlace) => {
    return (
      marketPlace.name.toLowerCase().includes(text.toLowerCase()) &&
      (tier ? marketPlace.type === tier : true) &&
      marketPlace.price >= priceStart &&
      (priceEnd ? marketPlace.price <= priceEnd : true)
    );
  });

  if (time) {
    data = data.sort((prev, curr) => {
      if (time === 'oldest') {
        return prev.id - curr.id;
      }
      return curr.id - prev.id;
    });
  }

  if (price) {
    data = data.sort((prev, curr) => {
      if (price === 'low-to-high') {
        return prev.price - curr.price;
      }
      return curr.price - prev.price;
    });
  }

  const response = {
    total: data.length,
    data: data.slice(start, end) ?? [],
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}
