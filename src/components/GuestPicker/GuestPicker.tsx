import { useState } from "react";
import "./GuestPicker.css";

const GuestPicker = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const getDisplayValue = () => {
    if (adults + children === 0) {
      return "";
    }
    let ret = ``;
    if (adults > 0) {
      ret += `${adults} adults; `;
    }
    if (children > 0) {
      ret += `${children} children`;
    }
    return `${adults + children} Guests : ${ret}`;
  };
  return (
    <div className="loc-search">
      <div
        className="loc-input"
        style={{ border: showOptions ? `1px solid black` : `` }}>
        <label htmlFor="add-loc">Guests</label>
        <input
          type="text"
          name="location"
          id="add-loc"
          value={getDisplayValue()}
          placeholder="Add Location..."
          onFocus={(e) => {
            e.target.style.outline = `none`;
            setShowOptions(true);
          }}
        />
      </div>
      {showOptions && (
        <div className="guest-options">
          <div className="option">
            <h4>Adults</h4>
            <h4>Ages 13 or above</h4>
            <div className="guest-input">
              <span
                onClick={() => {
                  setAdults((prev) => (prev > 0 ? prev - 1 : 0));
                }}>
                -
              </span>
              <input type="text" value={adults} />
              <span
                onClick={() => {
                  setAdults((prev) => prev + 1);
                }}>
                +
              </span>
            </div>
          </div>
          <div className="option">
            <h4>Children</h4>
            <h4>Ages 2-12</h4>
            <div className="guest-input">
              <span
                onClick={() => {
                  setChildren((prev) => (prev > 0 ? prev - 1 : 0));
                }}>
                -
              </span>
              <input type="text" value={children} />
              <span
                onClick={() => {
                  setChildren((prev) => prev + 1);
                }}>
                +
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestPicker;
