import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Category, InputChangeEvent } from "../../../../types";

interface Props {
  setDate: React.Dispatch<React.SetStateAction<string | null>>;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  setTotal: React.Dispatch<React.SetStateAction<number | null>>;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  date: string | null;
  category: Category;
  total: number | null;
  notes: string;
}

const ModalInputs = ({
  setDate,
  setCategory,
  setTotal,
  setNotes,
  date,
  category,
  total,
  notes,
}: Props) => {
  const handleDateChange = (e: InputChangeEvent) => {
    setDate(e.target.value);
  };
  const handleCategoryChange = (e: SelectChangeEvent<Category>) => {
    console.log(e.target.value);

    setCategory(e.target.value as Category);
  };
  const handleTotalChange = (e: InputChangeEvent) => {
    setTotal(e.target.valueAsNumber);
  };
  const handleNotesChange = (e: InputChangeEvent) => {
    setNotes(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>Date</Typography>
        <TextField
          onChange={handleDateChange}
          sx={{ width: "100%" }}
          required={true}
          type="datetime-local"
          value={date ? date : ""}
        />
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>Category</Typography>

        <Select
          sx={{ width: "150px" }}
          value={category}
          label="Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value={"sports"}>Sports</MenuItem>
          <MenuItem value={"toys"}>Toys</MenuItem>
          <MenuItem value={"food"}>Food</MenuItem>
        </Select>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>Total</Typography>
        <TextField
          onChange={handleTotalChange}
          sx={{ width: "100%" }}
          required={true}
          type="number"
          value={total ? total : ""}
        />
      </Box>

      <Box>
        <Typography sx={{ fontSize: "20px" }}>Notes</Typography>
        <TextField
          onChange={handleNotesChange}
          sx={{ width: "100%" }}
          required={true}
          type="text"
          value={notes}
        />
      </Box>
    </Box>
  );
};

export default ModalInputs;
