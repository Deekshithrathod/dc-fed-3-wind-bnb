import { Drawer } from "@mui/material";
import "./InputBox.css";
import CustomInput from "./CustomInput/CustomInput";
import InputModal from "../../InputModal/InputModal";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { displayGuests, selectedCity } from "../../../atoms/filters";

const InputBox = () => {
  const selCity = useRecoilValue(selectedCity);
  const guestString = useRecoilValue(displayGuests);
  // const selCity = useRecoilValue(selectedCity)

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
      <CustomInput type="text" placeholder={selCity || "Search Location"} />
      <CustomInput type="text" placeholder={guestString || "Add Guests"} />
      <CustomInput type="button" onClick={toggleDrawer()} />

      <Drawer anchor={anchor} open={isDrawerOpen} onClose={toggleDrawer()}>
        <InputModal toggleDrawer={setIsDrawerOpen} />
      </Drawer>
    </div>
  );
};

export default InputBox;
