"use client";

import React from "react";

import { Quote as QuoteType } from "@/app/types/quotes";
import updateQuote from "@/app/api/updateQuote";
import Button from "./Button";
import Feedback from "./Feedback";
import fetchQuote from "@/app/api/fetchQuote";

const initalFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function Quote({ quoteToRender }: { quoteToRender: QuoteType }) {
  const [quoteToShow, setQuote] = React.useState<QuoteType>(quoteToRender);
  const [feedback, setFeedback] = React.useState({
    good: Math.max(quoteToShow.good ?? 0, initalFeedback.good),
    bad: Math.max(quoteToShow.bad ?? 0, initalFeedback.bad),
    neutral: quoteToShow.neutral ?? initalFeedback.neutral,
  });

  const handleFetch = async () => {
    await updateQuote({
      ...quoteToShow,
      good: feedback.good,
      bad: feedback.bad,
    });
    const newQuoteData = await fetchQuote();
    setQuote(newQuoteData);
  };

  const handleFeedbackUpdate = async (name: keyof typeof feedback) => {
    setFeedback({
      ...feedback,
      [name]: feedback[name] + 1,
    });
  };

  React.useEffect(() => {
    setFeedback(initalFeedback);
  }, [quoteToShow]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border rounded flex flex-col items-center justify-center max-w-96 p-4 gap-2">
        <p className="text-xl">{quoteToShow.quote}</p>
        <p className="self-end">- {quoteToShow.author}</p>
      </div>
      <Feedback feedback={feedback} setFeedback={handleFeedbackUpdate} />
      <Button onClick={handleFetch}>Refresh</Button>
    </div>
  );
}
