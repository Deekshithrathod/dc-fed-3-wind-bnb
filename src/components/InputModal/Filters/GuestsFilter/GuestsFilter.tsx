import { useEffect, useState } from "react";
import "./GuestsFilter.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showGuestFilterOptions } from "../../../../atoms/showFilterResults";
import { displayGuests } from "../../../../atoms/filters";

const GuestsFilter = () => {
  const [isFocus, setIsFocus] = useState(false);
  const setShowOptions = useSetRecoilState(showGuestFilterOptions);

  const val = useRecoilValue(displayGuests);

  useEffect(() => {
    setShowOptions(isFocus);
  }, [isFocus]);
  return (
    <>
      <div
        className="filter-input-container"
        style={{ border: isFocus ? `1px solid black` : `` }}>
        <label htmlFor="add-guests">Guests | {val}</label>
        <input
          type="text"
          name="guests"
          id="add-guests"
          autoComplete="off"
          placeholder="Add Guests..."
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
      </div>
    </>
  );
};

export default GuestsFilter;
