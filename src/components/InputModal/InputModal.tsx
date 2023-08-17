import "./InputModal.css";
import Filters from "./Filters/Filters";
import LocResults from "./FilterOuts/LocResults/LocResults";
import GuestOptions from "./FilterOuts/GuestOptions/GuestOptions";

const InputModal = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  return (
    <div className="modal-container" role="presentation">
      <div className="modal-heading">
        <h2>Edit your search</h2>
      </div>
      <Filters toggle={toggleDrawer} />
      <div className="results-container">
        <LocResults toggle={toggleDrawer} />
        <GuestOptions />
      </div>
    </div>
  );
};

export default InputModal;
