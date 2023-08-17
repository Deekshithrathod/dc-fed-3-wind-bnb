import { atom, selector } from "recoil";

export const locFilterKeyword = atom({
  key: "locFilterKeyword",
  default: "",
});

export const selectedCity = atom({
  key: "selectedCity",
  default: "",
});

export const selectedCountry = atom({
  key: "selectedCountry",
  default: "",
});

export const childrenGuests = atom({
  key: "childrenGuests",
  default: 0,
});

export const adultGuests = atom({
  key: "adultGuests",
  default: 0,
});

export const displayGuests = selector({
  key: "displayGuests",
  get: ({ get }) => {
    const c = get(childrenGuests);
    const a = get(adultGuests);

    let retVal =
      a + c > 0 ? `Total: ${a + c} ( ${a} adults + ${c} children )` : ``;

    return retVal;
  },
});
