import InputSearch from "@/components/InputSearch";
import SeriesList from "@/components/SeriesList";
import PageTitle from "@/components/layout/PageTitle";
import { getSeriesList } from "@/libs/post";

const SeriesPage = async () => {
  const seriesList = await getSeriesList();

  return (
    <div className="w-full max-w-5xl mx-auto relative h-full px-4 mx-auto lg:max-w-6xl lg:px-8">
      <PageTitle
        pageTitle="Series"
        pageDescription=""
      />
      <section className="mt-8">
        <SeriesList dataList={seriesList} />
      </section>
    </div>
  );
}
export default SeriesPage;