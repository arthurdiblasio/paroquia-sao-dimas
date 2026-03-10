export type News = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: string;
  category?: {
    id: string;
    name: string;
  };
};
