// import { glob } from "glob";
// import path from "path";

// // post 저장 디렉토리
// export const POST_DIRECTORY = path.join(path.resolve(), "../../posts");

// // post mdx를 가져오는 함수
// export const getPostFiles = () => glob.sync(`${POST_DIRECTORY}/**/*.mdx`);

// export const importPost = (filePath: string) => import(filePath).then(mod => ({
//   sug: path.basename(filePath, path.extname(filePath)),
//   ...mod.attributes.meta
// }));

// export const getAllPosts = async () => await Promise.all(getPostFiles().map(importPost));