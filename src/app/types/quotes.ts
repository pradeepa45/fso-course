export interface Quote {
  id: number;
  quote: string;
  author: string;
  good?: number;
  bad?: number;
  neutral?: number;
}
