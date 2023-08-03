import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import TableColumns from "./TableColumns/TableColumns";
import { memo, useContext, useMemo } from "react";
import { expensesContext } from "../../../pages/Home";

interface Props {
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
  setExpenseId: React.Dispatch<React.SetStateAction<string>>;
}
const Table = ({ setShowModal, setExpenseId }: Props) => {
  const { expenses } = useContext(expensesContext);

  const formattedExpenses = useMemo(() => {
    return expenses.map((expense) => {
      const { _id, notes, category, date, total } = expense;
      return {
        id: _id,
        notes,
        category,
        date: new Date(date).toLocaleString("he-IL", {
          hour: "2-digit",
          minute: "2-digit",
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        }),
        total,
        delete: "delete",
        edit: "edit",
      };
    });
  }, [expenses]);

  return (
    <Box sx={{ width: "50.5rem" }}>
      <DataGrid
        rows={formattedExpenses}
        columns={TableColumns({ setExpenseId, setShowModal })}
        hideFooter
      />
    </Box>
  );
};

// Using memo for unnecessary renders (props dont change)
export default memo(Table);
