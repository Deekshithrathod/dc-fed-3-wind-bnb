import { MouseEventHandler } from "react";
import "./CustomInput.css";
import SearchIcon from "@mui/icons-material/Search";

const CustomInput = ({
  type,
  placeholder = "Example...",
  onClick,
}: {
  type: "text" | "button";
  placeholder?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  if (type === "button") {
    return (
      <button onClick={onClick}>
        <SearchIcon />
      </button>
    );
  }
  return <input type={type} placeholder={placeholder} />;
};

export default CustomInput;
