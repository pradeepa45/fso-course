import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { id, quote, author, good, bad } = await req.json();
  await prisma.$connect();
  const updatedQuote = await prisma.quotation.upsert({
    where: {
      id: id,
    },
    create: {
      id: id,
      quote: quote,
      author: author,
      good: good,
      bad: bad,
    },
    update: {
      quote: quote,
      author: author,
      good: good,
      bad: bad,
    },
  });
  await prisma.$disconnect();
  return NextResponse.json(updatedQuote);
}
