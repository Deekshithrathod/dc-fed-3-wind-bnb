import { atom, selector } from "recoil";
import defaultStays from "../utils/defaultStays.json";
import { locFilterKeyword, selectedCity, selectedCountry } from "./filters";

export interface ILocSearchResult {
  city: string;
  country: string;
}

export const searchResults = atom({
  key: "searchResults",
  default: defaultStays,
});

export const fitleredSearchResults = selector({
  key: "filteredSearchResults",
  get: ({ get }) => {
    // const
    const locationFilter = ""; // someObject
    const guestsFilter = ""; // someObject

    const allResults = get(searchResults);

    const filteredByLocation = allResults.filter((res) =>
      JSON.stringify(res).includes(locationFilter)
    );

    const filteredByGuestsCount = filteredByLocation.filter((res) => {
      return res.maxGuests >= 2; // add guests filtered
    });

    return filteredByGuestsCount;
  },
});

export const filteredLocSearchResults = selector({
  key: "filteredLocSearchResults",
  get: ({ get }) => {
    const allResults: ILocSearchResult[] = defaultStays;
    const locKeyword = get(locFilterKeyword).toLowerCase();
    const selCity = get(selectedCity).toLowerCase();
    const selCountry = get(selectedCountry).toLowerCase();

    const filteredList = allResults.filter((res) => {
      const str = JSON.stringify(res).toLowerCase();

      if (!selCity || !selCountry || !locFilterKeyword) {
        return true;
      }

      return (
        str.includes(locKeyword) ||
        str.includes(selCity) ||
        str.includes(selCountry)
      );
    });

    return filteredList;
  },
});
