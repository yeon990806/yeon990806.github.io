'use client'
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Series } from "@/constant/series";
import SeriesCard from "./SeriesCard";

type SeriesListProps = {
  dataList: string[];
}

const SeriesList = ({
  dataList
}: SeriesListProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedKeyword = useDebounce(inputValue, 200);

  const lowercasedKeyword = debouncedKeyword.toLowerCase();
  const lowercasedDataList = dataList.map(v => v.toLowerCase());

  const keywordSeriesList = lowercasedDataList.filter(v => v.includes(lowercasedKeyword));
  const keywordSeriesSet = new Set(keywordSeriesList);

  const seriesList = Series.filter(v => keywordSeriesSet.has(v.title.toLowerCase()));

  return (
    <div>
      { seriesList.map((v, i) => (
        <SeriesCard
          img=""
          key={`series-${v.title}-${i}`}
          title={v.title}
          desc={v.desc}
        />
      )) }
    </div>
  );
};
export default SeriesList;