import React, { useContext } from "react";
import ModalComponent from "../../../Modal-Common/ModalComponent";
import ModalTitle from "../../../Modal-Common/ModalTitle";
import ModalInputs from "./ModalInputs";
import ModalButton from "../../../Modal-Common/ModalButton";
import axiosClient from "../../../../axiosClient";
import { expensesContext } from "../../../../pages/Home";

interface Props {
  isOpen: boolean;
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
}

const AddExpenseModal = ({ isOpen, setShowModal }: Props) => {
  const {
    expenses,
    setExpenses,
    category,
    date,
    notes,
    setCategory,
    setDate,
    setNotes,
    setTotal,
    total,
  } = useContext(expensesContext);

  const handleAddExpense = async () => {
    try {
      const response = await axiosClient.post("/create-expense", {
        date,
        category,
        total,
        notes,
      });

      const { data } = response;

      setExpenses([...expenses, data.newExpense]);
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
      <ModalTitle>Add Expense</ModalTitle>
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
      <ModalButton handleClick={handleAddExpense}>Add!</ModalButton>
    </ModalComponent>
  );
};

export default AddExpenseModal;
