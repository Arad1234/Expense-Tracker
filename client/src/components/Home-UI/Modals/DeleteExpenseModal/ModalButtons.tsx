import { Box, Button } from "@mui/material";

interface Props {
  handleDelete: () => void;
  handleCancel: () => void;
}

const DeleteExpenseModalButtons = ({ handleDelete, handleCancel }: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Button
        sx={{ width: "40%" }}
        variant="contained"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        sx={{ width: "40%" }}
        variant="contained"
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default DeleteExpenseModalButtons;
