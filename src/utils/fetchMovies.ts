import axios from "axios";
import { URL_MOVIE } from "./constans";
import { MovieResults } from "./types";

export const loadMovies = async (num: number): Promise<MovieResults> => {
  const newUrl = URL_MOVIE + num;
  const { data } = await axios(newUrl);
  return data;
};
