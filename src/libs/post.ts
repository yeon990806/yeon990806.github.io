import fs from "fs"
import matter from 'gray-matter';
import path from "path";
import dayjs from "dayjs";
import readingTime from "reading-time";
import { sync } from "glob"
import { PostType } from "./types";
import { Series } from "@/constant/series";

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPathList = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
};

export const getAllSeriesSlugs = () => {
  return Series.map(series => series.slug);
};

export const parsePost = async (postPath: string) => {
  const basicInfo = getPostBasicInfo(postPath);
  const detailInfo = await getPostDetailInfo(postPath);

  return {
    ...basicInfo,
    ...detailInfo,
  };
};

export const getPostBasicInfo = (postPath: string) => {
  const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '');
  const [category, slug] = filePath.split('/');
  const pageURL = `/blog/${category}/${slug}`;

  return {
    category,
    slug,
    pageURL
  };
};

export const getPostDetailInfo = (postPath: string) => {
  const postFile = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(postFile);
  const parsedData = data as PostType;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const createdDate = dayjs(parsedData.date).locale('ko').format('YYYY-MM-DD');

  return {
    ...parsedData,
    createdDate,
    content,
    readingMinutes
  };
};

export const getAllPostList = async (category?: string): Promise<PostType[]> => {
  const postPaths = getPostPathList(category);
  const postList = await Promise.all(postPaths.map((postPath) => parsePost(postPath)));
  return postList;
};

export const getPostDetail = (category: string, slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const filePath = `${POSTS_PATH}/${category}/${decodedSlug}.mdx`;

  const postInfo = parsePost(filePath);
  return postInfo;
};

export const sortPostList = (postList: PostType[]) => postList.sort((a, b) => a.date > b.date ? -1 : 1);

export const getSortedPostList = async (category?: string) => {
  const postList = await getAllPostList(category);
  return sortPostList(postList);
};

export const getAllTagList = async () => {
  const postList = await getAllPostList();
  const tagCountMap: { [key: string]: number } = {};

  postList.forEach(post => {
    post.tags?.forEach(tag => {
      if (tagCountMap[tag]) tagCountMap[tag] += 1;
      else tagCountMap[tag] = 1;
      tagCountMap.all = postList.length;
    });
  });

  return tagCountMap;
};

export const getSeriesList = async (): Promise<string[]> => {
  const postList = await getAllPostList();

  return Array.from(new Set(postList.map(v => v.series)));
};

export const getSeriesPostList = async (slug: string) => {
  const postList = await getAllPostList();
  const series = Series.find(item => item.slug === slug);

  return postList.filter(v => v.series?.includes(series?.title!));
}