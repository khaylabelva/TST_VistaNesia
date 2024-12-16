import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { city, category, minBudget, maxBudget } = body;

    const minPrice = minBudget ? parseInt(minBudget, 10) : 0;
    const maxPrice = maxBudget ? parseInt(maxBudget, 10) : Number.MAX_SAFE_INTEGER;

    if (isNaN(minPrice) || isNaN(maxPrice)) {
      return NextResponse.json({ error: 'Invalid budget values' }, { status: 400 });
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
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
  }
}