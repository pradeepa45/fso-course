import fetchQuote from "@/app/api/fetchQuote";
import getScoredQuote from "@/app/api/getScoredQuote";
import Quote from "@/app/components/Quote";
import { Quote as QuoteType } from "@/app/types/quotes";

export default async function Unicafe() {
  const quote: QuoteType = await fetchQuote();
  const highestRated = await getScoredQuote();
  return (
    <div className="min-h-screen flex flex-col items-center justify-evenly">
      <Quote quoteToRender={quote} />
      <div className="text-center">
        <p className="text-lg">Today's highest rated quote</p>
        <p>{highestRated.quote}</p>
        <p>{highestRated.good} votes</p>
      </div>
    </div>
  );
}
