import { Drawer } from "@mui/material";
import "./InputBox.css";
import CustomInput from "./CustomInput/CustomInput";
import InputModal from "../../InputModal/InputModal";
import { useState } from "react";

const InputBox = () => {
  const anchor = `top`;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen((prevState) => !prevState);
    };
  return (
    <div className="input-box-conatiner">
      <CustomInput type="text" placeholder="Search Location" />
      <CustomInput type="text" placeholder="Add Guests" />
      <CustomInput type="button" onClick={toggleDrawer()} />

      <Drawer anchor={anchor} open={isDrawerOpen} onClose={toggleDrawer()}>
        <InputModal toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default InputBox;
