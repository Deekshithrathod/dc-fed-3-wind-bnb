import { Box, Drawer } from "@mui/material";
import "./InputBox.css";
import SearchIcon from "@mui/icons-material/Search";
import GuestPicker from "../../GuestPicker/GuestPicker";
import LocationSearch from "../../LocaltionSearch/LocationSearch";
import { useState } from "react";
import CustomInput from "./CustomInput/CustomInput";
const InputBox = () => {
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
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}>
      <div className="controls-bar">
        <LocationSearch />
        <GuestPicker />
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
    <div className="input-box-conatiner">
      <CustomInput type="text" placeholder="Search Location" />
      <CustomInput type="text" placeholder="Add Guests" />
      <CustomInput type="button" onClick={toggleDrawer(`top`, true)} />

      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </div>
  );
};

export default InputBox;
