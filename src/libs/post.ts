import fs from "fs"
import matter from 'gray-matter';
import path from "path";
import dayjs from "dayjs";
import readingTime from "reading-time";
import { sync } from "glob"
import { PostType } from "./types";

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPathList = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
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
      tagCountMap.all = (tagCountMap.all || 0) + 1;
    });
  });

  return tagCountMap;
};
