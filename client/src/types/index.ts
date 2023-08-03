export type Category = "sports" | "toys" | "food";
export interface IExpense {
  _id: string;
  date: Date;
  category: Category;
  total: number;
  notes: string;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ExpensesContextType {
  expenses: IExpense[];
  setExpenses: React.Dispatch<React.SetStateAction<IExpense[]>>;
  date: string | null;
  setDate: React.Dispatch<React.SetStateAction<string | null>>;
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  total: number | null;
  setTotal: React.Dispatch<React.SetStateAction<number | null>>;
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
}
