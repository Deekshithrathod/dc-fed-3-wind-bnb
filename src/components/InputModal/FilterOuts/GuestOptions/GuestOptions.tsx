import "./GuestOptions.css";
import { useRecoilState } from "recoil";
import { adultGuests, childrenGuests } from "../../../../atoms/filters";

const GuestOptions = () => {
  const [cG, setCG] = useRecoilState(childrenGuests);
  const [aG, setAG] = useRecoilState(adultGuests);
  return (
    <div className="guest-options">
      <div className="option">
        <h4>Adults</h4>
        <h4>Ages 13 or above</h4>
        <div className="guest-count-input">
          <span onClick={() => setAG((prev) => (prev > 0 ? prev - 1 : 0))}>
            -
          </span>
          <input type="text" value={aG} onChange={() => {}} />
          <span onClick={() => setAG((prev) => prev + 1)}>+</span>
        </div>
      </div>
      <div className="option">
        <h4>Children</h4>
        <h4>Ages 2-12</h4>
        <div className="guest-count-input">
          <span onClick={() => setCG((prev) => (prev > 0 ? prev - 1 : 0))}>
            -
          </span>
          <input type="text" value={cG} onChange={() => {}} />
          <span onClick={() => setCG((prev) => prev + 1)}>+</span>
        </div>
      </div>
    </div>
  );
};

export default GuestOptions;
