import React, { useContext } from "react";
import ModalComponent from "../../../Modal-Common/ModalComponent";
import { Typography } from "@mui/material";
import DeleteExpenseModalButtons from "./ModalButtons";
import axiosClient from "../../../../axiosClient";
import { expensesContext } from "../../../../pages/Home";

interface Props {
  isOpen: boolean;
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
  expenseId: string;
}

const DeleteExpenseModal = ({ isOpen, setShowModal, expenseId }: Props) => {
  const { setExpenses, expenses } = useContext(expensesContext);
  const handleDeleteExpense = async () => {
    try {
      const response = await axiosClient.delete(`/delete-expense/${expenseId}`);
      const { data } = response;
      setExpenses(
        expenses.filter((expense) => {
          return expense._id !== data.deletedExpenseId;
        })
      );
      setShowModal({ isOpen: false, modalStatus: "" });
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setShowModal({ isOpen: false, modalStatus: "" });
  };

  return (
    <ModalComponent
      isOpen={isOpen}
      setShowModal={setShowModal}
    >
      <Typography>Are you sure you want to delete the expense?</Typography>
      <DeleteExpenseModalButtons
        handleDelete={handleDeleteExpense}
        handleCancel={handleCancel}
      />
    </ModalComponent>
  );
};

export default DeleteExpenseModal;
