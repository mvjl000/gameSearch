import { GamesList } from "~/components/Games/GamesList";
import { Hero } from "~/components/Hero";
import { Game } from "~/types";

type Response = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
};

const getData = async () => {
  const params = new URLSearchParams({
    key: process.env.API_KEY || "",
    page_size: "10",
  });

  const res = await fetch("https://api.rawg.io/api/games?" + params, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
    },
  });

  return res.json();
};

export default async function Home() {
  const { results }: Response = await getData();

  return (
    <main>
      <Hero />
      <GamesList games={results} />
    </main>
  );
}
