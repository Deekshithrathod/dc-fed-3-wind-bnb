import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import stays from "../../../stays.json";
import Stay from "../Stay/Stay";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="company logo" />
        </div>
        <div className="filter-console">
          <div className="search">
            <input type="text" placeholder="Search location..." />
          </div>
          <div className="guests-count">
            <input type="text" placeholder="Add guests" />
          </div>
          <button>
            <SearchIcon />
          </button>
        </div>
      </nav>
      <main className="search-results">
        <div className="results-head">
          <h1>Stays in Finland</h1>
          <p>12+ search results</p>
        </div>

        <div className="results">
          {stays.map((stay) => (
            <Stay {...stay} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Navbar;
