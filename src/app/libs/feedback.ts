interface FeedbackOptions {
  good: number;
  neutral: number;
  bad: number;
}

export const positiveFeedback = ({ good, neutral, bad }: FeedbackOptions) => {
  if (good > 0) {
    const positivePercent = (good / (good + neutral + bad)) * 100;
    return positivePercent.toFixed(2) || 0;
  }
  return 0;
};

export const negativeFeedback = ({ good, neutral, bad }: FeedbackOptions) => {
  if (bad > 0) {
    const negativePercent = (bad / (good + neutral + bad)) * 100;
    return negativePercent.toFixed(2);
  }
  return 0;
};
