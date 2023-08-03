import { Button } from "@mui/material";
import React from "react";

interface Props {
  handleClick: () => void;
  children: React.ReactNode;
}

const ModalButton = ({ handleClick, children }: Props) => {
  return (
    <Button
      onClick={handleClick}
      sx={{ fontSize: "20px", fontFamily: "system-ui" }}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default ModalButton;
