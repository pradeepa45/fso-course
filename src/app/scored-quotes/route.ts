import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  await prisma.$connect();
  let quotes;
  quotes = await prisma.quotation.findMany({
    orderBy: {
      good: "desc",
    },
    take: 1,
  });
  await prisma.$disconnect();
  return NextResponse.json(quotes);
}
