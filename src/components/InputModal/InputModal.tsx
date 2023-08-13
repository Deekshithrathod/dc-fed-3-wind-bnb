import "./InputModal.css";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationFilter from "./Filters/LocationFilter/LocationFilter";
import GuestsFilter from "./Filters/GuestsFilter/GuestsFilter";

const InputModal = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  return (
    <Box
      sx={{
        width: `100vw`,
        height: `50vh`,
      }}
      role="presentation"
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}>
      <div className="filter-container">
        <LocationFilter />
        <GuestsFilter />
        <div className="btn-container">
          <div className="search-btn">
            <SearchIcon /> Search
          </div>
        </div>
      </div>
      <div className="results-container">
        <div className="location-results"></div>
        <div className="guest-options">
          <div className="option">
            <h4>Adults</h4>
            <h4>Ages 13 or above</h4>
            <div className="guest-count-input">
              <span
                onClick={() => {
                  // setAdults((prev) => (prev > 0 ? prev - 1 : 0));
                }}>
                -
              </span>
              <input type="text" value={0} />
              <span
                onClick={() => {
                  // setAdults((prev) => prev + 1);
                }}>
                +
              </span>
            </div>
          </div>
          <div className="option">
            <h4>Children</h4>
            <h4>Ages 2-12</h4>
            <div className="guest-count-input">
              <span
                onClick={() => {
                  // setChildren((prev) => (prev > 0 ? prev - 1 : 0));
                }}>
                -
              </span>
              {/* <input type="text" value={children} /> */}
              <input type="text" value={0} />
              <span
                onClick={() => {
                  // setChildren((prev) => prev + 1);
                }}>
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default InputModal;
