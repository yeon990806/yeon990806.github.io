import SeriesList from "@/components/SeriesList";
import PageTitle from "@/components/layout/PageTitle";
import { getAllPostList, getSeriesList, sortPostList } from "@/libs/post";

const SeriesPage = async () => {
  const seriesList = await getSeriesList();
  const postList = sortPostList(await getAllPostList());

return (
    <div className="relative w-full h-full max-w-5xl px-4 mx-auto lg:max-w-6xl lg:px-8">
      <PageTitle
        pageTitle="Series"
        pageDescription=""
      />
      <SeriesList
        seriesList={seriesList}
        postList={postList}
      />
    </div>
  );
}

export default SeriesPage;