export default async function getScoredQuote(votes?: number) {
  const newQuote = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/scored-quotes`,
    {
      method: "POST",
    }
  );
  const newQuoteData = await newQuote.json();
  return newQuoteData[0];
}
