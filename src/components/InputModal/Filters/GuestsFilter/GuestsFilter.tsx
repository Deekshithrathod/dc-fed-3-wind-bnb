import "./GuestsFilter.css";

const GuestsFilter = () => {
  return (
    <>
      <div className="filter-input-container">
        <label htmlFor="add-guests">Guests</label>
        <input
          type="text"
          name="guests"
          id="add-guests"
          value="5 Guests : 2 Adults, 3 Children"
          placeholder="Add Guests..."
          onFocus={() => {}}
          onBlur={() => {}}
        />
      </div>
    </>
  );
};

export default GuestsFilter;
