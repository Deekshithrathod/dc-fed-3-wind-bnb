import { atom, selector } from "recoil";
import defaultStays from "../utils/defaultStays.json";

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
