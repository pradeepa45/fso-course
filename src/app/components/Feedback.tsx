"use client";

import React from "react";
import Button from "./Button";
import { negativeFeedback, positiveFeedback } from "../libs/feedback";

interface FeedbackPropType {
  feedback: {
    good: number;
    neutral: number;
    bad: number;
  };
  setFeedback: Function;
}

export default function Feedback({ feedback, setFeedback }: FeedbackPropType) {
  const { good, bad, neutral } = feedback;
  return (
    <div>
      <h1>Rate this quote</h1>
      <div className="flex gap-4">
        <Button onClick={() => setFeedback("good")}>Good</Button>
        {/* <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button> */}
        <Button onClick={() => setFeedback("bad")}>Bad</Button>
      </div>
      {(good > 0 || bad > 0 || neutral > 0) && (
        <div className="flex gap-4">
          <div>
            <h2 className="mb-4">Statistics</h2>
            <div className="flex flex-col gap-4">
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4">Summary</h2>
            <div className="flex flex-col gap-4">
              <p>Positive: {positiveFeedback({ good, neutral, bad })}</p>
              <p>Negative: {negativeFeedback({ good, neutral, bad })}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
