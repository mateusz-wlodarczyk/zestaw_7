export type Characters = string;
export type Planets = string;
export type Starships = string;

export type MovieResults = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Characters[];
  planets: Planets[];
  starships: Starships[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};
