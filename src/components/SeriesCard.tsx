import { SeriesType } from "@/libs/types";
import Image from "next/image";

const SeriesCard = ({
  title,
  img,
  desc
}: SeriesType) => {
  return (
    <div className="">
      <div className="">
        <Image src={img} width={128} height={128} alt={`series-${title}`} />
      </div>
      <div className="mt-2 text-lg font-bold leading-none">
        {title}
      </div>
      <div className="mt-1 text-md font-normal leading-none">
        {desc}
      </div>
    </div>
  );
};
export default SeriesCard;