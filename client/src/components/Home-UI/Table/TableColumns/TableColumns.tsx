import { GridCellParams, GridColDef, GridTreeNode } from "@mui/x-data-grid";
import "./TableColumns.scss";
import { Box } from "@mui/material";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useContext } from "react";
import { expensesContext } from "../../../../pages/Home";

interface Props {
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
  setExpenseId: React.Dispatch<React.SetStateAction<string>>;
}

const TableColumns = ({ setExpenseId, setShowModal }: Props) => {
  const { setCategory, setDate, setNotes, setTotal } =
    useContext(expensesContext);
  const handleTrashClick = (
    e: GridCellParams<any, unknown, unknown, GridTreeNode>
  ) => {
    setExpenseId(e.id.toString());
    setShowModal({ isOpen: true, modalStatus: "deleteExpense" });
  };

  const handlePencilClick = (
    e: GridCellParams<any, unknown, unknown, GridTreeNode>
  ) => {
    console.log(e);
    setExpenseId(e.id.toString());
    setShowModal({ isOpen: true, modalStatus: "updateExpense" });
    setCategory(e.row.category);
    setTotal(e.row.total);
    setDate(e.row.date);
    setNotes(e.row.notes);
  };
  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Date",
      width: 200,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "category",
      headerName: "Category",
      sortable: false,
      width: 200,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "total",
      headerName: "Total",
      sortable: false,
      width: 100,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "notes",
      headerName: "Notes",
      sortable: false,
      width: 100,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 100,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      renderCell: (params: GridCellParams) => (
        <Box onClick={() => handleTrashClick(params)}>
          <BsFillTrashFill size={20} />
        </Box>
      ),
    },

    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 100,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
      renderCell: (params: GridCellParams) => (
        <Box onClick={() => handlePencilClick(params)}>
          <AiFillEdit size={20} />
        </Box>
      ),
    },
  ];

  return columns;
};

export default TableColumns;
