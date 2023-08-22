import { atom, selector } from "recoil";
import defaultStays from "../utils/defaultStays.json";
import {
  adultGuests,
  childrenGuests,
  locFilterKeyword,
  selectedCity,
} from "./filters";

export interface ILocSearchResult {
  city: string;
  country: string;
}

export interface ISearchResult {
  superHost: boolean;
  rating: number;
  beds: number;
  type: string;
  title: string;
  photo: string;
}

export interface IStay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export const searchResults = atom<IStay[]>({
  key: "searchResults",
  default: defaultStays,
});

export const fitleredSearchResults = selector({
  key: "filteredSearchResults",
  get: ({ get }) => {
    const allResults = get(searchResults);

    const locKeyword = get(locFilterKeyword).toLowerCase();
    const selCity = get(selectedCity).toLowerCase();

    const guests1 = get(childrenGuests);
    const guests2 = get(adultGuests);

    const filteredByLocation = allResults.filter((res) => {
      let keywordInObject = JSON.stringify(res)
        .toLowerCase()
        .includes(locKeyword);

      if (locKeyword && keywordInObject) {
        return keywordInObject;
      }

      return res.city.toLowerCase().includes(selCity);
    });

    const filteredByGuestsCount = filteredByLocation.filter((res) => {
      return guests1 + guests2 <= res.maxGuests; // add guests filtered
    });

    return filteredByGuestsCount;
  },
});

export const filteredLocSearchResults = selector({
  key: "filteredLocSearchResults",
  get: ({ get }) => {
    const allResults: ILocSearchResult[] = getSearchSetFromStays();
    const locKeyword = get(locFilterKeyword).toLowerCase();

    const filteredList = allResults.filter((res) => {
      return JSON.stringify(res).toLowerCase().includes(locKeyword);
    });

    return filteredList;
  },
});

const list = defaultStays;
const defaultStaysStringList = list.map((stay) => {
  return JSON.stringify({ city: stay.city, country: stay.country });
});
const listWithoutDuplicates = new Set(defaultStaysStringList.sort());
const retVal: ILocSearchResult[] = [];
listWithoutDuplicates.forEach((str) => {
  retVal.push(JSON.parse(str));
});

const getSearchSetFromStays = (): ILocSearchResult[] => {
  return retVal;
};
