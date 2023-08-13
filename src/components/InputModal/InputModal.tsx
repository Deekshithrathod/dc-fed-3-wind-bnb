import "./InputModal.css";
import { Box } from "@mui/material";
import Filters from "./Filters/Filters";
import LocationFilterResult from "./FilterOuts/LocationFilterResult/LocationFilterResult";
import { useRecoilState } from "recoil";
import { guestsFilterState } from "../../atoms/filters";
import LocResults from "./FilterOuts/LocResults/LocResults";

const InputModal = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  const [{ adults, children }, setGuestFilterState] =
    useRecoilState(guestsFilterState);

  return (
    <Box
      sx={{
        width: `100vw`,
        height: `50vh`,
        minHeight: `30rem`,
        overflowY: `scroll`,
      }}
      role="presentation"
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}>
      <div className="modal-heading">
        <h2>Edit your search</h2>
      </div>
      <Filters />
      <div className="results-container">
        <LocResults />
        <div className="guest-options">
          <div className="option">
            <h4>Adults</h4>
            <h4>Ages 13 or above</h4>
            <div className="guest-count-input">
              <span
                onClick={() => {
                  setGuestFilterState((prevState) => {
                    const retVal = {
                      children: prevState.children,
                      adults: prevState.adults > 0 ? prevState.adults - 1 : 0,
                    };
                    return retVal;
                  });
                }}>
                -
              </span>
              <input type="text" value={adults} />
              <span
                onClick={() => {
                  setGuestFilterState((prevState) => {
                    const retVal = {
                      adults: prevState.adults + 1,
                      children: prevState.children,
                    };
                    return retVal;
                  });
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
                  setGuestFilterState((prevState) => {
                    const retVal = {
                      adults: prevState.adults,
                      children:
                        prevState.children > 0 ? prevState.children - 1 : 0,
                    };
                    return retVal;
                  });
                }}>
                -
              </span>
              <input type="text" value={children} />
              <span
                onClick={() => {
                  setGuestFilterState((prevState) => {
                    const retVal = {
                      adults: prevState.adults,
                      children: prevState.children + 1,
                    };
                    return retVal;
                  });
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
