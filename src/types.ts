export type RootStackParamList = {
  Home: undefined; // No params expected
  About: undefined;
  NewsItem: undefined;// No params expected
};

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
}
