import { atom, selector } from "recoil";
import defaultStays from "../utils/defaultStays.json";
import {
  adultGuests,
  childrenGuests,
  locFilterKeyword,
  selectedCity,
  selectedCountry,
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

export const searchResults = atom({
  key: "searchResults",
  default: defaultStays,
});

export const fitleredSearchResults = selector({
  key: "filteredSearchResults",
  get: ({ get }) => {
    console.log(`filteredTriggered`);

    const allResults = get(searchResults);

    const locKeyword = get(locFilterKeyword).toLowerCase();
    const selCity = get(selectedCity).toLowerCase();
    const selCountry = get(selectedCountry).toLowerCase();

    const guests1 = get(childrenGuests);
    const guests2 = get(adultGuests);

    console.log(locKeyword, selCity, selCountry, guests1, guests2);
    console.log("Keyword: ", locKeyword);

    const filteredByLocation = allResults.filter((res) => {
      // const str = JSON.stringify(res).toLowerCase();
      let keywordInObject = JSON.stringify(res)
        .toLocaleLowerCase()
        .includes(locKeyword);

      if (locKeyword && keywordInObject) {
        return keywordInObject;
      }

      return res.city.includes(selCity) || res.country.includes(selCountry);
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
    const allResults: ILocSearchResult[] = defaultStays;
    const locKeyword = get(locFilterKeyword).toLowerCase();

    const filteredList = allResults.filter((res) => {
      return JSON.stringify(res).toLowerCase().includes(locKeyword);
    });

    return filteredList;
  },
});
