import stays from "../../stays.json";
import { atom } from "recoil";

export interface ISearchResult {
  city?: string;
  country?: string;
  superHost?: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds?: number | null;
  photo: string;
}

export const searchResultsState = atom({
  key: "searchResultsState",
  default: stays,
});
