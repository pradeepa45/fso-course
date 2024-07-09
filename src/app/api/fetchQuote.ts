export default async function fetchQuote() {
  const newQuote = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/fetch-quote`
  );
  const quote = await newQuote.json();
  return quote;
}
