import Image from "next/image";
import { Game as GameTypes } from "~/types";
import StarIcon from "~/assets/svg/star.svg";

type GameProps = {
  data: GameTypes;
};

const ratingColor = (rating: number) => {
  if (rating < 1) return "bg-red-700";
  if (rating < 2) return "bg-red-500";
  if (rating < 3) return "bg-orange-500";
  if (rating < 4) return "bg-yellow-500";
  if (rating < 5) return "bg-green-600";
  return "bg-emerald-700";
};

export const Game = ({ data }: GameProps) => {
  return (
    <article className="w-full min-h-[15rem] rounded-md overflow-hidden relative">
      <Image
        src={data.background_image}
        alt={`${data.name} image`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 p-2 lg:p-3 flex justify-between items-end gap-10 bg-[rgba(0,0,0,0.4)]">
        <div
          className={`absolute top-3 right-3 flex justify-center items-center gap-1 px-1 font-dbMono rounded-md ${ratingColor(
            data.rating
          )}`}
        >
          {data.rating}
          <Image src={StarIcon} width={16} height={16} alt="Rating Star" />
        </div>
        <div className="flex gap-1"></div>
        <p className="text-xl flex-grow">{data.name}</p>
      </div>
    </article>
  );
};
