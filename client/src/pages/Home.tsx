import { createContext, useEffect, useState } from "react";
import Table from "../components/Home-UI/Table/Table";
import axiosClient from "../axiosClient";
import AddNewExpenseButton from "../components/Home-UI/AddNewExpenseButton";
import { Category, ExpensesContextType, IExpense } from "../types";
import AddExpenseModal from "../components/Home-UI/Modals/AddExpenseModal/AddExpenseModal";
import Loader from "../components/Home-UI/Loader";
import DeleteExpenseModal from "../components/Home-UI/Modals/DeleteExpenseModal/DeleteExpenseModal";
import UpdateExpenseModal from "../components/Home-UI/Modals/UpdateExpenseModal/UpdateExpenseModal";

export const expensesContext = createContext<ExpensesContextType>({
  expenses: [],
  setExpenses() {},
  date: null,
  setDate() {},
  category: "sports",
  setCategory() {},
  total: null,
  setTotal() {},
  notes: "",
  setNotes() {},
});

const Home = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expenseId, setExpenseId] = useState<string>("");
  const [showModal, setShowModal] = useState<{
    isOpen: boolean;
    modalStatus: string;
  }>({
    isOpen: false,
    modalStatus: "",
  });
  const [date, setDate] = useState<string | null>(null);
  const [category, setCategory] = useState<Category>("sports");
  const [total, setTotal] = useState<number | null>(null);
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axiosClient.get("/expense");
        const { data: allExpenses } = response;
        setExpenses(allExpenses);
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <expensesContext.Provider
      value={{
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
      }}
    >
      <AddNewExpenseButton setShowModal={setShowModal} />
      <Table
        setShowModal={setShowModal}
        setExpenseId={setExpenseId}
      />
      {showModal.modalStatus === "addExpense" && (
        <AddExpenseModal
          setShowModal={setShowModal}
          isOpen={showModal.isOpen}
        />
      )}
      {showModal.modalStatus === "deleteExpense" && (
        <DeleteExpenseModal
          setShowModal={setShowModal}
          isOpen={showModal.isOpen}
          expenseId={expenseId}
        />
      )}

      {showModal.modalStatus === "updateExpense" && (
        <UpdateExpenseModal
          setShowModal={setShowModal}
          isOpen={showModal.isOpen}
          expenseId={expenseId}
        />
      )}
    </expensesContext.Provider>
  );
};

export default Home;
