import Image from "next/image";
import { Game } from "~/types";

type GamesListProps = {
  games: Game[];
};

export const GamesList = ({ games }: GamesListProps) => {
  return (
    <div className="mt-16 px-4 md:px-6 xl:px-8 2xl:px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center">
      {games.map((game) => (
        <article
          key={game.id}
          className="w-full min-h-[15rem] rounded-md overflow-hidden relative"
        >
          <Image
            src={game.background_image}
            alt={`${game.name} image`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 p-2 lg:p-3 flex flex-col justify-between gap-10 bg-[rgba(0,0,0,0.4)]">
            {game.name}
          </div>
        </article>
      ))}
    </div>
  );
};
