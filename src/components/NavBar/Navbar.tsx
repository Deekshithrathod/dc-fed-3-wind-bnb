import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import stays from "../../../stays.json";
import Stay from "../Stay/Stay";
// import SearchModal from "../SearchModal/SearchModal";
import "../SearchModal/SearchModal.css";
import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";

// import { Box } from "@mui/material/Box";
import GuestPicker from "../GuestPicker/GuestPicker";
import LocationSearch from "../LocaltionSearch/LocationSearch";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: string) => (
    <Box
      sx={{
        width: `100vw`,
        height: `50vh`,
        // display: `flex`,
        // justifyContent: `space-evenly`,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}>
      <div className="controls-bar">
        <LocationSearch />
        <GuestPicker />
        {/* <SearchButton /> */}
        <div className="btn-container">
          <div className="search-btn">
            <SearchIcon /> Search
          </div>
        </div>
      </div>
    </Box>
  );

  const anchor = `top`;
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
          <>
            {/* <Button }>{anchor}</Button> */}
            <button onClick={toggleDrawer(`top`, true)}>
              {/* <SearchModal /> */}
              <SearchIcon />
            </button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </>
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
