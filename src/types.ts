export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: Status;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: null;
  tags: Tag[];
  esrb_rating: ESRB_RATING;
  short_screenshots: ScreenShots[];
};

type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

type Status = {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
};

type PlatformType = {
  id: number;
  name: string;
  slug: string;
};

type Platform = {
  platform: {
    image: null | string;
    year_end: null | number;
    year_start: null | number;
    games_count: number;
    image_background: string;
  } & PlatformType;
  released_at: string;
  requirements_en: {
    minimum: string | null;
    recommended: string | null;
  };
};

type ParentPlatform = {
  platform: PlatformType;
};

type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type Store = {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

type ESRB_RATING = {
  id: number;
  name: string;
  slug: string;
};

type ScreenShots = {
  id: number;
  image: string;
};
