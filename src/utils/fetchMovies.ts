import axios from "axios";
import { URL_MOVIE } from "./constans";

export async function loadMovies(num: number) {
  const newUrl = URL_MOVIE + num;

  try {
    const { data } = await axios(newUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
}
