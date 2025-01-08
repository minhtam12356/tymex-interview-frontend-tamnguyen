import { type NextRequest } from 'next/server';
import marketPlaces from '@/data/market-places.json';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = +(searchParams.get('limit') ?? 30);
  const offset = +(searchParams.get('offset') ?? 0);

  const start = offset;
  const end = offset + limit;

  return new Response(JSON.stringify(marketPlaces.slice(start, end) ?? []), {
    headers: { 'Content-Type': 'application/json' },
  });
}
