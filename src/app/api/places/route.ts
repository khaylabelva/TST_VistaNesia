import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cities = await prisma.place.findMany({
      select: { city: true },
      distinct: ['city'],
    });

    const categories = await prisma.place.findMany({
      select: { category: true },
      distinct: ['category'],
    });

    return NextResponse.json({
      cities: cities.map((c) => c.city),
      categories: categories.map((c) => c.category),
    });
  } catch (error) {
    console.error('Error fetching places:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
