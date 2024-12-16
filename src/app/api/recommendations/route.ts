import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { city, category, price } = body;

    let minPrice = 0;
    let maxPrice = Number.MAX_SAFE_INTEGER;

    if (price.includes('-')) {
      [minPrice, maxPrice] = price.split('-').map((p: string) => parseInt(p, 10));
    } else if (price.startsWith('>')) {
      minPrice = parseInt(price.replace('>', '').trim(), 10);
      maxPrice = Number.MAX_SAFE_INTEGER;
    } else {
      minPrice = parseInt(price, 10);
      maxPrice = Number.MAX_SAFE_INTEGER;
    }

    const places = await prisma.place.findMany({
        where: {
          city: city || undefined,
          category: category || undefined,
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
        },
        select: {
          id: true,
          name: true,
          city: true,
          description: true,
          category: true,
          price: true,
          rating: true,
          timeMinutes: true,
        },
      });
      console.log(places);
      return NextResponse.json(places);      

    return NextResponse.json(places);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
  }
}