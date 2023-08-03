import React, { useContext } from "react";
import ModalComponent from "../../../Modal-Common/ModalComponent";
import ModalTitle from "../../../Modal-Common/ModalTitle";
import ModalInputs from "../AddExpenseModal/ModalInputs";
import ModalButton from "../../../Modal-Common/ModalButton";
import { expensesContext } from "../../../../pages/Home";
import axiosClient from "../../../../axiosClient";

interface Props {
  isOpen: boolean;
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
  expenseId: string;
}

const UpdateExpenseModal = ({ setShowModal, isOpen, expenseId }: Props) => {
  const {
    expenses,
    setExpenses,
    category,
    date,
    notes,
    total,
    setCategory,
    setDate,
    setNotes,
    setTotal,
  } = useContext(expensesContext);

  const handleUpdateExpense = async () => {
    try {
      const response = await axiosClient.put(`/edit-expense/${expenseId}`, {
        category,
        date,
        notes,
        total,
      });

      const { data } = response;
      setExpenses(
        expenses.map((expense) => {
          if (expense._id === expenseId) {
            expense = data.updatedExpense;
          }
          return expense;
        })
      );
      setCategory("sports"),
        setDate(null),
        setNotes(""),
        setTotal(null),
        setShowModal({ isOpen: false, modalStatus: "" });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <ModalComponent
      setShowModal={setShowModal}
      isOpen={isOpen}
    >
      <ModalTitle>Update Expense</ModalTitle>
      <ModalInputs
        setDate={setDate}
        setCategory={setCategory}
        setTotal={setTotal}
        setNotes={setNotes}
        date={date}
        category={category}
        total={total}
        notes={notes}
      />
      <ModalButton handleClick={handleUpdateExpense}>Update!</ModalButton>
    </ModalComponent>
  );
};

export default UpdateExpenseModal;
