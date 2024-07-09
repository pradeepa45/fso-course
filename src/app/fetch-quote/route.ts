import axios from "axios";
import { NextResponse } from "next/server";

import { Quote } from "../types/quotes";

export async function GET() {
  const quote = await axios.get(`${process.env.QUOTES_API}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const quotes: Quote[] = quote.data;
  return NextResponse.json(quotes);
}
