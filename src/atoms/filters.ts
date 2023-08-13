import { atom, selector } from "recoil";
import stays from "../../stays.json";
import { searchResultsState } from "./searchResults";

export const locationFilterState = atom({
  key: "locationFilterState",
  default: "",
});

export const locationFilterResultsState = atom({
  key: "locationFilterResultsState",
  default: stays,
});

export const guestsFilterState = atom({
  key: "guestsFilterState",
  default: {
    adults: 0,
    children: 0,
  },
});

export const filteredLocResults = selector({
  key: "locSearchFilterResults",
  get: ({ get }) => {
    const filterString = get(locationFilterState).toLowerCase();
    const allResults = get(searchResultsState);

    console.log(filterString);

    return allResults.filter((res) => {
      console.log(res.city, res.city.includes(filterString));
      return (
        res.city.toLowerCase().includes(filterString) ||
        res.country.toLowerCase().includes(filterString)
      );
    });
  },
});
