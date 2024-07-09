import { Quote } from "../types/quotes";

export default async function updateQuote(quote: Quote) {
  const res = await fetch("/update-quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quote),
  });
  const data = await res.json();
  return data;
}
