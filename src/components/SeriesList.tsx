'use client'
import { useState } from "react";
import { Series } from "@/constant/series";
import { PostType } from "@/libs/types";
import SeriesCard from "./SeriesCard";
import InputSearch from "./InputSearch";
import useDebounce from "@/hooks/useDebounce";

type SeriesListProps = {
  seriesList: string[];
  postList: PostType[];
}

const SeriesList = ({
  seriesList,
  postList,
}: SeriesListProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedKeyword = useDebounce(inputValue, 200);

  const lowercasedKeyword = debouncedKeyword.toLowerCase();
  const lowercasedDataList = seriesList.map(v => v.toLowerCase());

  const keywordSeriesList = lowercasedDataList.filter(v => v.includes(lowercasedKeyword));
  const keywordSeriesSet = new Set(keywordSeriesList);

  const series = Series.filter(v => keywordSeriesSet.has(v.title.toLowerCase())).map(v => {
    const l = postList.filter(post => v.title === post.series);

    return {
      ...v,
      postCnt: l.length,
      lastModified: l[l.length - 1].date
    }
  });

  return (
    <div className="pt-4 mt-3 border-t border-solid border-light-gray800 dark:border-dark-gray800">
      <InputSearch
          keyword={inputValue}
          onInputValue={setInputValue}
        />
      <section className="grid gap-4 mt-8">
        { series.map((v, i) => (
          <SeriesCard
            img=""
            key={`series-${v.title}-${i}`}
            title={v.title}
            desc={v.desc}
            postCnt={v.postCnt}
            lastModified={v.lastModified}
          />
        )) }
      </section>
    </div>
  );
};
export default SeriesList;