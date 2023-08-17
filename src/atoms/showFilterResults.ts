import { atom } from "recoil";

export const showLocSearchResults = atom({
  key: "showLocSearchResults",
  default: false,
});

export const showGuestFilterOptions = atom({
  key: "showGuestFilterOptions",
  default: false,
});
