export type PostType = {
  description: string;
  category: string;
  createdYear: string;
  slug: string;
  pageURL: string;
  title: string;
  date: Date;
  createdDate: string;
  content: string;
  readingMinutes: number;
}

export type corePostType = Omit<PostType, 'body' | '_raw' | '_id'>;
