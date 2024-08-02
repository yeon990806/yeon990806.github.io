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
  series: string;
  tags: string[];
}

export type SeriesType = {
  img: string;
  title: string;
  desc: string;
  postCnt?: number;
  lastModified?: Date;
  slug: string;
};

export type corePostType = Omit<PostType, 'body' | '_raw' | '_id'>;

export type CareerHistoryType = {
  company: string;
  range: string;
  experiences: CareerItemType[];
};

export type CareerItemType = {
  title: string;
  date: string;
  desc: string;
  skill?: string[];
}