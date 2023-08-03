import { Box, Button } from "@mui/material";
import React from "react";

interface Props {
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
}

const AddNewExpenseButton = ({ setShowModal }: Props) => {
  const handleAddExpense = () => {
    setShowModal({ isOpen: true, modalStatus: "addExpense" });
  };
  return (
    <Box sx={{ margin: "20px" }}>
      <Button
        variant="contained"
        onClick={handleAddExpense}
      >
        Add Expense
      </Button>
    </Box>
  );
};

export default AddNewExpenseButton;
