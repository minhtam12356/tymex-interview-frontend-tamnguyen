import { type NextRequest } from 'next/server';
// import marketPlaces from '@/data/market.json';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = +(searchParams.get('limit') ?? 10);
  const offset = +(searchParams.get('offset') ?? 0);

  const start = offset;
  const end = offset + limit;

  console.log(start, end);

  // return marketPlaces.slice(start, end) ?? [];
}
