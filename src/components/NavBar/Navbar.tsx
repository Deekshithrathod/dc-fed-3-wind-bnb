import "./Navbar.css";

import Stay from "../Stay/Stay";
import stays from "../../../stays.json";
import "../SearchModal/SearchModal.css";

import Logo from "./Logo/Logo";
import InputBox from "./InputBox/InputBox";

const Navbar = () => {
  return (
    <>
      <nav>
        <Logo />
        <InputBox />
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
