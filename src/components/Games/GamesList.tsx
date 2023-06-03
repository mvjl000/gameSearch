import Image from "next/image";
import { Game as GameTypes } from "~/types";
import { Game } from "~/components/Games/Game";

type GamesListProps = {
  games: GameTypes[];
};

export const GamesList = ({ games }: GamesListProps) => {
  return (
    <div className="mt-16 px-4 md:px-6 xl:px-8 2xl:px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center">
      {games.map((game) => (
        <Game key={game.id} data={game} />
      ))}
    </div>
  );
};
