import "./InputModal.css";
import Filters from "./Filters/Filters";
import LocResults from "./FilterOuts/LocResults/LocResults";

const InputModal = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  return (
    <div
      className="modal-container"
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
              <span onClick={() => {}}>-</span>
              <input type="text" value={0} />
              <span onClick={() => {}}>+</span>
            </div>
          </div>
          <div className="option">
            <h4>Children</h4>
            <h4>Ages 2-12</h4>
            <div className="guest-count-input">
              <span onClick={() => {}}>-</span>
              <input type="text" value={0} />
              <span onClick={() => {}}>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
